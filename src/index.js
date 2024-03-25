import React from 'react';
import ReactDOM from 'react-dom';

import{
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import App from './App';
import PrivacyPolicyPages from './PrivacyPolicy';

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
    },
    {
      path:"/PrivacyPolicy",
      element: <PrivacyPolicyPages/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<FeaturesApp />, document.getElementById('root'));