import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import OfferCard from './offer';

const Offers = () => {
  return (
    <section>
      <Container className="mt-5">
        <Row>
          <Col xs={12} className="mb-4">
            <h1 className="title">OFFERS</h1>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <OfferCard
              id={1}
              isBestDeal
              price={0.000014}
              updated="2 hours ago"
              vendor="student1grid"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <OfferCard
              id={2}
              isBestDeal={false}
              price={0.000014}
              updated="2 hours ago"
              vendor="student1grid"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <OfferCard
              id={3}
              isBestDeal={false}
              price={0.000014}
              updated="2 hours ago"
              vendor="student1grid"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <OfferCard
              id={4}
              isBestDeal={false}
              price={0.000014}
              updated="2 hours ago"
              vendor="student1grid"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <OfferCard
              id={5}
              isBestDeal={false}
              price={0.000014}
              updated="2 hours ago"
              vendor="student1grid"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <OfferCard
              id={6}
              isBestDeal={false}
              price={0.000014}
              updated="2 hours ago"
              vendor="student1grid"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <OfferCard
              id={7}
              isBestDeal={false}
              price={0.000014}
              updated="2 hours ago"
              vendor="student1grid"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <OfferCard
              id={8}
              isBestDeal={false}
              price={0.000014}
              updated="2 hours ago"
              vendor="student1grid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Offers;
