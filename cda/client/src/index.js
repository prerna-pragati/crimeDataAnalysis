import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'
import Root from './routes/Root';
// import App from './HomePage';
import QueryDisplay from './queryDisplayLayout/QueryDisplayComp';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './HomePage'
import LineChart  from './LineChart';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  children: [{
    path: "/home",
    element: <Homepage />
  },
  {
    path:'/home/about/generalPublic',
    element: <QueryDisplay 
    title='Trend Queries useful for General Public'
    query={[
      {
        title: 'complex Query 1',
        description: 'This will be our complex query 1'
      },
      {
        title: 'complex Query 2',
        description: 'This will be our complex query 2 and how it correlated to the issues at hand '
      },
      {
        title: 'complex Query 3',
        description: 'This will be our complex query 3'
      },
    ]}
    />,
    children: [{
      path: '/home/about/generalPublic/recharts',
      element: <LineChart />
    }]
  }
]
}])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
