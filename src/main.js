import { jsx as _jsx } from "react/jsx-runtime";
import App from "./app/App";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./shared/store/store";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(Provider, { store: store, children: _jsx(Router, { children: _jsx(App, {}) }) }));
