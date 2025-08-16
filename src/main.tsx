import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Loading from '@/layouts/Loading/Loading'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from '@/layouts/NotFound/NotFound'
import RootLay from '@/layouts/Root/Root'
import Home from '@/pages/Home/Home'
import { Toaster } from 'sonner'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLay />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <React.Suspense fallback={<Loading />}>
      <Toaster richColors />
      <RouterProvider router={routes} />
    </React.Suspense>
  </StrictMode>,
)
