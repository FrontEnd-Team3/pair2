import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import router from './routes/routing'
import { RouterProvider } from 'react-router-dom'

function App() {
	const routing = router
	return (
		<div className="Apps">
			<RouterProvider router={router} />
		</div>
	)
}

export default App
