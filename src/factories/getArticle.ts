import faker from 'faker'
import { Article } from 'src/ts/article'

function getArticle(): Article {
   return {
      image: faker.image.fashion(),
      title: faker.random.words(),
      description: faker.lorem.paragraph(),
      author: faker.name.firstName(),
      authorAvatar: faker.image.abstract(),
      createdAt: new Date().toJSON(),
      commentsNumber: faker.random.number(100),
      liked: faker.random.arrayElement([true, false]),
   }
}

export default getArticle
