import React from "react"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import {createRoot} from "react-dom/client"
import {BudgetsProvider} from "./contexts/BudgetsContext"

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(
    <React.StrictMode>
        <BudgetsProvider>
            <App />
        </BudgetsProvider>     
    </React.StrictMode>
)