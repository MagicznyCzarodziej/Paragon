export default `
  type Product {
    id: Int!
    name: String!
    quantity: Int!
    price: Float!
    date: String!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    allProducts: [Product!]!
    getProduct(id: Int!): Product
    getProductsByMonth(month: Int!): [Product]
  }

  extend type Mutation {
    addProduct(
      name: String!
      quantity: Int!
      price: Float!
      date: String!
    ): Product
  }
`;
