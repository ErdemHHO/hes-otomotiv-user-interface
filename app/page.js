import BrandSlider from "@/components/brandSlider";
import SideMenu from "@/components/sideMenu";
import HomeBgImg from "@/components/homeBgImg";
import HomeSearchBar from "@/components/HomeSearchBar";
import ProductCard from "@/components/productCard";

import Link from "next/link";

async function getData() {
  try {
    const res = await fetch(
      "https://server.hes-otomotiv.com/api/user/products",
      {
        next: { revalidate: 10 },
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

async function getSeriData() {
  try {
    const res = await fetch("https://server.hes-otomotiv.com/api/user/series", {
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch series data");
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error (series):", error);
    return null;
  }
}

export default async function Home() {
  const data = await getData();
  const seriData = await getSeriData();

  return (
    <main>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 text-center d-none d-md-flex justify-content-center">
              <SideMenu data={seriData} />
            </div>
            <div className="col-xl-9">
              <HomeBgImg />
            </div>
          </div>
        </div>
      </div>

      <HomeSearchBar />

      <h1 className="text-center m-2">
        <strong>YENİ ÜRÜNLER</strong>
      </h1>
      <div className="product_card_container">
        {data?.products?.slice(0, 20).map((product) => (
          <ProductCard key={product._id} data={product} />
        ))}
      </div>
      <div className="text-end text-denger mt-1 mx-5 p-3">
        <Link href="/urunler">
          <span className="text-danger border-bottom">Tüm Ürünleri Gör</span>
        </Link>
      </div>
      <BrandSlider />
    </main>
  );
}
