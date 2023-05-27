import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import router from './routes/routing'
import { RouterProvider } from 'react-router-dom'
import NavStoreProvider from './context/navcontent'

function App() {
	const routing = router
	return (
		<NavStoreProvider>
			<div className="Apps">
				<RouterProvider router={router} />
			</div>
		</NavStoreProvider>
	)
}

export default App
