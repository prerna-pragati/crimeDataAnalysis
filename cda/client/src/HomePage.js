import './App.css';
import React, { useEffect, useState } from 'react';
import Card from './components/Card'
import generalPubimg from './images/General_public.jpeg';
import lawEnfimg from './images/lawEnforcement.jpeg';
import politicsimg from './images/politicians.jpeg';
function App(props) {
  const [apiData,setApiData] = useState({
    generalPublic: "",
    lawEnforcement: "",
    politics: ""
  });
  const callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body?.express;
  };
  const clickApi = async (route) => {
    const name = 'Suhas,game';
    const address = 'Florida'
    const routeURL = `/api/${route}?name=${name}&address=${address}`
    const response = await fetch(routeURL);
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);
    return body?.express;
  }
  // useEffect(() => { 
  //   const data = callApi();
  //   data.then((value) => setApiData(
  //     {
  //       ...apiData,
  //       generalPublic: value
  //     }
  //   ))
  // },[])
  const onClickHandler = (route) => {
    const data = clickApi(route);
    data.then((value) => console.log(value))
  }
  return (
    <div className='container-fluid d-flex justify-content-center'>
        <div className='row'>
        <div className='col-md-4' onClick={() => onClickHandler('gp')}>
        <Card imgSrc={generalPubimg} srcTitle='General Public' cardTitle="General Public" cardDescription='Explore analytics and trend queries designed for use by General Public' cardButtonText='Go' url="about/generalpublic" />
        </div>
        <div className='col-md-4' onClick={() => onClickHandler('lm')}>
        <Card imgSrc={lawEnfimg} srcTitle='Law Enforcement' cardTitle="Law Enforcement" cardDescription='Explore analytics and trend queries designed for use by Law Enforcement' cardButtonText='Go' />
          </div>
          <div className='col-md-4' onClick={() => onClickHandler('pm')}>
          <Card imgSrc={politicsimg} srcTitle='Politicians and policy Makers' cardTitle='Policy Makers' cardDescription='Explore analytics and trend queries designed for use by Politicians and policy Makers' cardButtonText='Go' />
          </div>
        </div>
      </div>
  );
}

export default App;
