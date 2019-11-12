import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import routes from './Router/routes'

function App() {
	return (
		<div>
			<ToastContainer autoClose={1500} />
			<div className="container">{routes}</div>
		</div>
	)
}

export default App
