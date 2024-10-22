 
 import { useState,useEffect } from "react";
 const useOnlineStatus=()=>{
    //check if online or not 
    const [online,setOnline]=useState(true);
useEffect(()=>{
    window.addEventListener("online",()=>{
      setOnline(true);
    })
    window.addEventListener("offline",()=>{
      setOnline(false);
    })
    
    
},[]);
return online;


    //its bool value 
 }
 export default useOnlineStatus;
