import React from "react";
import ProductDetailImages from "@/components/productDetailImages";
import ProductDetailInfo from "@/components/productDetailInfo";

async function getProduct(urunDetay) {
  const productSlug = urunDetay;
  try {
    const res = await fetch(
      `http://localhost:4000/api/user/product/${productSlug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch product data");
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error (product):", error);
    return null;
  }
}

export async function generateMetadata({ params: { urunDetay } }) {
  const data = await getProduct(urunDetay);

  if (data && data.product) {
    return {
      description: data?.product?.title,
    };
  }
  return {
    description: "Ürün not found",
  };
}

async function Page({ params: { urunDetay } }) {
  const data = await getProduct(urunDetay);

  if (!data) {
    return (
      <main className="icerik">
        <div className="container">
          <h1>Error loading product data</h1>
          <p>Please try again later.</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="icerik">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <ProductDetailImages data={data?.product?.image_urls} />
            </div>
            <div className="col-xl-6">
              <ProductDetailInfo data={data.product} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
