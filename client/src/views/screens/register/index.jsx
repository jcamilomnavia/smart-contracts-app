// @ts-nocheck
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

const RegisterView = () => {
  const dispatch = useDispatch();
  const login = () => {
    dispatch(push(`/app/`));
  };
  return (
    <>
      <Form className="py-5 px-4">
        <h1 className="text-center mb-4">Create a New Account</h1>
        <FormGroup className="mb-2 w-50 px-2 d-inline-block">
          <Label>Name</Label>
          <Input type="email" />
        </FormGroup>
        <FormGroup className="mb-2 w-50 px-2 d-inline-block">
          <Label className="mt-2">Phone</Label>
          <Input type="tel" />
        </FormGroup>
        <FormGroup className="mb-2 w-50 px-2 d-inline-block">
          <Label>Email</Label>
          <Input type="email" />
        </FormGroup>
        <FormGroup className="mb-2 w-50 px-2 d-inline-block">
          <Label className="mt-2">Password</Label>
          <Input type="password" />
        </FormGroup>
        <Button
          type="submit"
          color="info"
          onClick={login}
          className="w-75 d-block text-center m-auto mt-3"
        >
          Register
        </Button>
      </Form>
    </>
  );
};

export default RegisterView;
