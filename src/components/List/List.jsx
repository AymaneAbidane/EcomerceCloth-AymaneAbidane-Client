import React from 'react'
import "./List.scss"
import Card from "../Card/Card"
export const List = () => {
    const data = [
        {
            id:1,
            img:"https://images.pexels.com/photos/8801074/pexels-photo-8801074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/8801058/pexels-photo-8801058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"prod 1",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/11594667/pexels-photo-11594667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"prod 2",
            isNew:true,
            oldPrice:20,
            price:13,
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/9420678/pexels-photo-9420678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"prod 3",
            isNew:false,
            oldPrice:21,
            price:14,
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/11676647/pexels-photo-11676647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"prod 4",
            isNew:false,
            oldPrice:22,
            price:15,
        },     
        {
            id:4,
            img:"https://images.pexels.com/photos/11676647/pexels-photo-11676647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"prod 4",
            isNew:false,
            oldPrice:22,
            price:15,
        }, 
        {
            id:4,
            img:"https://images.pexels.com/photos/11676647/pexels-photo-11676647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"prod 4",
            isNew:false,
            oldPrice:22,
            price:15,
        },   
        {
            id:4,
            img:"https://images.pexels.com/photos/11676647/pexels-photo-11676647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"prod 4",
            isNew:false,
            oldPrice:22,
            price:15,
        }, 
        {
            id:4,
            img:"https://images.pexels.com/photos/11676647/pexels-photo-11676647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"prod 4",
            isNew:false,
            oldPrice:22,
            price:15,
        }, 
        {
            id:4,
            img:"https://images.pexels.com/photos/11676647/pexels-photo-11676647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"prod 4",
            isNew:false,
            oldPrice:22,
            price:15,
        }, 
        {
            id:4,
            img:"https://images.pexels.com/photos/11676647/pexels-photo-11676647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"prod 4",
            isNew:false,
            oldPrice:22,
            price:15,
        }, 
        
      ];
  return (
    <div className='list'>
          <div className="list">
             {data?.map(item=>(
                <Card item={item} key={item.id}/>
             ))}
          </div>
    </div>
  )
}
