'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

function NavbarSearchInput() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    router.push(`/arama?q=${query}`);

  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
        <form onSubmit={handleSubmit} className="d-flex">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Ürün Arayın"
                aria-label="Search"
                value={query}
                onChange={handleChange}
            />
            <button className="btn btn-outline-primary">Ara</button>
        </form>
    </div>
  );
}

export default NavbarSearchInput;
