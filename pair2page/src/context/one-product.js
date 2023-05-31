import { createContext, useContext, useState } from 'react'

const ProductCart = createContext()

export const useProduct = () => useContext(ProductCart)

const ProductCartProvider = ({ children }) => {
	const [targetProduct, setTargetProduct] = useState({})
	return (
		<ProductCart.Provider value={{ targetProduct, setTargetProduct }}>
			{children}
		</ProductCart.Provider>
	)
}

export default ProductCartProvider
