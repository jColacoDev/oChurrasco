import './FamilyBreadCrumbs.scss'
import React from 'react'

export default function FamilyBreadCrumbs({
    handleFamilyClick =(f)=>f,
    crumbs=[]
}) {
  return (
    <div className='FamilyBreadCrumbs'>
        {crumbs?.length>0 ?
            <div data-id="root" className='breadcrumb' 
                onClick={handleFamilyClick}
            >Início</div>
        : <div><span>Início</span></div>
        }

        {crumbs && crumbs.map((crumb, i)=>
            <div key={i}>
                <span>{`>`}</span>
                {i < crumbs?.length -1 ?
                    <div data-id={crumb._id} onClick={handleFamilyClick} 
                        className='breadcrumb'
                    >{crumb.label}</div>
                    :
                    <span>{crumb.label}</span>
                }
            </div>
        )}
    </div>
  )
}
