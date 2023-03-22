import './Orders.scss'
import React, { useEffect, useState } from 'react'
import OrderInfo from '../../../../components/OrderInfo/OrderInfo';
import { useIndexedDB } from '../../../../hooks/useIndexedDB';
import { useTranslation } from 'react-i18next';

export default function Orders() {
    const { t } = useTranslation();
    const routesData = t("routesData", { returnObjects: true });

    const [addOrder, updateOrder, deleteOrder, getOrders] = useIndexedDB();
    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
        let timerId = null;
        const fetchOrders = () => {
            getOrders((result) => {
                setOrders(result.sort(compare));
                // Schedule the next fetch in 10 seconds
                timerId = setTimeout(fetchOrders, 10000)
            });
        };
        if (orders?.length === 0) {
            fetchOrders();
        }
        // Clean up the timer on unmount
        return () => clearTimeout(timerId);
    }, [getOrders, orders]);
    
    const compare = (b, a) => {
        if (a.dateStamp < b.dateStamp) {
          return -1;
        }
        if (a.dateStamp > b.dateStamp) {
          return 1;
        }
        return 0;
      }

      const handleDeleteOrder = (orderId) => {
        deleteOrder(orderId, () => {
          // After successful deletion, update the orders list
          getOrders((result) => {
            setOrders(result.sort(compare));
          });
        });
      };

  return (
    <div className='Orders backgroundFixed'>
        <h2>{routesData.orders}</h2>
        <section className='orders'>
            {orders?.map((order,i)=>
                <OrderInfo
                    key={i}
                    handleDeleteOrder={() => handleDeleteOrder(order.id)}
                    dateStamp={order.dateStamp}
                    menuOrders={order.orders}
                    opened={i === 0}
              />
            )}
        </section>

    </div>
  )
}
