// @ts-nocheck
/* eslint-disable react/prop-types */
import React from 'react';
import { Col, Row, Card, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const OfferCard = ({ id, isBestDeal, price, amount, updated, vendor }) => {
  const dispatch = useDispatch();

  const gotodetails = () => {
    dispatch(push(`/app/offers/${id}`));
  };
  return (
    <Card className="mb-3 px-4 py-3">
      <Row>
        <div>
          <strong>OFFER # {id}</strong>{' '}
          {isBestDeal && (
            <span className="text-success float-end text-decoration-underline">
              BEST DEAL
            </span>
          )}
        </div>
        <div>
          <span className="text-decoration-underline">Price:</span> {price} ETH
        </div>
        <div>
          <span className="text-decoration-underline">Amount:</span> {amount}{' '}
          watts
        </div>
        <div>
          <span className="text-decoration-underline">Last Update:</span>{' '}
          {updated}
        </div>
        <div>
          <span className="text-decoration-underline">Vendor:</span> {vendor}
        </div>
        <Row className="w-100 mx-0 mt-3">
          <Col className="ps-0">
            <Button onClick={gotodetails} className="w-100 d-block btn-success">
              Buy
            </Button>
          </Col>
          <Col className="pe-0">
            <Button className="w-100 d-block btn-warning">Save</Button>
          </Col>
        </Row>
      </Row>
    </Card>
  );
};

export default OfferCard;
