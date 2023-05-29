import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavStoreProvider from './context/navcontent'
import Layout from './components/layout'
import MainPage from './pages/main'
import ProductDetailPage from './pages/product-list'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
	return (
		<Provider store={store}>
			<NavStoreProvider>
				<BrowserRouter>
					<Routes>
						<Route element={<Layout />}>
							<Route path="/" element={<MainPage />} />
							<Route path="/detail" element={<div>상품 디테일 페이지</div>} />
							<Route
								path="/product/:category"
								element={<ProductDetailPage />}
							/>
							<Route
								path="/makeup"
								element={<div>메이크업 상품 리스트 페이지</div>}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			</NavStoreProvider>
		</Provider>
	)
}

export default App
