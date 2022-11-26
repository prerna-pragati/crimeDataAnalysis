import React from 'react';
import './queryDisplayComp.css';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addQuery } from '../redux/QuerySlice';
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
    const dispatch = useDispatch();
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
                                    <Link onClick={() => {
                                        console.log('Clicked inside explore')
                                        dispatch(addQuery(queryItem.title))
                                        }} className="cardLink" to={'recharts'}>Explore the Chart 
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