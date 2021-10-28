import React from 'react'
import './MenuItems.scss'

import {withRouter} from 'react-router-dom';

const MenuItems = ({title,imageUrl,size,linkUrl,history,match}) => {
    return (
        <div className={`${size} menu-items`} onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>
            <div style={{
            backgroundImage:`url(${imageUrl})`
        }} className="background-image" />
       <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now!</span>
            </div>
            </div>
    )
}

export default withRouter(MenuItems);
