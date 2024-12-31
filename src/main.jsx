import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router'
import AuthProvider from './contextProvider/AuthProvider'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Modal from './components/Modal'
import "animate.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={Router} />
      <ToastContainer position="top-center" />
      <Modal />
    </AuthProvider>
  </StrictMode>
);
