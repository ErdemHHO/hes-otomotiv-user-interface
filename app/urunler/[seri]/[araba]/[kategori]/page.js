import React from "react";
import SideMenu from "@/components/sideMenu";
import ProductCard from "@/components/productCard";
import NavigationBar from "@/components/navigationBar";

async function getData(araba, kategori) {
  const carSlug = araba;
  const categorySlug = kategori;
  try {
    const res = await fetch(
      `https://server.hes-otomotiv.com/api/user/products/car/${carSlug}/category/${categorySlug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch product data");
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error (products):", error);
    return null;
  }
}

async function getCategoryData() {
  try {
    const res = await fetch(
      "https://server.hes-otomotiv.com/api/user/categories",
      {
        next: { revalidate: 10 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch category data");
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error (categories):", error);
    return null;
  }
}

async function getCarData(araba) {
  const slug = araba;
  try {
    const res = await fetch(
      `https://server.hes-otomotiv.com/api/user/cars/${slug}`,
      {
        next: { revalidate: 10 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch car data");
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error (car):", error);
    return null;
  }
}

async function getSeriData(seri) {
  const slug = seri;
  try {
    const res = await fetch(
      `https://server.hes-otomotiv.com/api/user/series/${slug}`,
      {
        next: { revalidate: 10 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch series data");
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error (series):", error);
    return null;
  }
}

async function getKategoriData(kategori) {
  const slug = kategori;
  try {
    const res = await fetch(
      `https://server.hes-otomotiv.com/api/user/categories/${slug}`,
      {
        next: { revalidate: 10 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch specific category data");
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error (specific category):", error);
    return null;
  }
}

async function page({ params: { araba, kategori, seri } }) {
  const data = await getData(araba, kategori);
  const categoryData = await getCategoryData();
  const carData = await getCarData(araba);
  const seriData = await getSeriData(seri);
  const categoryData2 = await getKategoriData(kategori);

  return (
    <div className="icerik">
      <div>
        <div className="mt-5">
          <div className="container-fluid">
            <NavigationBar
              seri={seriData}
              araba={carData}
              kategori={categoryData2}
            />
            <div className="row">
              <div className="col-xl-3 text-center d-flex justify-content-center">
                <SideMenu
                  data={categoryData}
                  araba={araba}
                  seri={seri}
                  kategori={kategori}
                />
              </div>
              <div className="col-xl-9">
                <div className="product_card_container">
                  {data?.products?.map((product) => (
                    <ProductCard key={product._id} data={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
