"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import SideMenu from "@/components/sideMenu";
import ProductCard from "@/components/productCard";

async function getSearchRequest(query) {
  const res = await fetch(
    `https://server.hes-otomotiv.com/api/user/product/search/search?q=${query}`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();
  return data;
}

async function getSeriData() {
  const res = await fetch("https://server.hes-otomotiv.com/api/user/series", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Page() {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  const seriData = await getSeriData();
  const data = await getSearchRequest(encodedSearchQuery);

  return (
    <div className="icerik">
      <div>
        <div className="mt-5">
          <div className="container-fluid">
            <div className="row">
              <h1 className="text-center baslik-h1">
                {data.products
                  ? `${data.products?.length} adet ürün bulundu.`
                  : "Ürün bulunamadı."}
              </h1>
              <div className="col-xl-3 text-center d-flex justify-content-center">
                <SideMenu data={seriData} />
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

export default Page;
