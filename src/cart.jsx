import React from "react";
import axios from "axios"
function Cart(){
    var [cart,setCart]=React.useState([])
    var [loading,setLoading]=React.useState(0)
    React.useEffect(()=>{
        setLoading(true)
        axios.get('https://dummyjson.com/carts').then((res)=>{
            console.log(res)
            setCart([...res.data.carts[0].products])
            setLoading(false)
        })
        },[])
        function incQun(item){
          var temp=[...cart];
          temp=temp.map((titem)=>{
            if(titem.id==item.id){
              titem.quantity=titem.quantity+1
            }
            return titem
          })
          setCart([...temp])
        }
        function decQun(item){
          var temp=[...cart];
          temp=temp.map((titem)=>{
            if(titem.id==item.id){
              titem.quantity=titem.quantity-1
            }
            return titem
          })
          setCart([...temp])
        }
        return (
        
               <div className="mybox">
                  <h1 style={{textAlign:"center"}}>Cart</h1>
                  {
                    loading && (<div class="spinner-border" role="status">
                                  <span class="visually-hidden">Loading...</span>
                                    </div>)
                  }
                  <ul className="cartList">
                  {
                    cart?.map((item)=>{
                       return <li className="cartItem">
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
                                </li>
                    })
                  }
                  <h1 className="cartTotal">Total:{cart?.reduce((sum,item)=>{
                         return sum+(item.quantity*item.price)
                  },0)}</h1>
                  </ul>
                </div> 
            
        
        )
    }
export default Cart