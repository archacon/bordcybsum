import React, { Component } from "react";
import classnames from "classnames";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link, Scroll } from "react-scroll";

// <NavLink tag={Link} to="/somewhere">

const links = [
  { text: "Home", to: "head" },
  { text: "Speakers", to: "enticetitle" },
  { text: "Event Details", to: "formtitle" },
  { text: "Register", to: "formtitle" },
  { text: "Sponsors" },
  { text: "About Us", to: "aboutus" }
];

const createNavItem = ({ href, text, to, className }) => (
  <NavItem>
    <Link to={to} activeClass="active" smooth={true} offset={-27}>
      {text}
    </Link>
  </NavItem>
);

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  //Scrolling Navbar hide effect
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <div id="head">
        <Navbar
          className={classnames("nav-bar", {
            "navbar--hidden": !this.state.visible
          })}
          color="light"
          light
          expand="md"
          fixed="top"
        >
          <NavbarBrand href="/">Borderland Cyber Summit</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
