"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SideMenu from "@/components/sideMenu";
import ProductCard from "@/components/productCard";

async function getSearchRequest(query) {
  try {
    const res = await fetch(
      `https://server-hesotomotiv.com/api/user/product/search/search?q=${query}`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch search results");
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error (search):", error);
    return null;
  }
}

async function getSeriData() {
  try {
    const res = await fetch("https://server-hesotomotiv.com/api/user/series", {
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

function Page() {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  const [data, setData] = useState(null);
  const [seriData, setSeriData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const fetchedSeriData = await getSeriData();
        const fetchedData = await getSearchRequest(encodedSearchQuery);

        setSeriData(fetchedSeriData);
        setData(fetchedData);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    }

    fetchData();
  }, [encodedSearchQuery]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Error loading data</h1>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="icerik">
      <div>
        <div className="mt-5">
          <div className="container-fluid">
            <div className="row">
              <h1 className="text-center baslik-h1">
                {data?.products
                  ? `${data.products.length} adet ürün bulundu.`
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
