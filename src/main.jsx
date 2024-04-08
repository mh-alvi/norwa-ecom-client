import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
// import store from "./ReduxStore/Store.jsx";
// import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}>
    </Provider> */}
      <RouterProvider router={router}/>
  </React.StrictMode>
);
