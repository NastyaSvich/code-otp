import React from 'react';
import {CodeInput} from "@alfalab/core-components/code-input";
import {Link} from "@alfalab/core-components/link";
import './App.css';

function App() {
    return (
        <div className="app">
            <div>Ввод кода из СМС в браузерах с поддержкой WebOTP Api.</div>
            <div>Для автоматической подстановки кода необходимо отправить смс на свой телефон
                (номера отправителя не должно быть в контактах) формата:
            </div>
            
            <pre className={'codeBlock'}>
                <code className="language-text">
                    Your OTP is: 1234.
                    <br/>
                    <br/>
                    @main--code-otp.netlify.app #1234
                </code>
            </pre>
            
            <CodeInput className={'alfaCodeInput'}/>
            
            <Link className={'alfaLink'} href={'https://developer.chrome.com/articles/web-otp'} target={"_blank"} view={'secondary'}>
                Подробнее о WebOTP Api
            </Link>
        </div>
    );
}

export default App;
