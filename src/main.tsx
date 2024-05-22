import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './pages/home';
import App from './App';
import Atts from './pages/atts';
import Activity001 from './pages/activities/activity001';
import Activity002 from './pages/activities/activity002';
import Activity003 from './pages/activities/activity003';
import Activity004 from './pages/activities/activity004';
import Activity005 from './pages/activities/activity005';
import Activity006 from './pages/activities/activity006';
import Activity007 from './pages/activities/activity007';
import Activity008 from './pages/activities/activity008';
import Activity009 from './pages/activities/activity009';
import Activity010 from './pages/activities/activity010';
import About from './pages/about/about';
import Activity011 from './pages/activities/activity011';
import Activity012 from './pages/activities/activity012';
import Activity013 from './pages/activities/activity013';
import Activity014 from './pages/activities/activity014';
import Activity015 from './pages/activities/activity015';
import Activity016 from './pages/activities/activity016';
import Activity017 from './pages/activities/activity017';
import Activity018 from './pages/activities/activity018';
import Activity019 from './pages/activities/activity019';
import Activity020 from './pages/activities/activity020';
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/activities",
        element: <Atts />,
      },
      {
        path: "/activities/001",
        element: <Activity001 />
      },
      {
        path: "/activities/002",
        element: <Activity002/>
      },
      {
        path: "/activities/003",
        element: <Activity003/>
      },
      {
        path: "/activities/004",
        element: <Activity004/>
      },
      {
        path: "/activities/005",
        element: <Activity005/>
      },
      {
        path: "/activities/006",
        element: <Activity006/>
      },
      {
        path: "/activities/007",
        element: <Activity007/>
      },
      {
        path: "/activities/008",
        element: <Activity008/>
      },
      {
        path: "/activities/009",
        element: <Activity009/>
      },
      {
        path: "/activities/010",
        element: <Activity010/>
      },
      {
        path: "/activities/011",
        element: <Activity011/>
      },
      {
        path: "/activities/012",
        element: <Activity012/>
      },
      {
        path: "/activities/013",
        element: <Activity013/>
      },
      {
        path: "/activities/014",
        element: <Activity014/>
      },
      {
        path: "/activities/015",
        element: <Activity015/>
      },
      {
        path: "/activities/016",
        element: <Activity016/>
      },
      {
        path: "/activities/017",
        element: <Activity017/>
      },
      {
        path: "/activities/018",
        element: <Activity018/>
      },
      {
        path: "/activities/019",
        element: <Activity019/>
      },
      {
        path: "/activities/020",
        element: <Activity020/>
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
