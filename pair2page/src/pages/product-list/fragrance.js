import styled from 'styled-components'
import { MockProductsDetail } from '../../data/faker'
import { Box, Grid } from 'grommet'

const Fragrance = () => {
	const fragranceProducts = MockProductsDetail(24, 'nature')
	return (
		<ContentsBox>
			<Grid
				rows={['600px', '600px', '600px', '600px', '600px', '600px']}
				columns={['360px', '360px', '360px', '360px']}
				gap="small"
				justifyContent="between"
				pad="16px"
				areas={[
					{ name: 'box1', start: [0, 0], end: [0, 0] },
					{ name: 'box2', start: [0, 1], end: [0, 1] },
					{ name: 'box3', start: [0, 2], end: [0, 2] },
					{ name: 'box4', start: [0, 3], end: [0, 3] },
					{ name: 'box5', start: [0, 4], end: [0, 4] },
					{ name: 'box6', start: [0, 5], end: [0, 5] },
					{ name: 'box7', start: [1, 0], end: [1, 0] },
					{ name: 'box8', start: [1, 1], end: [1, 1] },
					{ name: 'box9', start: [1, 2], end: [1, 2] },
					{ name: 'box10', start: [1, 3], end: [1, 3] },
					{ name: 'box11', start: [1, 4], end: [1, 4] },
					{ name: 'box12', start: [1, 5], end: [1, 5] },
					{ name: 'box13', start: [2, 0], end: [2, 0] },
					{ name: 'box14', start: [2, 1], end: [2, 1] },
					{ name: 'box15', start: [2, 2], end: [2, 2] },
					{ name: 'box16', start: [2, 3], end: [2, 3] },
					{ name: 'box17', start: [2, 4], end: [2, 4] },
					{ name: 'box18', start: [2, 5], end: [2, 5] },
					{ name: 'box19', start: [3, 0], end: [3, 0] },
					{ name: 'box20', start: [3, 1], end: [3, 1] },
					{ name: 'box21', start: [3, 2], end: [3, 2] },
					{ name: 'box22', start: [3, 3], end: [3, 3] },
					{ name: 'box23', start: [3, 4], end: [3, 4] },
					{ name: 'box24', start: [3, 5], end: [3, 5] },
				]}
			>
				<Box gridArea="box1" background="light-5"></Box>
				<Box gridArea="box2" background="light-5"></Box>
				<Box gridArea="box3" background="light-5"></Box>
				<Box gridArea="box4" background="light-5"></Box>
				<Box gridArea="box5" background="light-5"></Box>
				<Box gridArea="box6" background="light-5"></Box>
				<Box gridArea="box7" background="light-5"></Box>
				<Box gridArea="box8" background="light-5"></Box>
				<Box gridArea="box9" background="light-5"></Box>
				<Box gridArea="box10" background="light-5"></Box>
				<Box gridArea="box11" background="light-5"></Box>
				<Box gridArea="box12" background="light-5"></Box>
				<Box gridArea="box13" background="light-5"></Box>
				<Box gridArea="box14" background="light-5"></Box>
				<Box gridArea="box15" background="light-5"></Box>
				<Box gridArea="box16" background="light-5"></Box>
				<Box gridArea="box17" background="light-5"></Box>
				<Box gridArea="box18" background="light-5"></Box>
				<Box gridArea="box19" background="light-5"></Box>
				<Box gridArea="box20" background="light-5"></Box>
				<Box gridArea="box21" background="light-5"></Box>
				<Box gridArea="box22" background="light-5"></Box>
				<Box gridArea="box23" background="light-5"></Box>
				<Box gridArea="box24" background="light-5"></Box>
			</Grid>
		</ContentsBox>
	)
}

export default Fragrance

const ContentsBox = styled.div`
	margin-top: -400px;
	width: 100%;
	z-index: -1;
`
