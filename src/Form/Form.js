import axios from 'axios'
import React, { useRef } from 'react'

export default function Form() {

    const refForm = useRef(null)
    const sendForm = (event)=>{
        // event.preventDefault()
        const obj = {
            id: Date.now(),
            name: refForm.current.name.value,
            imgUrl: refForm.current.imgUrl.value
            // Date: Date()
        }
        axios.post("http://localhost:3000/category", obj)
        refForm.current.name.value = ''
        refForm.current.imgUrl.value = ''
    }
  return (
    <div>
        <form onSubmit={(event) => sendForm(event)} ref={refForm}>
            <input placeholder='name' name='name'></input>
            <input placeholder='imgUrl' name='imgUrl'></input>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}
