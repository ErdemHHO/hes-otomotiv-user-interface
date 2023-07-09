
import BrandSlider from "@/components/brandSlider";
import SideMenu from "@/components/sideMenu";
import HomeBgImg from "@/components/homeBgImg";
import HomeSearchBar from "@/components/HomeSearchBar";
import ProductCard from "@/components/productCard";



async function getData() {
  const res = await fetch('http://localhost:4000/api/user/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


async function getSeriData() {

  const res = await fetch('http://localhost:4000/api/user/series')
   
  console.log(res)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}



export default async function Home() {

  const data = await getData();
  const seriData = await getSeriData();

  return (
    <main>

      <div>
        <div className="container" >
          <div className="row">
            <div className='col mt-5'>
              <SideMenu data={seriData} />
            </div>
            <div className='col'>
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
        {data.products.map(product => (
          <ProductCard key={product._id} data={product} />
        ))}
      </div>
      <div className="text-end text-denger mt-1 mx-5 p-3" >
        <a href="#" className="text-danger">Tüm Ürünleri Gör</a>
      </div>
      <BrandSlider />
    </main>
  )
}
