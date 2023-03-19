import './Menu.scss'
import React from 'react'

import { menuTypes } from './menuData'
import { menuArticles } from './menuData'

export default function Menu() {

    return (
    <div className='Menu'>
        <h2>Menu</h2>
        <main>
            {
                menuTypes?.map(menuType=> <section>
                    <h3>{menuType.label}</h3>
                    { menuArticles?.map(menuArticle=> menuArticle.type === menuType.type &&
                    <article>
                        <div>
                            <span>{menuArticle.label}</span>
                            <span>{menuArticle.price}</span>
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
