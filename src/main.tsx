import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './pages/Home.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import TodoList from "./pages/TodoList"
import { RecoilRoot } from "recoil"


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/todo", element: <TodoList /> },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
