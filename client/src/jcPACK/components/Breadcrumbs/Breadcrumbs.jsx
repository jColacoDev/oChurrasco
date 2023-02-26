import './Breadcrumbs.scss'
import React from 'react'
import { Link } from 'react-router-dom';
import { stringToUrl } from '../../utils/utils';

export default function Breadcrumbs({basePath="/", crumbs=[]}) {

    function pathFromCrumbsIndex(crumbs, index){
        let path = basePath;
        for (let i = 0; i < crumbs.length; i++) {
            path = path.concat(`/${stringToUrl(crumbs[i])}`)
            if(i === index) break;
        }
        return  path;
    }

  return (
    <div className='Breadcrumbs'>
        <Link to={`${basePath}`}>Início</Link>

        {crumbs.map((crumb, i)=>
            <div key={i}>
                <span>{`>`}</span>
                {i === crumbs.length -1 ?
                    <span>{crumb}</span>
                    :
                    <Link to={pathFromCrumbsIndex(crumbs, i)}>{crumb}</Link>
                }
            </div>
        )}
    </div>
  )
}
