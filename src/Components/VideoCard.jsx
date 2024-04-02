import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryAPI, deleteVideoAPI } from '../../services/allAPI';




function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true);
  
  
  const{name,link}=video
  
  
  let today= new Date()
  let timeStamp=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',}).format(today)
  let videoHistory={name,link,timeStamp}


  // make api call
  await addVideoHistoryAPI(videoHistory)
  
  }
  const removeVideo=async (id)=>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }
 const  dragStarted=(e,id)=>{
  console.log("Drag Started...Video id:"+id);
  e.dataTransfer.setData("VideoId",id)
 }

  return (
    <>
      <Card style={{ width: '15rem',marginBottom:'25px' }}onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" onClick={handleShow} height={'200px'}  src={video?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h5>{video?.name}</h5>
          {insideCategory?null:<Button onClick={()=>removeVideo(video?.id)} className='btn' ><i class="fa-solid fa-trash text-danger"></i></Button>
}        </Card.Title>     
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="504" src={`${video?.link}?autoplay=1` }title="Dangal | Official Trailer | Aamir Khan | In Cinemas Dec 23, 2016" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Modal.Body>
    </Modal>
    
    </>
  )
}

export default VideoCard