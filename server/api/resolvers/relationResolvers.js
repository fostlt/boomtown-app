const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
    /**
     *  @TODO: Advanced resolvers
     *
     *  The User GraphQL type has two fields that are not present in the
     *  user table in Postgres: items and borrowed.
     *
     *  According to our GraphQL schema, these fields should return a list of
     *  Items (GraphQL type) the user has lent (items) and borrowed (borrowed).
     *
     */
    // @TODO: Uncomment these lines after you define the User type with these fields
    // items() {
    //   // @TODO: Replace this mock return statement with the correct items from Postgres
    //   return []
    //   // -------------------------------
    // },
    // borrowed() {
    //   // @TODO: Replace this mock return statement with the correct items from Postgres
    //   return []
    //   // -------------------------------
    // }
    // -------------------------------
  },

  Item: {
    /**
     *  @TODO: Advanced resolvers
     *
     *  The Item GraphQL type has two fields that are not present in the
     *  Items table in Postgres: itemowner, tags and borrower.
     *
     * According to our GraphQL schema, the itemowner and borrower should return
     * a User (GraphQL type) and tags should return a list of Tags (GraphQL type)
     *
     */
    // @TODO: Uncomment these lines after you define the Item type with these fields
    async itemowner(parent, args, {pgResource}, info) {
      try {
        const itemowner = await pgResource.getUserById(parent.ownerid);
        return itemowner;
      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async tags(parent, args, {pgResource}, info) {
      try{
        const tags = await pgResource.getTagForItem(parent.id);
        return tags;
      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async borrower(parent, args, {pgResource}, info) {
      try {
      const borrower = await pgResource.getUserById(parent.borrowerid);
      return borrower;
    } catch (e){
      throw new ApolloError(e);
      }
    }
  }
};

module.exports = relationResolvers;
