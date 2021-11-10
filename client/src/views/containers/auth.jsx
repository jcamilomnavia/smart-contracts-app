// @ts-nocheck
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

const AuthContainer = ({ children }) => {
  return (
    <main className="auth-container">
      <Container>
        <Row className="auth-row justify-content-center align-items-center">
          <Col xs={10} md={5}>
            <Card>
              <CardBody>{children}</CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AuthContainer;
