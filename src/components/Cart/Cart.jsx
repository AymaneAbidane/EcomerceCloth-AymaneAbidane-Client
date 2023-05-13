import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
function Cart() {

    const data=[
        {
            id:1,
            img:"https://images.pexels.com/photos/8801074/pexels-photo-8801074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/8801058/pexels-photo-8801058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"prod 1",
            desc:"product1 description",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/11594667/pexels-photo-11594667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"prod 2",
            desc:"product2 description",
            isNew:true,
            oldPrice:20,
            price:13,
        },
    ]

  return (
    <div className='cart'>
         <h1>Products in your cart</h1>
         {data.map(item=>(
            <div className="item" key={item.id}>
                 <img src={item.img} alt="" />
                 <div className="details">
                     <h1>{item.title}</h1>
                     <p>{item.desc?.substring(0.100)}</p>
                     <div className="price">
                         1 x ${item.price}
                     </div>
                 </div>
                 <DeleteOutlinedIcon className='delete'/>
            </div>
         ))}
        <div className="tottal">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHEKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart