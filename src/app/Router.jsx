import Page from "./Page";
import BlogPage from "./Blogpage";
import AboutUs from "./AboutUs";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Page />
    },
    {
        path: '/blog',
        element: <BlogPage />
    },
    {
        path: '/aboutus',
        element: <AboutUs />
    },
]);

export default router;