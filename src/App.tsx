import React from 'react';
import {CodeInput} from "@alfalab/core-components/code-input";
import './App.css';

function App() {
    return (
        <div className="app">
            <div>Ввод кода otp</div>
            
            <CodeInput className={'alfaCodeInput'}/>
        </div>
    );
}

export default App;
