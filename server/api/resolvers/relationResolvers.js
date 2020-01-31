const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
    async items(parent, args, { pgResource }, info) {
      const items = await pgResource.getItemsForUser(parent.id);
      return items;
    },
    async borrowed(parent, args, { pgResource } , info) {
     const borrowed = await pgResource.getBorrowedItemsForUser(parent.id);
      return borrowed;
    }
  },

  Item: {
    async itemowner(parent, args, { pgResource }, info) {
      try {
        const itemowner = await pgResource.getUserById(parent.ownerid);
        return itemowner;
      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async tags(parent, args, { pgResource }, info) {
      try {
        const tags = await pgResource.getTagsForItem(parent.id);
        return tags;
      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async borrower(parent, args, { pgResource }, info) {
      try {
        const borrower = await pgResource.getUserById(parent.borrowerid);
        return borrower;
      } catch (e) {
        throw new ApolloError(e);
      }
    }
  }
};

module.exports = relationResolvers;
