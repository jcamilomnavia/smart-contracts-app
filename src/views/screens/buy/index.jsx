import { push } from 'connected-react-router';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Row,
  Col,
  Container,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import { useDispatch } from 'react-redux';

import { dataTable } from '../dashboard/mock-data';

const Buy = () => {
  const [isOpen, setOpen] = useState(false);
  const [bought, setBought] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const { id } = params;

  const openModal = () => {
    setOpen(true);
    setBought(true);
  };

  const closeModal =
    (redirect = false) =>
    () => {
      setOpen(false);
      if (redirect) {
        dispatch(push('/app/history'));
      }
    };
  return (
    <section>
      <Container className="mt-5">
        <Row>
          <Col xs={12} className="mb-4">
            <h1>BUY OFFER # {id}</h1>
          </Col>
          <Col xs={12}>
            <h3>Details</h3>
          </Col>
          <Col xs={12}>
            <Table bordered hover striped>
              <tbody>
                <tr>
                  <th>Seller</th>
                  <td>{dataTable[id].firstName}</td>
                </tr>
                <tr>
                  <th>Amount</th>
                  <td> {dataTable[id].buy || dataTable[id].sell} </td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td> {dataTable[id].amount} </td>
                </tr>
              </tbody>
            </Table>
            <Button
              onClick={openModal}
              className="btn-success d-block w-50 m-auto"
              disabled={bought}
            >
              BUY
            </Button>
          </Col>
        </Row>
      </Container>
      <Modal centered isOpen={isOpen}>
        <ModalHeader className="bg-success">
          <span className="text-white">SUCCESS</span>
        </ModalHeader>
        <ModalBody>
          <p>
            Your transaction has been executed succesfully. You will see the
            order details in the history page
          </p>
          <Row>
            <Col>
              <Button onClick={closeModal()} className="w-100 btn-danger">
                Close
              </Button>
            </Col>
            <Col>
              <Button
                onClick={closeModal(true)}
                className="w-100 btn-info text-white"
              >
                Go To History
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </section>
  );
};

export default Buy;
