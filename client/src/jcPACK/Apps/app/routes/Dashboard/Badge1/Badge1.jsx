import './Badge1.scss'
import React from 'react'
import { returnInitials } from '../../../../../utils/utils'

export default function Badge1({
    name = "",
    imageUrl = "",
}) {

    return <div className="Badge1">
        <figure 
            className={`profilePic ${name !== "" ? `` : `flipH`}`}
            style={{backgroundImage:`url(${imageUrl})`}}
            >{!imageUrl && returnInitials(name).toUpperCase()}
        </figure>
    </div> 
}