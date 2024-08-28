import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import ContactForm from "../components/content/ContactUs";
import About from "../components/About";
import PracticeArea from "../components/PracticeArea";
import Blog from "../components/Blog";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "contactUs",
                element: <ContactForm/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "practiceArea",
                element: <PracticeArea/>
            },
            {
                path: "blog",
                element: <Blog/>
            },
            
           
        ]
    }
])