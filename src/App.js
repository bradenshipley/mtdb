import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import CssBaseline from '@material-ui/core/CssBaseline'

import 'react-toastify/dist/ReactToastify.css'
import routes from './Router/routes'
import { useAuth0 } from './react-auth0-spa'
function App() {
	const { loading } = useAuth0()

	if (loading) {
		return <div>Loading...</div>
	}
	return (
		<div>
			<ToastContainer autoClose={1500} />
			<CssBaseline />
			<div className="container">{routes}</div>
		</div>
	)
}

export default App
