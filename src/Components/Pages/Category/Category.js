import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { UseContext } from '../../Hooks/Contextapi/ContextProvider';
import ShowCateProduct from './ShowCateProduct';

const Category = () => {
    const {category}=UseContext()
    return (
        <>
        <div>
            <h3 className='text-center py-5'>Category  ways product </h3>
       
         <div className='d-flex justify-content-around py-5'>
             <button onClick={()=>category(`men's clothing`)}>men's clothing</button>
             <button onClick={()=>category('electronic')}>Electronic</button>
             <button onClick={()=>category('jewelery')}>Jewelery</button>
         </div>
         <ShowCateProduct/>
        </div>
        </>
    );
};

export default Category;