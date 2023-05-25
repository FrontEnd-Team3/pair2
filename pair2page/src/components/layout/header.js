import styled from 'styled-components'
import NavBar from '../nav-bar'

const Header = () => {
	return (
		<>
			<HeaderTop>
				Get a free You Look Good Decal with any ​​$40 purchase.
				<Apply>T&Cs apply.</Apply>
			</HeaderTop>
			<HeaderBottom>
				<HeaderLogo src="img/main-logo.png" />
				<NavBar />
				<HeaderMenuList>
					<li>
						<HeaderButton>SEARCH</HeaderButton>
					</li>
					<li>
						<HeaderButton>LOG IN</HeaderButton>
					</li>
					{/* 장바구니에 담긴 수는 나중에 전역 변수 생성하고 추가하기 */}
					<li>
						<HeaderButton>BAG(0)</HeaderButton>
					</li>
				</HeaderMenuList>
			</HeaderBottom>
		</>
	)
}

export default Header

const HeaderTop = styled.div`
	font-size: 14px;
	height: 27px;
	background-color: black;
	color: white;
	text-align: left;
	padding-left: 15px;
	padding-top: 3px;
`
const Apply = styled.span`
	margin-left: 20px;
	text-decoration: underline 1px;
`

const HeaderBottom = styled.div`
	display: flex;
	justify-content: space-between;
`

const HeaderLogo = styled.img`
	width: 75px;
	height: 20px;
	margin: 10px;
	padding: 0px;
`

const HeaderMenuList = styled.ul`
	font-size: 12px;
	list-style: none;
	width: 200px;
	display: flex;
	justify-content: space-evenly;
	margin-right: 10px;
`

const HeaderButton = styled.button`
	background-color: white;
	border: none;
	font-size: 12px;
	width: 55px;
	:hover {
		text-decoration: underline 1px;
	}
`
