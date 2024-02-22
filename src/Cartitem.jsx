import React from "react"

function CartItem({item,incQun,decQun,del,index}){
    return(
        <li className="cartItem">
           <img src={item.thumbnail} alt=""/>
            <b class="itemTitle">{item.title}</b>
            <b class="itemPrice">Price:Rs.{item.price}</b>
            <div>
              <button onClick={()=>{incQun(item)}}>+</button>
              <b>{item.quantity}</b>
              <button onClick={()=>{decQun(item)}}>-</button>
             </div> 
              <div>
                  <b className="itemTotal">Rs.{item.price*item.quantity}</b>
               </div>
                  
                 <div class="del">
                 <button onClick={()=>{del(index)}}>DELETE</button>
                 </div>
             </li>
    )
}
export default CartItem