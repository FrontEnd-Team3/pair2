import React, { useState } from 'react'
import styled from 'styled-components'
import { Collapse, Navbar, Nav, NavItem } from 'reactstrap'

const NavBar = args => {
	const [isOpen, setIsOpen] = useState(false)

	const handleToggleOpen = () => setIsOpen(true)
	const handleToggleClose = () => setIsOpen(false)
	return (
		<Container>
			<Navbar {...args}>
				<HeaderLogo src="img/main-logo.png" />
				<CenterMenuList onMouseEnter={handleToggleOpen}>
					<EachMenu>SKINCARE</EachMenu>
					<EachMenu>MAKEUP</EachMenu>
					<EachMenu>BODY</EachMenu>
					<EachMenu>FRAGRANCE</EachMenu>
					<EachMenu>GLOSSIWEAR</EachMenu>
					<EachMenu>SETS</EachMenu>
				</CenterMenuList>
				<HeaderBottom>
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
				<Collapse isOpen={isOpen} navbar>
					<Nav
						className="me-auto"
						navbar
						onMouseEnter={handleToggleOpen}
						onMouseLeave={handleToggleClose}
					>
						<NavContainer>
							<NavItem>
								<NavContents>
									<p>Shop All</p>
									<p>Bestsellers</p>
								</NavContents>
								<NavContents>
									<p style={{ color: 'blue' }}>NEW</p>
									<p>G Suit</p>
									<p>You Look Good Cap</p>
								</NavContents>
							</NavItem>
							<NavItem>
								{/* 마우스 올라간 메뉴마다 다른 상세 메뉴 보이도록! */}
								detail
							</NavItem>
							<NavItem>
								<NavImage src="img/menu-dropdown-img0.png" />
							</NavItem>
						</NavContainer>
					</Nav>
				</Collapse>
			</Navbar>
		</Container>
	)
}

export default NavBar

const Container = styled.div`
	background-color: white;
`

const HeaderBottom = styled.div`
	display: flex;
	justify-content: space-between;
`

const HeaderLogo = styled.img`
	width: 75px;
	height: 20px;
	margin-top: -10px;
	padding: 0px;
`
const CenterMenuList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-evenly;
	width: 400px;
	font-size: 12px;
	padding: 0;
	margin-bottom: 5px;
`
const EachMenu = styled.li`
	:hover {
		text-decoration: underline 1px;
	}
`

const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`

const NavContents = styled.div`
	font-size: 15px;
	line-height: 5px;
	margin-bottom: 50px;

	font-weight: 300;
	letter-spacing: -0.5px;
`

const HeaderMenuList = styled.ul`
	font-size: 12px;
	list-style: none;
	width: 200px;
	display: flex;
	justify-content: space-evenly;
	margin-right: 10px;
	margin-bottom: 5px;
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

const NavImage = styled.img`
	width: 221px;
	height: 276px;
`
