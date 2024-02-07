import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM  from "react-dom";
import App from "./App";
import About from "../src/components/About"

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ProjectContainer from "./components/ProjectContainer";
import ProjectsList from "./components/ProjectsList";
import ProjectForm from "./components/ProjectForm";
import ProjectDetails from "./components/ProjectDetails";

// ReactDOM.render(<App />, document.getElementById("root"))

//routes are an array of objects
const routes = [
  //add nested routes in App object
  {
    // just forward slash, it'll route to App
    path: '/',
    element: <App />,
    children: [
      //add index: true -- default component that gets rendered
      { index: true, element: <About/> },
      {
        path: 'projects',
        element: <ProjectContainer />,
        children: [
          {
            index: true,
            element: <ProjectsList />
          },
          {
            path: 'new',
            element: <ProjectForm />
          }
        ]
      },
      //equivalent of saying localhost:3000/projects/1
      {
        path: 'projects/:id',
        element: <ProjectDetails />
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  }
]

//create the router
const router = createBrowserRouter(routes)

const rootContainer = document.getElementById("root")
const root = createRoot(rootContainer)
root.render(
  <RouterProvider router ={router}/>
);
