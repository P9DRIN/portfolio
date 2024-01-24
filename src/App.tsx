import './global.css'
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"

export function App() {
  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
      
    </>
  )
}

