import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'
const randomId = {
	generate() {
		return Math.floor(Math.random() * 100000 + 1)
	},
}

export const MockPostDetail = count => {
	return Array(count)
		.fill()
		.map((_, i) => ({
			id: randomId.generate(),
			Comments: Array(count)
				.fill()
				.map(() => {
					return {
						id: randomId.generate(),
						writtenDate:
							faker.finance.amount({ min: 22, max: 23, dec: 0 }) +
							'.' +
							faker.finance.amount({ min: 1, max: 12, dec: 0 }) +
							'.' +
							faker.finance.amount({ min: 1, max: 30, dec: 0 }),
						user: faker.lorem.word(),
						title: faker.lorem.words({ min: 2, max: 4 }),
						title2: faker.lorem.words({ min: 2, max: 4 }),
						contents: faker.lorem.sentence({ min: 3, max: 5 }),
						isMine: false,
					}
				}),
		}))
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
	const commentsArray = Array(Math.floor(Math.random() * 10) + 1)
		.fill()
		.map(() => {
			return {
				id: randomId.generate(),
				writtenDate:
					faker.finance.amount({ min: 22, max: 23, dec: 0 }) +
					'.' +
					faker.finance.amount({ min: 1, max: 12, dec: 0 }) +
					'.' +
					faker.finance.amount({ min: 1, max: 30, dec: 0 }),
				user: faker.lorem.word(),
				userLocation:
					'(' +
					faker.location.cityName() +
					', ' +
					faker.location.country() +
					')',
				rating: '⭐'.repeat(faker.finance.amount({ min: 1, max: 5, dec: 0 })),
				title: faker.lorem.words({ min: 2, max: 4 }),
				contents: faker.lorem.sentence({ min: 3, max: 5 }),
				isMine: false,
			}
		})
	return Array(count)
		.fill()
		.map((_, i) => ({
			id: randomId.generate(),
			productName: faker.commerce.productName(),
			productDetail: faker.commerce.productName(),
			descriptionSummary: faker.company.catchPhrase(),
			description: faker.lorem.paragraphs(12),
			imageURL: imageArray[i],
			price: faker.commerce.price({
				min: 100,
				max: 1000,
				dec: 0,
				symbol: '$',
			}),
			AverageRating: faker.finance.amount({ min: 1, max: 5, dec: 2 }),
			Comments: commentsArray,
			CommentsCount: commentsArray.length,
		}))
}
