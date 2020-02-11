const { ApolloError } = require("apollo-server-express");
const { AuthenticationError } = require("apollo-server-express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function setCookie({ tokenName, token, res }) {
  res.cookie(tokenName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600 * 1000 * 2
  });
}

function generateToken(user, secret) {
  const { id, email, fullname, bio } = user;
  const token = jwt.sign({ id, email, fullname, bio }, secret, {
    expiresIn: "2h"
  });
  return token;
}

const mutationResolvers = app => ({
  async signup(
    parent,
    { user: { fullname, email, password } },
    { pgResource, req }
  ) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await pgResource.createUser({
        fullname,
        email,
        password: hashedPassword
      });

      const token = generateToken(user, app.get("JWT_SECRET"));

      setCookie({
        tokenName: app.get("JWT_COOKIE_NAME"),
        token,
        res: req.res
      });

      return {
        token,
        user
      };
    } catch (e) {
      throw new AuthenticationError(e);
    }
  },

  async login(parent, { user: { email, password } }, { pgResource, req }) {
    try {
      const user = await pgResource.getUserAndPasswordForVerification(email);
      if (!user) throw "User was not found.";

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw "Invalid Password";

      const token = generateToken(user, app.get("JWT_SECRET"));

      setCookie({
        tokenName: app.get("JWT_COOKIE_NAME"),
        token,
        res: req.res
      });

      return {
        token,
        user
      };
    } catch (e) {
      throw new AuthenticationError(e);
    }
  },

  logout(parent, args, context) {
    try {
      context.req.res.clearCookie(app.get("JWT_COOKIE_NAME"));
      console.log("cleared");
      return true;
    } catch (err) {
      console.log("there was an error");
      throw new ApolloError(err);
      return false;
    }
  },

  async addItem(parent, { item }, { pgResource, token }, info) {
    try {
      const user = await jwt.decode(token, app.get("JWT_SECRET"));
      const newItem = await pgResource.saveNewItem({
        item,
        user: user.id
      });
      return newItem;
    } catch (err) {
      throw new ApolloError(err);
    }
  }
});

module.exports = mutationResolvers;
