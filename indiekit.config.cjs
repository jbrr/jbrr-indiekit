module.exports = {
  application: {
    url: "https//kit.jbrr.dev",
    mongodbUrl: process.env.MONGO_URL
  },
  plugins: [
    "@indiekit/endpoint-auth",
    "@indiekit/endpoint-micropub",
    "@indiekit/store-github"
  ],
  publication: {
    me: "https://jbrr.dev"
  },
  "@indiekit/endpoint-auth": {
    mountPath: "/authorize"
  },
  "@indiekit/endpoint-micropub": {
    mountPath: "/publisher"
  },
  "@indiekit/store-github": {
    user: "jbrr",
    repo: "jbrr.dev",
    branch: "main"
  }
}