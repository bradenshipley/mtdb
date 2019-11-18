import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { Auth0Provider } from './react-auth0-spa'
import config from './auth_config.json'
// import { Provider } from 'react-redux'
// import store from './Ducks/store'
// import * as serviceWorker from './serviceWorker';
const onRedirectCallback = appState => {
	window.history.replaceState(
		{},
		document.title,
		appState && appState.targetUrl
			? appState.targetUrl
			: window.location.pathname
	)
}

ReactDOM.render(
	// <Provider store={store}>
	<HashRouter>
		<Auth0Provider
			domain={config.domain}
			client_id={config.clientId}
			redirect_uri={window.location.origin}
			onRedirectCallback={onRedirectCallback}
		>
			<App />
		</Auth0Provider>
	</HashRouter>,
	/* // </Provider>, */

	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
