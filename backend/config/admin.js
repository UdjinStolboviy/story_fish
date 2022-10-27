module.exports = ({ env }) => ({
  apiToken: {
    salt: env("API_TOKEN_SALT", "my-salt"),
  },
  auth: {
    secret: env("ADMIN_JWT_SECRET", "Pcqj65jg9uqQ7lznz3Gwrg=="),
  },
});
