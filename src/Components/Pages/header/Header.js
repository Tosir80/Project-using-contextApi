import React, { useState } from 'react'
import { Badge, Button, Offcanvas } from 'react-bootstrap'
import { UseContext } from '../../Hooks/Contextapi/ContextProvider'
import './header.css'
const Header = () => {
  const {cartitem} =UseContext()
  console.log(cartitem)

// cart itam

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


  return (
    <>
      <header>
          <div className="container d-flex justify-content-between bg-black text-white fs-6 px-5 py-2" >
              <div className="logo">StoreLogo</div>
                <div onClick={handleShow} className="cart">Cart   <Badge className='cart_sun' bg="secondary">{cartitem.length}</Badge>
                </div>
          </div>
      </header>

      {/* cart show */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Total Cart Items {cartitem.length}</Offcanvas.Title>
        </Offcanvas.Header>
         <div>
           {cartitem?.map(({title,price,image})=><div className='d-flex justify-content-between p-2 align-items-center'>
             <img className='border border-1' width={50} src={image} alt="" />
             <h6>{title}</h6>
             <p>${price}</p>
           </div>)}
         </div>
         <div className='d-flex justify-content-end bg-info p-3 '>Check Out</div>
      </Offcanvas>

    </>
  )
}

export default Header
