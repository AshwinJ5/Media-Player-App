import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../../services/allAPI'

function WatchHistory() {

  const[history,setHistory]=useState([])

  useEffect(()=>{
    getHistory()
  },[])

  const getHistory =async()=>{
    const result=await getHistoryAPI()
    if(result.status===200){
      setHistory(result.data)
    }else{
      console.log("Api failed");
      console.log(result.message);
    }

    
  }
  const removeVideoHistory= async (id)=>{
      await deleteHistoryAPI(id)
      getHistory()

    }

  return (
    <>
    <div className="container d-flex mt-5 mb-5 justify-content-between ">
      <h2>Watch-History</h2>
      <Link style={{textDecoration:'none',color:'red', fontSize:'25px'}}>Back To Home <i class="fa-solid fa-arrow-rotate-left"></i></Link>
    </div>
    <table className='table mb-5 container shadow w-100'>
      <thead>
        <th>#</th>
        <th>Caption</th>
        <th>URL</th>
        <th>Timestamp</th>
        <th>Action</th>
      </thead>
      <tbody>
        {
        history?.length>0?history?.map((video,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{video?.name}</td>
          <td><a href={video?.link} target='_blank'> {video?.link}</a></td>
          <td>{video?.timeStamp}</td>
          <td><button onClick={()=>removeVideoHistory(video?.id)} className='btn'><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        )):<p className='text-danger fw-bolder'>Nothing to display</p>
        }
        
      </tbody>
    </table>
    </>
  )
}

export default WatchHistory