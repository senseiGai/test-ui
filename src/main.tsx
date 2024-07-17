import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "spark-admin-sdk";
import "../node_modules/spark-admin-sdk/dist/style.css";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
