import React, { useEffect, useState } from 'react'
import styles from './StartTest.module.css'
import { QUESTIONS_BY_SUBJECT } from '../const';
import Dialog from "@mui/material/Dialog"
import Greeting from './Greeting';
import Button from './Button';
export default function StartTest({btnText=""}) {
  const[user,setUser]=useState("");
  const[quest,setQuest]=useState("");
  const[currentQueIndex,setCurrentQueIndex]=useState(0);
  const[answer,setAnswer]=useState("");
  const[score,setScore]=useState(0);
  const[sumbit,setSumbit]=useState(false);

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("userDetails"));
    const {selectSub,name}=user

    setUser(name);
    const questions=QUESTIONS_BY_SUBJECT?.[user?.selectSub];
    setQuest(questions);
  },[]);

  const {
    question="",
    options = [],
    correctAns = "",
  }= quest?.[currentQueIndex];

  function handleSelectAnswer(e){
    setAnswer(e.target.value);
  }
function handleClickNext() {
  // calculating the score ans setting updating it to useState
  const newScore = score + (answer == correctAns ? 2 : -1);
  setScore(newScore);
  
  // if last question
  // setting test submit true to open modal
  if (currentQueIndex === 4) {
    setSumbit(true);
    return;
  }
  
  // if not last questions update current question index to prev + 1
  setCurrentQueIndex(currentQueIndex + 1);
}
if (sumbit) {
  return (
    <Dialog
      open={true}
      PaperProps={{
        style: {
          width: "30%",
        },
      }}
    >
      <Greeting
        data={{
          score,
          user,
        }}
      />
    </Dialog>
  );
}

  return (
    <div className={styles.wrapper}>
    <div className={styles.card}>
    <p>{question}</p>
    {options.map((option,index)=>(
      <div key={index}>
        <input type='radio' value={option} name={currentQueIndex}
        onChange={handleSelectAnswer}
        checked={option===answer} ></input>
        <label>{option}</label>
      </div>
    ))}
<Button 
            btnText={currentQueIndex === 4 ? "Submit" : "Next"}
            handlerFunction={handleClickNext} />
    </div>

    </div>
  )
}
