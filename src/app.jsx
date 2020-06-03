import React from 'react';
import ReactDOM from 'react-dom';

// Stylesheet
import './styles/app.scss';

function App() {
    return(
        <div>
            <h1>Hi, Welcome to React!</h1>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));

