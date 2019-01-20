import React from 'react';
// import { Card, Toolbar, Button } from 'react-onsenui';
import { Page } from 'react-onsenui';

// Components
    import Header from './components/header';
    
// Webpack CSS import
import './App.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class App extends React.Component {

    render() {



        return (
            <div className="App">
                <Page>
                    <Header></Header>
                </Page>
            </div>
        );
    }
}

export default App;