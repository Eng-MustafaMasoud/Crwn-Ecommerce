import React from 'react'

import './CollectionPreview.scss'
import CollectionItems from '../Collection_items/CollectionItems'



const CollectionPreview = ({title,items}) => {
    return (
        <div className="collection-preview">    <div className="title"><h1>{title.toUpperCase()}</h1></div>
            <div className="preview">
            
                
              {items.filter((item,idx)=>idx<4).map(({id,...otherItemsProps})=>  <CollectionItems key={id}  {...otherItemsProps}/>
                      
                  )
                
              }
            </div>
            
        </div>
    )
}

export default CollectionPreview
