import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {ActionCreators} from '../state/index'
import img from './pexels-mica-asato-1082528.jpg'
// import { useState } from 'react'
import { useSelector } from "react-redux";


const Product = () => {
  const amount = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  const {addproduct, subproduct}=bindActionCreators(ActionCreators, dispatch);
  // let {count, setcount}= useState(0);
  return (
    <div className='container my-3 '>
      <div className="card" style={{width:"18rem"}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Marble-painted jeans </h5>
    <p className="card-text">These marble-painted jeans are created using a special technique that involves floating paint in water to create a distinctive and eccentric pattern.</p>
    <button className="btn btn-danger " disabled={amount===0}
    onClick={()=>{
      subproduct(100)
      
    }}>-</button>
     <span className='mx-5'> Add cart</span>
    <button className="btn btn-success " onClick={()=>{addproduct(100)}} >+</button>
  </div>
  
</div>
    </div>
  )
}

export default Product
