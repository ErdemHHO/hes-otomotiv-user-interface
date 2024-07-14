import React from "react";
import SideMenu from "@/components/sideMenu";
import ProductCard from "@/components/productCard";
import NavigationBar from "@/components/navigationBar";

async function getData() {
  try {
    const res = await fetch("http://server-hesotomotiv.com/api/user/products", {
      cache: "no-store",
    });
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
    const res = await fetch("http://server-hesotomotiv.com/api/user/series", {
      cache: "no-store",
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

async function page() {
  const data = await getData();
  const seriData = await getSeriData();

  if (!data || !seriData) {
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
      <div className="mt-5">
        <div className="container-fluid">
          <div className="row">
            <NavigationBar />
            <div className="col-md-3 text-center d-flex justify-content-center">
              <SideMenu data={seriData} />
            </div>
            <div className="col-md-9">
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
  );
}

export default page;
