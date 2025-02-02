import React from 'react'
import { useState,useEffect } from 'react'

const ApiData = () => {
    const [data, setData] = useState()
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await fetch("https://fakestoreapi.com/products");
              const result = await response.json();
              setData(result);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchData();
         
    },[])

    console.log("API DATA COMING...", data)
  return (
    <div>
    {data.map((a)=>{
        return <h3>{a.title}</h3>
      })}
    </div>
  )
}

export default ApiData
