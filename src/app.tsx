import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './styles/app.scss';

const App: React.FC = () => {
    return (
        <div>
            <h1>A Simple React Boilerplate</h1>
            <h2>Feel free to delete anything you won't use or need.</h2>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));