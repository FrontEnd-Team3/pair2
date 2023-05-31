import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavStoreProvider from './context/navcontent'
import Layout from './components/layout'
import MainPage from './pages/main'
import ProductDetailPage from './pages/product-list'
import CartStoreProvider from './context/cart'
import { Provider } from 'react-redux'
import { store } from './store/store'
import ProductCartProvider from './context/one-product'
import DetailProductPage from './pages/detail-product'
import ReviewModalProvider from './context/review-modal'

function App() {
	return (
		<Provider store={store}>
			<ReviewModalProvider>
				<ProductCartProvider>
					<CartStoreProvider>
						<NavStoreProvider>
							<BrowserRouter>
								<Routes>
									<Route element={<Layout />}>
										<Route path="/" element={<MainPage />} />
										<Route path="/detail/:id" element={<DetailProductPage />} />
										<Route
											path="/product/:category"
											element={<ProductDetailPage />}
										/>
									</Route>
								</Routes>
							</BrowserRouter>
						</NavStoreProvider>
					</CartStoreProvider>
				</ProductCartProvider>
			</ReviewModalProvider>
		</Provider>
	)
}

export default App
