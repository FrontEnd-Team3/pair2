import './App.css'
import router from './routes/routing'
import { RouterProvider } from 'react-router-dom'

function App() {
	const routing = router
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	)
}

export default App
