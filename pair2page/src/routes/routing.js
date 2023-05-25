import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <div>main :)</div>,
	},
	{
		path: '/detail',
		element: <div>상품 디테일 페이지</div>,
	},
	{
		path: '/skincare',
		element: <div>스킨케어 상품 리스트 페이지</div>,
	},
	{
		path: '/makeup',
		element: <div>메이크업 상품 리스트 페이지</div>,
	},
])

export default router
