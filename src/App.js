import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Dashboard from "./Dashboard";
import './dashboard.css';

function App() {
    return (
        <div className="App">
            <div className="container-fluid">
                <Dashboard/>
            </div>
        </div>
    );
}

export default App;