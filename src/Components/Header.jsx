import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
        <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand  >
            <Link to={'/'} style={{color:'white',textDecoration:'none'}}>
              <i class="fa-solid fa-music fa-beat-fade" style={{color:'red'}} ></i>
              <span>   Media-Player</span>
            </Link>
          
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header