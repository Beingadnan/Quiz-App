import React, { useState } from 'react'
import styles from './Intro.module.css'
import {useNavigate} from 'react-router-dom'
import { SUBJECTS } from '../const'

export default function Intro() {
    const[name,setName]=useState("")
    const[selectSub,setSelectedSub]=useState("")
    const[err,setErr]=useState("")
    const[course,setCourse]=useState("")
    const navigate=useNavigate()
    function handleName(e){
        setErr("")
        setName(e.target.value)
    }
    function handleCourse(e){
      setErr("")
      setCourse(e.target.value)
    }

    function handleSub(e){
        setErr("")
        setSelectedSub(e.target.value)
    }
    function handleSumbit(){
        if(!name){
            setErr("Enter your name")
            return
        }
        if(!selectSub){
            setErr("Enter your subject")
            return
        }
        localStorage.setItem(
            "userDetails",
            JSON.stringify({
              name,
              selectSub,
            })
          );
        navigate('/start-test')
    }
   
  return (
    <div className={styles.mainContainer}>
        <input type='text' placeholder='Enter your name' onChange={handleName}/>
        <select onChange={handleSub}>
        <option value="" selected>
          Select Subject
        </option>
           {SUBJECTS.map(subject=><option value={subject}>{subject}</option>)}
        </select>
        <input type='text' placeholder='Enter your course' onChange={handleCourse}/>
        <div className={styles.btn}>
        {err && <p>{err}</p>}
        <button onClick={handleSumbit}>Sumbit</button>
        </div>
        
    </div>
  )
}
