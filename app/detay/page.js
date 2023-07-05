'use client'

import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProductDetailImages from '@/components/productDetailImages';
import ProductDetailInfo from '@/components/ProductDetailInfo';

function Page() {
  return (
    <main className='icerik'>
      <Container>
        <Row>
          <Col xl={6}>
            <ProductDetailImages />
          </Col>
          <Col xl={6}>
            <ProductDetailInfo />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Page;
