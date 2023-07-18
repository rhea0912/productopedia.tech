import Page from "./Page";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Page />
    },
    // {
    //     path: '/aboutus',
    //     element: <div>ABOUT US PINAKAMAMAHAL KO</div>
    // },
]);

export default router;