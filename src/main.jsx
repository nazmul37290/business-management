import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import Context from './provider/Context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Context>
    <RouterProvider router={Routes}>

    </RouterProvider>
   </Context>
   
  </StrictMode>,
)
