import React from 'react'
import Button from 'react-bootstrap/Button';
import { faHouse, faBriefcase, faDiagramProject, faGripLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../scss/Navigationbar.scss'
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar() {
  return (
    <Navbar className='navigationBar' bg="black" expand="lg">
      <Container style={{ maxWidth: '95%' }}>
        <Navbar.Brand className='nav__logo' href="#home">
          <div className='logo__firstName'>
            <span className='logo__firstLetter'>A</span><span className='logo__restLetters'>lfez</span>
          </div>
          <div className='logo__lastName'>
            Mansuri
          </div>
        </Navbar.Brand>
        <Navbar.Toggle style={{ border: '3px solid rgb(113, 186, 215)' }} aria-controls="basic-navbar-nav">
          <FontAwesomeIcon className='toggleIcon' icon={faGripLines} />        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav__option' href="/">
              <FontAwesomeIcon className='nav__optionIcon' icon={faHouse} />Home
            </Nav.Link>
            <Nav.Link className='nav__option' href="/skills">
              <FontAwesomeIcon icon={faBriefcase} className='nav__optionIcon' />Skills</Nav.Link>
            <Nav.Link className='nav__option' href="/projects">
              <FontAwesomeIcon icon={faDiagramProject} className='nav__optionIcon' />Projects</Nav.Link>
          </Nav>
          <Button className='nav__option button' href='/contact'>Contact</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigationbar
