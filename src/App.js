import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
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
			<div className="container">{routes}</div>
		</div>
	)
}

export default App
