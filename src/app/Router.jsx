import Page from "./Page";
import BlogPage from "./Blogpage";

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
    // {
    //     path: '/aboutus',
    //     element: <div>ABOUT US PINAKAMAMAHAL KO</div>
    // },
]);

export default router;