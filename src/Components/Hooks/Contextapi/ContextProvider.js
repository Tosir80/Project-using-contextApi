
import { createContext, useContext, useEffect, useState} from 'react'
const ContextCreater=createContext()


// children props will come from app js page  
const ContextProvider=({children})=>{
    const [products,setProducts]=useState([])
    const [cartitem,setCartItem]=useState([])
    const [categorypro,setCategorypro]=useState([])

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
},[])


const addtoCart=(prod)=>{
    setCartItem([...cartitem,prod])
}
// category ways prodcut 
const category= (cate)=>{
    const keyword=cate.toLowerCase()
    const categoryProduct=products.filter(product=>product.category.toLowerCase().includes(keyword))
    setCategorypro(categoryProduct)
}

// paire value 
  const contextValue={
      products,
      addtoCart,
      cartitem,
      category,
      categorypro
  }
 
    return(
        <ContextCreater.Provider value={contextValue}>
            {children}
        </ContextCreater.Provider>
    )
}

export default ContextProvider

// for use context /// or page giye use kora jai a
// 
export const UseContext=()=>useContext(ContextCreater)