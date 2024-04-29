import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button';

export default function Greeting({data ,btnText = ""}) {
    const navigate=useNavigate();
    function getHomepage(){
        navigate('/');
    }
    const {score=0,user=""}=data
    useEffect(()=>{
        navigate('/')
    },[])
  return (
    <div>
        <h4>Hey {user}</h4>
        <p>You have scored : {score}/10</p>
        <p>status : {score >5 ? "Pass" : "Fail"}</p>
       <Button  btnText="Go to home page"
        handlerFunction={getHomepage} ></Button>
    </div>
  )
}
