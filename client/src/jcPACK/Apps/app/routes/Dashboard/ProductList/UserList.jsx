import './ProductList.scss'
import React, { useEffect, useRef } from 'react'
import { svg_icons } from '../icons';
import Badge1 from '../Badge1/Badge1';

export default function UserList({
    usersLoading= true,
    gridListStyle = "list", 
    usersData = []
}) {
    const productsAreaWrapperRef = useRef();
  
    useEffect(()=>{
		console.log(gridListStyle)

        onListViewClick();
    }, [gridListStyle])

    function onListViewClick(){
        console.log(productsAreaWrapperRef.current)
        productsAreaWrapperRef.current.classList.toggle("tableView");
        productsAreaWrapperRef.current.classList.toggle("gridView");
    }

    function onGridClick(){
        productsAreaWrapperRef.current.classList.remove("tableView");
        productsAreaWrapperRef.current.classList.add("gridView");
    }
    function onListClick(){
        productsAreaWrapperRef.current.classList.remove("gridView");
        productsAreaWrapperRef.current.classList.add("tableView");
    }

    if(usersLoading) return <h4>Loading...</h4>
    return (
    <div id='ProductList'>
        <div ref={productsAreaWrapperRef} className="products-area-wrapper tableView">
            <div className="products-header">

              <div className="product-cell image">Users
                <button className="sort-button">{svg_icons.sort}</button>
              </div>

              <div className="product-cell">Status
                <button className="sort-button">{svg_icons.sort}</button>
              </div>

              <div className="product-cell status">Name
                <button className="sort-button">{svg_icons.sort}</button>
              </div>

              <div className="product-cell flex-2">About
                <button className="sort-button">{svg_icons.sort}</button>
              </div>
            </div>
            {usersData?.allUsers?.map((product)=>
                <div key={product.email} className="products-row">
                    <div className="product-cell image">
                        {/* <img src={product?.images[0]?.url} alt="product" /> */}
                        <Badge1 
                            name={product.name}
                            imageUrl={product?.images[0]?.url}
                        />
                        <span>@{product.username}</span>
                    </div>
                    <div className="product-cell status">
                        <span className="cell-label">Status:</span>
                        <span className={`status active`}>
                            active
                        </span>
                    </div>
                    
                    <div className="product-cell">
                        <span  className="cell-label">Name:</span>
                        {product.name}
                    </div>
                    <div className="product-cell flex-2">
                        <span className="cell-label">About:</span>
                        {product.about}
                    </div>
                </ div>
            )}
        </div>
    </div>
  )
}
