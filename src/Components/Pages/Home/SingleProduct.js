import React from 'react';
import { Card, Col } from 'react-bootstrap';
import CartMModal from '../../CartModal/CartMModal';
import { UseContext } from '../../Hooks/Contextapi/ContextProvider';

const SingleProduct = ({product}) => {
    const {id,title,price,description, category,image } =product
     const {addtoCart} =UseContext()
     
    return (
        <>
          <Col>
      <Card border="warning" >
        <Card.Img width={200} height={200} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="d-flex justify-content-around">
              <h6><span className='text-secondary'>$</span> {price}</h6>
              <button onClick={()=>addtoCart(product)}>Add to Cart</button>
          </div>
        </Card.Body>
      </Card>
    </Col>
    
        </>
    );
};

export default SingleProduct;