import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, IndexLink } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <Navbar staticTop collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/courses">
            <NavItem>Courses</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem>About</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <LinkContainer to="/signup">
            <NavItem>Signup</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </Navbar>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
