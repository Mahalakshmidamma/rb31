import React from "react"
import axios from "axios"

function Products(){
    var [products,setProducts]=React.useState([])
    React.useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setProducts([...res.data])
            console.log(res.data)
        })
    },[])

    return (
        <div>
            <h1>PRODUCTS</h1>
            <div className="d-flex flex-wrap w-75">
                 {
                products?.map((product)=>{
                    return (
                       <div class="card m-2" style={{width:"250px"}}>
                         <img src={product.image} class="card-img-top" alt="..."/>
                         <div class="card-body">
                            <h5 class="card-title">{product.title}</h5>
                            <p class="card-text">{product.description.slice(0,100)}</p>
                            <p class="card-text"><small class="text-body-secondary">{product.category}</small></p>
                         </div>
                       </div>
                    
                    )
                })
                 }
            </div>
            
        </div>
    )
}
export default Products