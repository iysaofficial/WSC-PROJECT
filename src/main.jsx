import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./pages";
import Faq from "./pages/faq";
import Contact from "./pages/contact";

import Tahun from "./pages/LOWPAGE/tahun";
import Kategori1 from "./pages/LOWPAGE/kategori1";
import Subkategori1 from "./pages/LOWPAGE/subkategori1";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/faq",
    element: <Faq />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/tahun",
    element: <Tahun />
  },
  {
    path: "/kategori1",
    element: <Kategori1 />
  },
  {
    path: "/sub1",
    element: <Subkategori1 />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
