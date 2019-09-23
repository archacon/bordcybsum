import React, { Component } from 'react'
import { Navbar, Container, NavbarBrand } from 'reactstrap'
import classnames from 'classnames'



class SiteFooter extends Component {

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
      <div  className='fixed-bottom'>
        <Navbar className={classnames("nav-footer", {
          "navfooter--hidden": !this.state.visible
        })} color='light' light expand='md' fixed='bottom'>
          <Container>
            <NavbarBrand>Footer</NavbarBrand>
            <p style={{ color: 'white' }}>
              <i className='fa fa-linkedin-in' />
            </p>
          </Container>
        </Navbar>
      </div>
    )
  }
}
export default SiteFooter
