import './ProductList.scss'
import React, { useEffect, useRef } from 'react'
import { svg_icons } from '../icons';

const productsList= [
  {
    label: "Ocean",
    category: "Furniture",
    status: "active",
    sales: 11,
    stock: 36,
    price: 560,
    images: [
      {
        label: "Ocean1",
        src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      }
    ]
  },
  {
    label: "Lou",
    category: "Kitchen",
    status: "disabled",
    sales: 6,
    stock: 46,
    price: 710,
    images: [
      {
        label: "kitchen1",
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
      }
    ]
  },
  {
    label: "Dreamy",
    category: "Bedroom",
    status: "disabled",
    sales: 11,
    stock: 36,
    price: 560,
    images: [
      {
        label: "Ocean1",
        src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" 
      }
    ]
  },
  {
    label: "Boheme",
    category: "Furniture",
    status: "active",
    sales: 11,
    stock: 36,
    price: 1560,
    images: [
      {
        label: "Ocean1",
        src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" 
      }
    ]
  },
  {
    label: "Sky",
    category: "Bathroom",
    status: "disabled",
    sales: 11,
    stock: 36,
    price: 560,
    images: [
      {
        label: "Ocean1",
        src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" 
      }
    ]
  },
  {
    label: "Midnight",
    category: "Furniture",
    status: "active",
    sales: 11,
    stock: 36,
    price: 560,
    images: [
      {
        label: "Ocean1",
        src: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" 
      }
    ]
  },
  {
    label: "Palm",
    category: "Decoration",
    status: "active",
    sales: 11,
    stock: 36,
    price: 560,
    images: [
      {
        label: "Ocean1",
        src: "https://images.unsplash.com/photo-1511389026070-a14ae610a1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGludGVyaW9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
      }
    ]
  },
  {
    label: "Forest",
    category: "Living Room",
    status: "active",
    sales: 11,
    stock: 36,
    price: 560,
    images: [
      {
        label: "Ocean1",
        src: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"  
      }
    ]
  },
  {
    label: "Sand",
    category: "Living Room",
    status: "active",
    sales: 11,
    stock: 36,
    price: 560,
    images: [
      {
        label: "Ocean1",
        src: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGludGVyaW9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
      }
    ]
  },

]

export default function ProductList({
    gridListStyle = "list", 
}) {
    const productsAreaWrapperRef = useRef();
  
    useEffect(()=>{
        if(gridListStyle === "grid") onGridClick();
        else onListClick();
    }, [gridListStyle])

    function onGridClick(){
        productsAreaWrapperRef.current.classList.remove("tableView");
        productsAreaWrapperRef.current.classList.add("gridView");
    }
    function onListClick(){
        productsAreaWrapperRef.current.classList.remove("gridView");
        productsAreaWrapperRef.current.classList.add("tableView");
    }

    return (
    <div id='ProductList'>
        <div ref={productsAreaWrapperRef} className="products-area-wrapper tableView">
            <div className="products-header">

              <div className="product-cell image">Items
                <button className="sort-button">
                  {svg_icons.sort}
                </button>
              </div>

              <div className="product-cell">Category
              <button className="sort-button">
                  {svg_icons.sort}
                </button>
              </div>

              <div className="product-cell status">Status
              <button className="sort-button">
                  {svg_icons.sort}
                </button>
              </div>

              <div className="product-cell">Sales
              <button className="sort-button">
                  {svg_icons.sort}
                </button>
              </div>

              <div className="product-cell">Stock
              <button className="sort-button">
                  {svg_icons.sort}
                </button>
              </div>

              <div className="product-cell">Price
              <button className="sort-button">
                  {svg_icons.sort}
                </button>
              </div>
            </div>

            {productsList.map((product)=>
                <div key={product.label} className="products-row">
                    <div className="product-cell image">
                        <img src={product.images[0].src} alt="product" />
                        <span>{product.label}</span>
                    </div>
                    <div className="product-cell status">
                        <span className="cell-label">Status:</span>
                        <span className={`status ${product.status}`}>
                            {product.status}
                        </span>
                    </div>
                    
                    <div className="product-cell category">
                        <span  className="cell-label">Category:</span>
                        {product.category}
                    </div>
                    <div className="product-cell sales">
                        <span className="cell-label">Sales:</span>
                        {product.sales}
                    </div>
                    
                    <div className="product-cell stock">
                        <span className="cell-label">Stock:</span>
                        {product.stock}
                    </div>

                    <div className="product-cell price">
                        <span className="cell-label">Price:</span>
                        {product.price}€
                    </div>
                </ div>
            )}
        </div>
    </div>
  )
}
