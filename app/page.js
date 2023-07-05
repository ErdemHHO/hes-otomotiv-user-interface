
'use client'

import { Container,Row,Col } from "react-bootstrap";

import BrandSlider from "@/components/brandSlider";
import SeriesMenu from "@/components/seriesMenu";
import HomeBgImg from "@/components/homeBgImg";
import HomeSearchBar from "@/components/HomeSearchBar";
import ProductCard from "@/components/productCard";


export default function Home() {
  return (
    <main>

      <div>
        <Container fluid>
          <Row>
            <Col className='mt-5'>
              <SeriesMenu />
            </Col>
            <Col>
              <HomeBgImg />
            </Col>
          </Row>
        </Container>
      </div>

      <HomeSearchBar />

      <h1 className="text-center m-2">
          <strong>YENİ ÜRÜNLER</strong>
      </h1>
      <div className="product_card_container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="text-end text-denger mt-1 mx-5 p-3" >
        <a href="#" className="text-danger">Tüm Ürünleri Gör</a>
      </div>
      <BrandSlider />
    </main>
  )
}
