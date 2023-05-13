import React, { useEffect, useState } from 'react'
import "./Featuredproducts.scss"
import Card from '../Card/Card';
import axios from "axios"


function Featuredproducts({type}) {
    

      const [data,setData]=useState([])

      useEffect(()=>{
            const fetchData=async()=>{
                try{
                   const res=await axios.get("http://localhost:1337/api/products",
                   {
                     headers:
                       {Authorization:"bearer9fb225f677d409d4d959512699bc554c859fefe660b377880a37d4ac083ae0f7e9707f16efcad058ff93d1e80557498d36ecbc1dc353244b5c02cad6d13cf74a7d4c2e209dc00f173be8ab7e4e098faa7d1ab7d921200e70d3698c015355ecc7610bb59927294910a463ec95a1e7a39950b9dfbdd398d7f4983960dd5b2e2af1" ,},
                   });
                   setData(res.data.data);
                }catch(err){
                    console.log(err);
                }
            };
            fetchData();
      },[])
  return (
    <div className='featuredproducts'>
        <div className="top">
             <h1>{type} products</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit quasi ratione quaerat illum odio ab, veniam, obcaecati architecto dolorem officia accusamus adipisci quia voluptas nam vel expedita doloremque error.</p>

        </div>
        <div className="bottom">
             {data.map(item=>(
                <Card item={item} key={item.id}/>
             ))}
        </div>
    </div>
  )
}

export default Featuredproducts