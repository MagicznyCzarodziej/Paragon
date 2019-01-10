import Product from './Product';

const linkSchema = `
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`

export default [linkSchema, Product];
