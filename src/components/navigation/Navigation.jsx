import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import isBrowser from 'utils/functions/isBrowser'
import { Header, NavTitle } from './Navigation.styles'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';

const checkSelected = (link) => {
  if (!isBrowser()) return ''
  return window.location.pathname === link ? 'selected' : ''
}

const Navigation = ({ data }) => {
  const [collapsed, toggleNavbar] = useState(false);
  const {
    alt,
    description,
    logo,
    title,
  } = data
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(fileAbsolutePath:{regex: "/meta/other.md/"}) {
            frontmatter {
							contact
            }
          }
        }
      `}
      render={({ markdownRemark: { frontmatter: { contact }}}) => {
        return (
          <Header>
            <Navbar dark expand="md" fixed='top'>
              <NavbarBrand href="/">
                <img
                  alt={alt}
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                <NavTitle>{`${title}`}</NavTitle>
              </NavbarBrand>
              <NavbarToggler onClick={() => toggleNavbar(!collapsed)} />
              <Collapse isOpen={collapsed} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/" className={checkSelected('/')}>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/parts" className={checkSelected('/parts')}>Parts</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar title="Services">
                    <DropdownToggle nav caret>
                      Services
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="/services/tc" className={checkSelected('/services/tc')}>
                        TC
                      </DropdownItem>
                      <DropdownItem href="/services/stc" className={checkSelected('/services/stc')}>
                        STC
                      </DropdownItem>
                      <DropdownItem href="/services/pma" className={checkSelected('/services/pma')}>
                        PMA
                      </DropdownItem>
                      <DropdownItem href="/services/dar" className={checkSelected('/services/dar')}>
                        DAR
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink href="/about" className={checkSelected('/about')}>About Us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={contact} className={checkSelected('/contact')}>Contact Us</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Header> 
        )
      }}
    />
  )
}

export default Navigation
