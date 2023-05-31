import { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import styled from 'styled-components'

const CarouselBox = () => {
	const [imgState, setImgState] = useState([])

	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		imgList()
	}, [])

	const imgList = () => {
		const images = []
		for (let i = 1; i <= 15; i++) {
			images.push(`/img/makeup-product-img/makeup${i}.png`)
		}
		setImgState(images)
	}

	const handleCarousel = direction => {
		if (direction === 'next') {
			setCurrentIndex(prevIndex =>
				prevIndex === imgState.length - 1 ? 0 : prevIndex + 1,
			)
		} else if (direction === 'prev') {
			setCurrentIndex(prevIndex =>
				prevIndex === 0 ? imgState.length - 1 : prevIndex - 1,
			)
		}
	}

	return (
		<CarouselContainer>
			<CarouselList
				style={{ transform: `translateX(-${currentIndex * 24}vw)` }}
			>
				{imgState.map((img, index) => (
					<div>
						<CaBox key={index}>
							<img src={img} />
						</CaBox>
					</div>
				))}
			</CarouselList>
			<ButtonBox>
				<Button onClick={() => handleCarousel('prev')}>•</Button>
				<Button onClick={() => handleCarousel('next')}>•</Button>
			</ButtonBox>
		</CarouselContainer>
	)
}

export default CarouselBox

const CarouselContainer = styled.div`
	overflow: hidden;
`

const CaBox = styled.div`
	margin: 0;
	width: fit-content;

	img {
		width: 24vw;
		float: left;
		margin-left: 10px;
	}
`
const ButtonBox = styled.div`
	margin-left: 45vw;
	margin-bottom: 20px;
	margin-top: 30px;
	Button {
		margin-left: 20px;
	}
`

const CarouselList = styled.div`
	display: flex;
	transition: transform 0.3s ease;
`
