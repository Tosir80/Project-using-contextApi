import React from 'react'
import { UseContext } from '../../Hooks/Contextapi/ContextProvider'
 import {Container, Row} from 'react-bootstrap'
import SingleProduct from './SingleProduct'
import Category from '../Category/Category'
const Home = () => {
   const {products}=UseContext()
   console.log(products);
  return (
    <>
     <Container>
     <h3 style={{color:"green"}}>Total Products {products.length}</h3>
      <Row  xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.slice(0,10).map(product=><SingleProduct key={product.id} product={product}></SingleProduct>)}
      </Row>
      <Category/>
     </Container>
    </>
  )
}

export default Home
