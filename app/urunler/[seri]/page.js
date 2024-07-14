import React from "react";
import SideMenu from "@/components/sideMenu";
import ProductCard from "@/components/productCard";
import NavigationBar from "@/components/navigationBar";

async function getData(seri) {
  const slug = seri;
  try {
    const res = await fetch(
      `https://server.hes-otomotiv.com/api/user/products/series/${slug}`,
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

async function getCarData(seri) {
  const slug = seri;
  try {
    const res = await fetch(
      `https://server.hes-otomotiv.com/api/user/cars/series/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch car data");
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error (cars):", error);
    return null;
  }
}

async function getSeriData(seri) {
  const slug = seri;
  try {
    const res = await fetch(
      `https://server.hes-otomotiv.com/api/user/series/${slug}`,
      {
        cache: "no-store",
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

async function page({ params: { seri } }) {
  const data = await getData(seri);
  const carData = await getCarData(seri);
  const seriData = await getSeriData(seri);

  if (!data || !carData || !seriData) {
    return (
      <div className="icerik">
        <div className="mt-5">
          <div className="container-fluid">
            <h1>Error loading data</h1>
            <p>Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="icerik">
      <div>
        <div className="mt-5">
          <div className="container-fluid">
            <div className="row">
              <NavigationBar seri={seriData} />
              <div className="col-xl-3 text-center d-flex justify-content-center">
                <SideMenu data={carData} seri={seri} />
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
