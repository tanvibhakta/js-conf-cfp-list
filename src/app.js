import { h, Component } from 'preact';
import { Router } from 'preact-router';

import {ThemeProvider} from 'styled-components';
import GlobalStyle from "./styled/GlobalStyles";
import theme from "./styled/theme";

import Header from './components/Header';

// Code-splitting is automated for routes
import Home from './routes/home';

export default class App extends Component {

    /** Gets fired when the route changes.
     *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
     *	@param {string} event.url	The newly routed URL
     */
    handleRoute = e => {
        this.currentUrl = e.url;
    };

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div id="app">
                    <GlobalStyle/>
                    <Header />
                    <Router onChange={this.handleRoute}>
                        <Home path="/" />
                        <Home path="/past" />
                    </Router>
                </div>
            </ThemeProvider>
        );
    }
}
