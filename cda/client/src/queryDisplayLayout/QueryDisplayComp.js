import React from 'react';
import './queryDisplayComp.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Outlet, Link } from 'react-router-dom';
/*props 
title: string,
query: [{
   title: 
   description 
}]
*/
export default function QueryDisplay({
    title = '',
    query = []
}){
    return (
        <div className='mainContainer'>
            <div className='heading'>
                <h1 className='headingTitle'>
                    {title}
                </h1>
            </div>
            {
                query.map((queryItem,i) => {
                    return (
                        <div className='cards'>
                            <div className={`card card-${i+1}`}>
                                <div className='cardTitle'>
                                </div>
                                <h1 className='cardDescription'>
                                    {queryItem.description}
                                </h1>
                                <p className="cardExplore">
                                    <Link className="cardLink" to={'recharts'}>Explore the Chart 
                                    </Link>
                                </p>
                            </div>
                       </div>
                    )
                })
            }
            <Outlet />
        </div>
    )
}