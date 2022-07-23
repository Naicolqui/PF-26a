import React from "react";
import './ProductItem.css'
import trash from '../../images/trash.png'
import axios from "axios";
// import {Card} from 'react-bootstrap'
export default function ProductItem({data, addToCart, deleteOneFromCart, deleteAllFromCart}){
    let { id, name, price, image, quantity, stock } = data;

    const handleAdd = async(e) =>{
        
        addToCart(id)

        stock = stock - 1;
        console.log("changeStock: ", stock)
        const put = await axios.put(`http://localhost:3001/function/stock/${id}/${stock}`);
        console.log("changed stock", stock)
        console.log("axios.put", put)
    }

    return(
        <div className="fatherContainer">
            <div className="buttonContainer">
               <button className="deleteAllButton" onClick={()=> deleteAllFromCart(id, true)}><img className="deleteBtnImg" src={trash} alt='X'/></button>
            </div>
            <img className="itemImage" src={image} alt=""/>
            <div className="textContainer">
               <h4>{name}</h4>
               <h5>{price} x {quantity} = ${price * quantity}</h5>
               <span>Stock:{stock}</span>
            </div>
            <div className="buttonContainer">
               <button className="actionBtn" onClick={(e)=> handleAdd(e)}>Agregar</button>
               <button className="actionBtn" onClick={()=> deleteOneFromCart(id)}>Quitar</button>
            </div>
        </div>
    )
}