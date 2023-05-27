import styled from 'styled-components'
import NavBar from '../nav-bar'
// import NavBar from '../nav-bar'

// const Header = () => {
// 	return (
// 		<>
//
//
// 		</>
// 	)
// }

// export default Header

function Header() {
	return (
		<HeaderContainer>
			<HeaderTop>
				Get a free You Look Good Decal with any ​​$40 purchase.
				<Apply>T&Cs apply.</Apply>
			</HeaderTop>
			<NavBar />
		</HeaderContainer>

	)
}

export default Header


const HeaderContainer = styled.div`
	position: fixed;
	width: 100%;
`

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
