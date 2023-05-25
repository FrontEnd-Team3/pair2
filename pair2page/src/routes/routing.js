import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <div>:)</div>,
			},
			{
				path: '/skincare',
				element: <div>skincare 페이지</div>,
			},
			{
				path: '/makeup',
				element: <div>makeup 페이지</div>,
			},
			{
				path: '/detail',
				element: <div>상품 상세페이지</div>,
			},
		],
	},
])

export default router
