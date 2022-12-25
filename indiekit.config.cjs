module.exports = {
  application: {
    url: "https://kit.jbrr.dev",
    mongodbUrl: process.env.MONGO_URL
  },
  plugins: [
    "@indiekit/endpoint-auth",
    "@indiekit/endpoint-json-feed",
    "@indiekit/endpoint-micropub",
    "@indiekit/endpoint-posts",
    "@indiekit/preset-hugo",
    "@indiekit/store-github"
  ],
  publication: {
    me: "https://jbrr.dev"
  },
  "@indiekit/preset-hugo": {
    frontMatterFormat: "yaml"
  },
  "@indiekit/store-github": {
    user: "jbrr",
    repo: "jbrr.dev",
    branch: "main"
  }
}