// import '../node_modules/react/umd/react.development.js';
// import '../node_modules/react-dom/umd/react-dom.development.js'
import * as React from "react";
import * as ReactDOM from "react-dom";
import './app_styles.scss';
import { Nu3app } from "./components/navbar/main";

ReactDOM.render(
    <Nu3app compiler="TypeScript" framework="React" />,
    document.getElementById('example')
);