import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { UseContext } from '../../Hooks/Contextapi/ContextProvider'

const ShowCateProduct = () => {

    const {categorypro} =UseContext()

  return (
    <>
   <Row sm={2} md={4} className="g-4">
   {
        categorypro?.map((product)=><div>
            <Card className='d-flex'>
                <img width={100} variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>)
    }
   </Row>
    </>
  )
}

export default ShowCateProduct