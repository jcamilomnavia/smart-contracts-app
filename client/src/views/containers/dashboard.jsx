// @ts-nocheck
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Collapse,
  Container,
  // DropdownItem,
  // DropdownMenu,
  // DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
} from 'reactstrap';

const DashboardContainer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <main className="auth-container">
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/app">Smart Contracts</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse className="w-100" isOpen={isOpen} navbar>
            <Nav className="me-auto w-100" navbar color="dark">
              <NavItem>
                <NavLink href="/app">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/app/history">History</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/app/offers">Offers</NavLink>
              </NavItem>
              <NavItem className="ms-auto">
                <NavLink href="/app/profile">Profile</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>

      {children}
    </main>
  );
};

export default DashboardContainer;
