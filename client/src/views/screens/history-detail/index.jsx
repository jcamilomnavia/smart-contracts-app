/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import { Col, Container, Row, Table, Button } from 'reactstrap';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { dataTable } from '../dashboard/mock-data';

const History = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id - 1;

  const goBack = useCallback(() => {
    dispatch(push(`/app/history`));
  }, [dispatch]);

  return (
    <section>
      <Container className="mt-5">
        <Row>
          <Col xs={12} className="mb-4 d-flex align-items-center">
            <Button className="btn-info d-inline me-3" onClick={goBack}>
              Go Back
            </Button>
            <h1 className="title d-inline">
              ORDER DETAIL: # {dataTable[id].id}
            </h1>
          </Col>
          <Col>
            <Table bordered hover striped>
              <tbody>
                <tr>
                  <th>Order ID</th>
                  <td> {dataTable[id].id} </td>
                </tr>
                <tr>
                  <th>Buyer</th>
                  <td>
                    {(dataTable[id].sell && dataTable[id].firstName) || 'Navia'}{' '}
                  </td>
                </tr>
                <tr>
                  <th>Seller</th>
                  <td>
                    {(dataTable[id].sell && 'Navia') || dataTable[id].firstName}{' '}
                  </td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td> {dataTable[id].amount} </td>
                </tr>
                <tr>
                  <th>Amount</th>
                  <td> {dataTable[id].buy || dataTable[id].sell} </td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>22/10/2021 </td>
                </tr>
                <tr>
                  <th>Transaction ID</th>
                  <td>{dataTable[id].tid} </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default History;
