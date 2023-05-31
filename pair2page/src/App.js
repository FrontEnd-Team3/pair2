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
import ReviewsCartProvider from './context/reviews'

function App() {
	return (
		<Provider store={store}>
			<ProductCartProvider>
				<CartStoreProvider>
					<NavStoreProvider>
						<ReviewsCartProvider>
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
						</ReviewsCartProvider>
					</NavStoreProvider>
				</CartStoreProvider>
			</ProductCartProvider>
		</Provider>
	)
}

export default App
