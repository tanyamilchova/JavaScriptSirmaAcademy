import { useState, useEffect } from "react";

export default function Timer() {
        const[time,setTime]=useState(0);

        useEffect( ()=>{
            console.log('On mouth');
            
        }, []);
        useEffect( ()=>{
            console.log('On every update');
            
        }, [time]); // при промяна на time се прави update и се печати ('On every update')

        useEffect( ()=>{
            setTimeout( ()=>{
                //setTime(time+1); не е коректно -> race condition
                setTime(oldTime=>time+1); // взима текущата актуална стойност
            },1000)
        },[time])

        // 2ри начин: всяко външно дипендънси което се използва  в useEffect да е задължително включено в масива [time]
        // useEffect( ()=>{
        //     setTimeout( ()=>{
        //         setTime(oldTime=>time+1);
        //     },1000)
        // },[time])
    return (
        <>
                <h2>Timer</h2>
                <div>{time}</div>
        </>
    );
}