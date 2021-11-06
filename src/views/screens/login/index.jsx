// @ts-nocheck
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

const LoginView = () => {
  const dispatch = useDispatch();
  const login = () => {
    dispatch(push(`/app/`));
  };
  return (
    <Form className="py-5 px-4">
      <h1 className="text-center mb-4">Welcome back!</h1>
      <FormGroup>
        <Label className="w-100">Email</Label>
        <Input type="email" className="w-100" />
      </FormGroup>
      <FormGroup>
        <Label className="mt-2 w-100">Password</Label>
        <Input type="password" className="w-100" />
      </FormGroup>
      <Button
        type="submit"
        color="info"
        onClick={login}
        className="w-75 d-block text-center m-auto mt-3"
      >
        LOGIN
      </Button>
    </Form>
  );
};

export default LoginView;
