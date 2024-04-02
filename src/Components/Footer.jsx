import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import './Footer.css'
import { Link } from 'react-router-dom';


function Footer() {
  return (

    <div>
      
       <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Albums</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                 Tamil
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Malayalam
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  English
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Kannada
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Artists</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                  Arjit Singh
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Shreya Ghoshal
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  A R Rahman
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Atif Aslam
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Communities</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  For Artists
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Developers
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Advertising
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Investors
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Products</h5>

            <ul className='list-unstyled'>
              <li>
              <Link to={'https://bootswatch.com/'} style={{color:'white',textDecoration:'none'}}>BootWatch</Link>

              </li>
              <li>
              <Link to={'https://mdbootstrap.com/'} style={{color:'white',textDecoration:'none'}}>MdBootstrap</Link>

              </li>
              <li>
              <Link to={'https://react-bootstrap.github.io/'} style={{color:'white',textDecoration:'none'}}>React Bootstrap</Link>

              </li>
              <li>
              <Link to={'https://react.dev/'} style={{color:'white',textDecoration:'none'}}>React</Link>

              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MediaPlayer.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer