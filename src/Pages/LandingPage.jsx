import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByURL=useNavigate()
  return (
    <>
        <Row className='mt-5 align-items-center justify-content-between w-100'>
             <Col lg={5}>
                <h1 style={{fontSize:"50px"}}> Welcome to <span style={{color:'red'}}>Media Player</span> </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum adipisci minus, ducimus veniam quasi ad perspiciatis, quam exercitationem inventore consectetur, expedita odit enim vitae sapiente voluptatibus quia hic recusandae.</p>
                    <button onClick={()=>navigateByURL('./home')} className='btn btn-danger mt-4'>Get Started</button>
            </Col>
            <Col lg={5}> <img src="https://cdn.dribbble.com/users/34556/screenshots/1680799/play.gif" alt="" /></Col>
            <Col></Col>
        </Row>

        <div className="container mb-5 mt-5 d-flex align-items-center justify-content-between  flex-column">
            <h3>Features</h3>
            <div className="cards mt-5 d-flex align-items-center justify-content-between w-100">
            <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" style={{height:'300px'}} />
            <Card.Body>
            <Card.Title>Managing Videos</Card.Title>
            <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla? Nesciunt corrupti reprehenderit, alias ut exercitationem libero fugiat in ea beatae repellendus? Explicabo ex suscipit accusantium? Hic iusto nam ad.
            </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/1878767/screenshots/3980559/music.gif"  style={{height:'300px'}}/>
            <Card.Body>
            <Card.Title>Categorized Musics</Card.Title>
            <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla? Nesciunt corrupti reprehenderit, alias ut exercitationem libero fugiat in ea beatae repellendus? Explicabo ex suscipit accusantium? Hic iusto nam ad.
            </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/497438/screenshots/2084032/xtyf_1.gif" style={{height:'300px'}}/>
            <Card.Body>
            <Card.Title>Categorized Videos</Card.Title>
            <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla? Nesciunt corrupti reprehenderit, alias ut exercitationem libero fugiat in ea beatae repellendus? Explicabo ex suscipit accusantium? Hic iusto nam ad.
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
        </div>
        <div className="container border rounded p-5 border-light d-flex mb-5 align-items-center justify-content-between w-100 ">
          <div className="col-lg-5">
            <h4 className='text-warning'>Simple, Powerful & fast</h4>
            <h6 className='mb-5 mt-3'> <span className=' text-warning fw-bolder'>Play EveryThing</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium incidunt voluptatum adipisci illum beatae nemo repudiandae ullam est necessitatibus impedit esse, officiis non corrupti possimus dolorum culpa ratione nulla amet!</h6>

            <h6 className='mb-5 mt-3'> <span className=' text-warning fw-bolder'>Categorize videos</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium incidunt voluptatum adipisci illum beatae nemo repudiandae ullam est necessitatibus impedit esse, officiis non corrupti possimus dolorum culpa ratione nulla amet!</h6>

            <h6 className='mb-5 mt-3'> <span className=' text-warning fw-bolder'>Managing Videos</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium incidunt voluptatum adipisci illum beatae nemo repudiandae ullam est necessitatibus impedit esse, officiis non corrupti possimus dolorum culpa ratione nulla amet!</h6>

            </div>

            
            <div className="video col-lg-5">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/9-rkz2JuAxc?si=bFNtf0a53QFUvkrh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          </div> 

          

    </>
  )
}

export default LandingPage