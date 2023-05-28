import { faker } from '@faker-js/faker'

const randomId = {
	generate() {
		return Math.floor(Math.random() * 100000 + 1)
	},
}

// 게시글 데이터 생성 함수
export const MockPosts = count => {
	Array(count)
		.fill()
		.map(() => ({
			title: faker.company.catchPhrase(),
			date: faker.date.past(),
			userName: '@' + faker.lorem.word({ min: 5, max: 10 }),
			userMail: faker.internet.email(),
			userNumber: faker.phone.number('+82 010 #### ####'),
			userImage: faker.image.urlLoremFlickr({ category: 'cats' }),
			content: faker.lorem.lines({ min: 3, max: 5 }),
		}))
}

// 상품 상세 정보 생성 함수
export const MockProductsDetail = count => {
	Array(count)
		.fill()
		.map(() => ({
			id: randomId.generate(),
			product: faker.commerce.productName(),
			productDetail:
				faker.commerce.department() +
				faker.commerce.productAdjective() +
				faker.commerce.productMaterial() +
				faker.commerce.product(),
			description: faker.commerce.productDescription(),
			price: faker.commerce.price({
				min: 10000,
				max: 100000,
				dec: 0,
				symbol: '$',
			}),
			imageURL: faker.image.urlLoremFlickr({ category: 'fashion' }),
			reviews: Array(Math.floor(Math.random() * 5) + 1).fill.map(() => ({
				id: randomId.generate(),
				user: faker.lorem.word(),
				contents: faker.lorem.paragraph(),
				isMine: false,
				writtenDate: faker.date.past() + ' ' + faker.date.weekday(),
			})),
		}))
}
