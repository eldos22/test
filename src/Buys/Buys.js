import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import Category from './Category'

export default function Buys() {
    const [products, setProducts] = useState([])
    let [showModal, setShowModal] = useState(false)
  
    const getData = async()=>{
        const data = await axios.get('http://localhost:3000/category')
        // console.log(data.data);
        setProducts(data.data)
        
    }
  
    useEffect(()=> {
        getData()
    }, [])

  return (
    <div>
        <div className='Category'>{products.map(product => <Category product={product} key={product.id}></Category>)}</div>
        <button onClick={()=>setShowModal(showModal = !showModal)} className='BuysEl'>{<img src='https://img.freepik.com/free-photo/blue-piece-showing-empty-sign_1156-435.jpg' width={200} height={200}></img>}
        <p>Добавить категоию</p></button>
        {showModal && <Form></Form>}
    </div>
  )
}
