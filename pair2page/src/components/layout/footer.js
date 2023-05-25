import styled from 'styled-components'

const Footer = () => {
	return (
		<FooterMain>
			<img src="img/footer-img.png" />
		</FooterMain>
	)
}
export default Footer

const FooterMain = styled.div`
	background-color: #faf3f4;
	img {
		width: 150px;
	}
`
