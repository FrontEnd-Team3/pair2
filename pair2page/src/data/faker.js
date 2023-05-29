import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'
const randomId = {
	generate() {
		return Math.floor(Math.random() * 100000 + 1)
	},
}

// 상품 상세 정보 생성 함수
export const MockProductsDetail = count => {
	const imageArray = Array(count)
		.fill()
		.map(() =>
			faker.image.urlPicsumPhotos({
				grayscale: true,
			}),
		)
	return Array(count)
		.fill()
		.map((_, i) => ({
			id: randomId.generate(),
			productName: faker.commerce.productName(),
			productDetail: faker.commerce.productName(),
			description: faker.commerce.productDescription(),
			imageURL: imageArray[i],
			price: faker.commerce.price({
				min: 100,
				max: 1000,
				dec: 0,
				symbol: '$',
			}),
			Comments: Array(Math.floor(Math.random() * 5) + 1)
				.fill()
				.map(() => {
					return {
						id: randomId.generate(),
						user: faker.lorem.word(),
						contents: faker.lorem.paragraph(),
						title: faker.lorem.sentence({ min: 10, max: 14 }),
						title2: faker.lorem.sentence({ min: 80, max: 90 }),
						isMine: false,
						writtenDate: faker.date.past() + ' ' + faker.date.weekday(),
					}
				}),
		}))
}
