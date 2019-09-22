import React, { Component } from 'react'
import classnames from "classnames";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import {
  Link,
  Scroll
} from 'react-scroll';

 // <NavLink tag={Link} to="/somewhere">


 const links = [
   { href: '#home', text: 'Home', to: 'head' },
   { href: '#speakers', text: 'Speakers', to: 'enticetitle' },
   { href: '#details', text: 'Event Details', to: 'formtitle' },
   { href: '#register', text: 'Register', to: 'formtitle' },
   { href: '#sponsors', text: 'Sponsors' },
   { href: '#About Us', text: 'About Us', to: 'aboutus' }
 ]

 const createNavItem = ({ href, text, to, className }) => (
   <NavItem>
     <NavLink>
      <Link
        href={href}
        to={to}
        className={className}
        activeClass= 'active'
        smooth={true}
        offset={-27}
        >
        {text}
      </Link>
     </NavLink>
   </NavItem>
 )



export default class Example extends Component {
  constructor (props) {
    super(props)

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
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

  render () {
    return (
      <div id='head'>
        <Navbar className={classnames("nav-bar", {
          "navbar--hidden": !this.state.visible
        })} color='light' light expand='md' fixed='top'>
          <NavbarBrand href='/'>Borderland Cyber Summit</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
