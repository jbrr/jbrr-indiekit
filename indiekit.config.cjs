module.exports = {
  application: {
    url: "https://kit.jbrr.dev",
    mongodbUrl: process.env.MONGO_URL
  },
  plugins: [
    "@indiekit/endpoint-auth",
    "@indiekit/endpoint-files",
    "@indiekit/endpoint-image",
    "@indiekit/endpoint-json-feed",
    "@indiekit/endpoint-media",
    "@indiekit/endpoint-micropub",
    "@indiekit/preset-hugo",
    "@indiekit/store-github",
    "@indiekit/syndicator-mastodon"
  ],
  publication: {
    me: "https://jbrr.dev",
    timeZone: "America/Denver",
    enrichPostDate: true
  },
  "@indiekit/endpoint-image": {
    me: "https://jbrr.dev" // de-DE
  },
  "@indiekit/preset-hugo": {
    frontMatterFormat: "yaml"
  },
  "@indiekit/store-github": {
    user: "jbrr",
    repo: "jbrr.dev",
    branch: "main",
    token: process.env.GITHUB_TOKEN
  },
  "@indiekit/syndicator-mastodon": {
    user: "jbrr",
    url: "https://mastodon.sdf.org"
  }
}