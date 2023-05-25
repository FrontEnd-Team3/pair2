import styled from 'styled-components'

const NavBar = () => {
	return (
		<div>
			<NavContainer>
				<Menu>SKINCARE</Menu>
				<Menu>MAKEUP</Menu>
				<Menu>BODY</Menu>
				<Menu>FRAGRANCE</Menu>
				<Menu>GLOSSIWEAR</Menu>
				<Menu>SETS</Menu>
			</NavContainer>
		</div>
	)
}

export default NavBar

const NavContainer = styled.ul`
	list-style: none;
	display: flex;
	width: 388px;
	font-size: 12px;
	justify-content: space-between;
`
const Menu = styled.li`
	:hover {
		text-decoration: underline 1px;
	}
`
