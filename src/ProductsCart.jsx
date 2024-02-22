import React from 'react'

const ProductsCart=({CartItems})=>{
    return (
        <div>
            <i className='bi bi-cart4 cartShape'></i>
            <ul>
                <h1>welcome to cart</h1>
                {
                    CartItems?.map((item)=>{
                        return (
                            <li>{item.title}</li>
                        )
                    })
                }
            </ul>
            {
              CartItems.length===0 &&<h3>Cart Empty</h3>
            }
        </div>
    )
}
export default ProductsCart