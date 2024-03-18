import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Mainpage () {

    const [statistics, setStatistics] = useState([])
    
    const getSpend = async()=>{
        const data1 = await axios.get('http://localhost:3000/expenses')
        console.log(data1.data.categoryId);
        setStatistics(data1.data)
        
    }
    
    useEffect(()=> {
        getSpend()
    }, [])

  return (
    <div>
        <div>Сортировка</div>
        <div className='Buys'>
            <p  className='BuysEl'>Всего расхода:</p>
            {statistics.map((statistic)=>
                <div key={statistic.id} className='BuysEl'>
                <p>Сумма: {statistic.price}</p>
                <p>Категория: {statistic.categoryId}</p>
                <p>Комментарии: {statistic.comment}</p>            
                <button className='buttonDel'>Удалить</button>
                </div>        
            )}
        </div>
    </div>
  )
}
