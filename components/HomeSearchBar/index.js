'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";


function SearchForm() {
  const router = useRouter();
  const [query, setQuery] = useState('');


  const handleSubmit = (e) => {

    e.preventDefault();

    if (typeof query !== "string") {
      return;
    }

    router.push(`/arama?q=${query}`);

  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 p-3 mt-5">
          <input
            type="search"
            className="form-control"
            placeholder="Oem No Veya Ürün Adı Giriniz"
            aria-label="Ara..."
            aria-describedby="button-addon2"
            value={query}
            onChange={handleChange}
          />
          <button className="searchButton" type="submit" id="button-addon2">
            Ara
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
