import styled from 'styled-components'
import CarouselBox from '../../components/carousel'
import Imgbox from '../../components/img-box'
import Notice from '../../components/notice'

const MainPage = () => {
	return (
		<>
			<MainImgBox>
				<div>
					<p>New! You Look Good Cap</p>
					<p>A wearable ode to self-love and self-expression.</p>
					<div>Shop now</div>
				</div>
				<img src="img/main-img1.png" />
			</MainImgBox>
			<SubMainBox>
				<div>
					<div>SKIN FIRST</div>
					<div>MAKEUP SECOND</div>
				</div>
				<Imgbox />
			</SubMainBox>
			<div>
				<div>
					<p>OUR FRAGRANCES</p>
					<p>
						Your favorite scents that will grow with you no matter where you are
						in your personal evolution.
					</p>
					<div>Shop fragrances</div>
				</div>
				<VideoBox>
					<video src="img/main-video.mp4" loop autoPlay muted />
				</VideoBox>
			</div>
			<div>
				<p>FEATURED PRODUCTS</p>
				<CarouselBox />
			</div>
			<Notice />
		</>
	)
}

export default MainPage

const MainImgBox = styled.div`
	background-image: url(../../img/main-img2.jpg);
	background-size: 100%;
	img {
		width: 100%;
		margin-top: 240px;
	}
	div {
        margin: 20px;
		width: 350px;
		background-color: white;
		div {
            
            text-align: center
			font-size: 14px;
			width: 95px;
			height: 40px;
			background-color: pink;
            margin: 0 auto;
            :hover {
                opacity: 0.5
            }
		}
	}
`

const SubMainBox = styled.div`
	margin-top: 160px;
`

const SubMainTextBox1 = styled.div``

const SubMainImgBox = styled.div`
	img {
		width: 600px;
	}
`
const SubMainTextBox2 = styled.div``

const VideoBox = styled.div`
	video {
		width: 900px;
	}
`
