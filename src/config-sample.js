(function() {
  var config = {
    token: process.env.GITHUB_TOKEN,
    templateData: {
      link:       '$http://link-to-your-cla.com',
      maintainer: '$githubusername',
    },
    secrets: {
      '$repoowner': {
        '$reponame': process.env.HUB_SECRET
      }
    },
    port: 1337
  };
  exports.options = config;
}).call(this);
