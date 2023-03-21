import './OrderInfo.scss'
import React, { useEffect, useMemo, useState } from 'react'

export default function OrderInfo({
    handleOrderSubmit,
    handleDeleteOrder,
    menuOrders=[],
    dateStamp,
    opened=false,
}) {
    const [totalPrice, setTotalPrice] = useState("0");
    const [loading, setLoading] = useState(false);

    useMemo(()=>{
        let price="0";
        menuOrders?.map(order=> order?.map(article=>price=sumNumbers([price,
            multiplyNumbers([article.price, article.qty.toString()])
        ])))

        setTotalPrice(price)
        setLoading(false)
    },[menuOrders])

    const handleOrderButtonClick=(e)=>{
        e.preventDefault();
        e.currentTarget.parentElement.classList.toggle('open');
    }


function formatted_date(date){
    var result="";
    var d = new Date(date);
    result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() + 
                " "+ d.getHours()+":"+d.getMinutes()+"h"
    return result;
}
function handleDeleteOrderMiddleware(e){
    e.preventDefault();
    setLoading(true);
    handleDeleteOrder()
}

function sumNumbers(strings) {
    const regex = /(\d+(?:[,.]\d+)?)/g;
    const numbers = strings.flatMap(s => s.match(regex)).map(n => parseFloat(n.replace(',', '.')));
    const total = numbers.reduce((acc, val) => acc + val, 0);
    return total.toFixed(2);
  }
  function multiplyNumbers(strings) {
    const regex = /(\d+(?:[,.]\d+)?)/g;
    const numbers = strings.flatMap(s => s.match(regex)).map(n => parseFloat(n.replace(',', '.')));
    const product = numbers.reduce((acc, val) => acc * val, 1);
    return product.toFixed(2);
  }

  return (
    <section className={`OrderInfo ${opened ? "open":""}`}>
        <figure onClick={handleOrderButtonClick} />
        {dateStamp && <span className='dateStamp'>
            {formatted_date(dateStamp)}
        </span>}
        <article>
            <h3>Order info</h3>
            <div>
                {menuOrders?.map((order, i)=>order?.length > 0 &&
                <ul key={i}>
                    {order?.map((article, i)=>
                    <li key={i} className='menuTab'>
                        <div className='bold'>{`${article.qty}x`}</div>
                        <span>{article.label}</span>
                        <span>{article.price}</span>
                    </li>
                    )}
                </ul>
                )}
                <ul>
                    <li className='menuTab totalPrice'>
                        <span>Total:</span>
                        <span>{totalPrice}&nbsp;</span>
                        {typeof handleOrderSubmit === 'function' && (
                            <button 
                                disabled={parseInt(totalPrice) <= 0}
                                className='rectangleButton' 
                                onClick={handleOrderSubmit}
                                >Save Order</button>
                        )}
                    </li>
                    {typeof handleDeleteOrder === 'function' && <li className='menuTab'>
                            <button disabled={loading} onClick={handleDeleteOrderMiddleware} className='rectangleButton deleteButton'>Delete</button>
                    </li>

                    }
                </ul>
            </div>
        </article>
    </section>
  )
}
