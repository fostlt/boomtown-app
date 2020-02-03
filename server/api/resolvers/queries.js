const { ApolloError } = require("apollo-server");

const queryResolvers = app => ({
  viewer(parent, args, { user }, info) {
    /**
     * @TODO: Authentication - Server
     *
     *  If you're here, you have successfully completed the sign-up and login resolvers
     *  and have added the JWT from the HTTP cookie to your resolver's context.
     *
     *  The viewer is what we're calling the current user signed into your application.
     *  When the user signed in with their username and password, an JWT was created with
     *  the user's information cryptographically encoded inside.
     *
     *  To provide information about the user's session to the app, return the user.
     *  If there is no user, the user has signed out, in which case user will be null.
     */
    return null;
  },
  async user(parent, { id }, { pgResource }, info) {
    try {
      const user = await pgResource.getUserById(id);
      return user;
    } catch (e) {
      throw new ApolloError(e);
    }
  },
  async items(parent, {filter}, {pgResource}, info) {
    try {
      const item = await pgResource.getItems(filter);
      return item;
    } catch (e) {
      throw new ApolloError(e);
    } /* APOLLO TWO L'S!!!!!!!! */
  },
  async tags(parent, {id}, {pgResource}, info) {
    try{
      const tags = await pgResource.getTags(id);
      return tags;
    } catch (e) {
      return new ApolloError(e);
    }
  },
});
module.exports = queryResolvers;