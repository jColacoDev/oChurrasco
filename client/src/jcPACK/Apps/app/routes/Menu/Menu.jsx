import './Menu.scss'
import React, { useEffect, useState } from 'react'

import { menuSelection as menuDataEn } from './menuDataEn'
import { menuSelection as menuDataPT } from './menuDataPT'


import { useIndexedDB } from '../../../../hooks/useIndexedDB';
import OrderInfo from '../../../../components/OrderInfo/OrderInfo';
import { capitalizeString, scrollToTopClick } from '../../../../utils/utils';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../translations/translations';

export default function Menu() {
    const { t } = useTranslation();
    const routesData = t("routesData", { returnObjects: true });
    
    const [addOrder] = useIndexedDB();
    const [menuSelect, setMenuSelect] = useState("0");
    const [menuOrders, setMenuOrders] = useState([]);
    const [menuSelections, setMenuSelections] = useState(i18n.language==="pt" ?menuDataPT : menuDataEn);

    useEffect(()=>{
        const onLanguageChange = (lng) => {
            setMenuSelections(lng==="pt" ? menuDataPT : menuDataEn)
          };
          i18n.on('languageChanged', onLanguageChange);
          return () => {
            i18n.off('languageChanged', onLanguageChange);
          };
    },[]);

    const handleArticleClick = (e)=>{
        e.preventDefault();

        const selectionUpdated = {...menuSelections[parseInt(menuSelect)], articles: [menuSelections[parseInt(menuSelect)].articles.map(article=>{
            if(article.id===e.currentTarget.dataset.id){
                if(e.currentTarget.dataset.action==="add")
                    return {...article, qty: article?.qty ? article.qty+1 : 1}
                else
                    return {...article, qty: article?.qty ? article.qty-1 : 0}
            }else return article;
        })][0]};
        
        setMenuSelections(menuSelections?.map(selection=>
            selection.type===selectionUpdated.type ? 
                selectionUpdated : selection
        ));
    }

    useEffect(()=>{
        setMenuOrders(menuSelections?.map(selection=>selection?.articles.map(article=>
            article?.qty && article?.qty !== 0 ?
                article : null
        ).filter(item=>item !== null))
    )
    },[menuSelections])

    const handleMenuSelect=(e)=>{
        e.preventDefault();
        scrollToTopClick();
        setMenuSelect(e.currentTarget.dataset.selection)
    }
    const handleOrderSubmit=(e)=>{
        e.preventDefault();

        const filteredMenuOrder = menuOrders.filter(order=>order.length>0 && order);
        if(filteredMenuOrder.length > 0){
            addOrder({
                orders:filteredMenuOrder,
                dateStamp: Date.now()               
            });
            setMenuOrders([]);
            setMenuSelections(menuSelectionInput);
        }
    }

    return (
    <div className='Menu'>
        {menuOrders?.length > 0 && 
            <OrderInfo 
                handleOrderSubmit={handleOrderSubmit}
                menuOrders={menuOrders}
            />
        }
        <h2>{routesData.menu}</h2>
        <section className='menuSelect'>
            <ul>
            {menuSelections?.map((selection, i)=>
                <li key={i} className={`${menuSelect===selection.type ? "active":""}`} data-selection={selection.type} onClick={handleMenuSelect}>
                    {capitalizeString(selection.label)}
                </li>
            )}
            </ul>
        </section>
        <main>
            {
                menuSelections[parseInt(menuSelect)]?.types?.map((menuType, i)=> <section key={i}>
                    <h3>{menuType.label}</h3>
                    { menuSelections[parseInt(menuSelect)].articles?.map((menuArticle, y)=> menuArticle.type === menuType.type &&
                    <article key={y} className={`${menuArticle?.qty && menuArticle?.qty != 0 && "active"}`}>
                        <div className='menuTab'>
                            {menuArticle?.qty > 0 && <button data-action="sub" data-id={menuArticle.id} onClick={handleArticleClick}>-</button>}
                            <div className='bold'>{menuArticle?.qty ? `${menuArticle.qty}x` : ""}</div>
                            <span>{menuArticle.label}</span>
                            <span>{menuArticle.price}</span>
                            <button data-action="add" data-id={menuArticle.id} onClick={handleArticleClick}>+</button>
                        </div>
                        <span>{menuArticle.notes}</span>
                    </article>
    
                    )}
                </section>
                )
            }
    </main>
    </div>
  )
}
