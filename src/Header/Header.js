import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
  return (
    <div className='Header'>
        <button onClick={()=>navigate('/')} className='HeaderEl'>Статистика</button>
        <button onClick={()=>navigate('buys')} className='HeaderEl'>Расходы</button>
        <button onClick={()=>navigate('salary')} className='HeaderEl'>Доходы</button>
    </div>
  )
}
