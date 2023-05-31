import { createContext, useContext, useState } from 'react'

export const useCart = () => useContext(CartStore)

const CartStore = createContext()

const CartStoreProvider = ({ children }) => {
	const [cartCount, setCartCount] = useState(0)
	return (
		<CartStore.Provider value={{ cartCount, setCartCount }}>
			{children}
		</CartStore.Provider>
	)
}

export default CartStoreProvider
