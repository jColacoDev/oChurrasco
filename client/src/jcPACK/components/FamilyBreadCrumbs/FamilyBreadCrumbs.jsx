import './FamilyBreadCrumbs.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { normalizePathLabel } from '../../utils/utils'

const PRODUCTS_ID="640f0fdfeeadf8b0f5d5cf64";

export default function FamilyBreadCrumbs({
    handleFamilyClick =(f)=>f,
    crumbs=[],
    baseUrl= "/app",
    startPath=""
}) {
  return (
    <div className='FamilyBreadCrumbs'>
        {crumbs?.length>0 ?
            <Link className='breadcrumb' 
                data-id={PRODUCTS_ID} 
                onClick={handleFamilyClick}
                to={`${baseUrl}${startPath}`}
            >Início</Link>
        : <div><span>Início</span></div>
        }

        {crumbs && crumbs.map((crumb, i)=> <div key={i}>
            <span>{`>`}</span>
            {i < crumbs?.length -1 ?
                <Link key={i}
                    data-id={crumb._id} 
                    onClick={handleFamilyClick}
                    to={`${baseUrl}/${crumbs?.slice(0, i+1).map((crumb)=>
                        normalizePathLabel(crumb.label)).join('/')
                }`}>{crumb.label}</Link>
            :
                <span>{crumb.label}</span>
            }
        </div>)}
    </div>
  )
}
