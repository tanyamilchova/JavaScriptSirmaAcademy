import { useState } from "react";
import MovieList from "./MovieList";
import {useState} from "react";
export default function Timer(){
    let [time,setTime]=useState(0);
    setTimeout(()=>{
        setTime(time+1);
        console.log(time);
        
    }, 1000);
    return(
        <>
        <h2>Timer</h2>
        <div>{time}</div>
        </>
    )
}