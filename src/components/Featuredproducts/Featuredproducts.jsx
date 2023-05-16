import React, { useEffect, useState } from 'react'
import "./Featuredproducts.scss"
import Card from '../Card/Card';
import axios from "axios"
import useFetch from '../../hooks/usefetch';
import { makeRequest } from '../../hooks/makerequest';


function Featuredproducts({type}) {
      
      // const {data,loading}=useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

      const [data,setData]=useState([])
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(false);
      useEffect(()=>{
            const fetchData=async()=>{
                try{
                  setLoading(true);
                   const res=await makeRequest.get(`/products?populate=*&[filters][type][$eq]=${type}`)
                   setData(res.data.data);
                }catch(err){
                  setError(true);
                }

                setLoading(false);
            };
            fetchData();
      },[])

      // console.log(import.meta.env);
  return (
    <div className='featuredproducts'>
        <div className="top">
             <h1>{type} products</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit quasi ratione quaerat illum odio ab, veniam, obcaecati architecto dolorem officia accusamus adipisci quia voluptas nam vel expedita doloremque error.</p>

        </div>
        <div className="bottom">
             { loading
               ? "loading" 
               : data?.map(item=>(
                <Card item={item} key={item.id}/>
             ))}
        </div>
    </div>
  )
}

export default Featuredproducts