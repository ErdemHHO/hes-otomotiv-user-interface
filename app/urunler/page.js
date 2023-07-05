
'use client'

import React from 'react'

import { Container,Row,Col } from "react-bootstrap";

import SeriesMenu from "@/components/seriesMenu";
import ProductCard from "@/components/productCard";

function page() {
  return (
    <div>
      
      <div className='mt-5'>
        <Container fluid>
          <Row>
            <Col xl={3} className="text-center d-flex justify-content-center">
              <SeriesMenu/>
            </Col>
            <Col xl={9}>
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
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  )
}

export default page