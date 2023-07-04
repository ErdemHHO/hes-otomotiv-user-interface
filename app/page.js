
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
      <div className="parts__container">
          <ProductCard />
      </div>

      <HomeSearchBar />

      <BrandSlider />
    </main>
  )
}
