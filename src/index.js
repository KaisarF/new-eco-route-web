import React from 'react';
import ReactDOM from 'react-dom';

import{
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import App from './App';
import FeaturesPage from './FeaturesPage';
import FAQPage from './FAQPage';
import ContactsPage from './ContactsPage';

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
    },
    {
        path:"/FeaturesPage",
        element: <FeaturesPage/>,
    },
    {
        path:"/FAQPage",
        element: <FAQPage/>,
    },
    {
        path:"/ContactsPage",
        element: <ContactsPage/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<FeaturesApp />, document.getElementById('root'));