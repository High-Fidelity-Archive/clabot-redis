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
    port: 1337,
    redis: {
     contractorSet: 'my_redis_set'
    }
  };
  exports.options = config;
}).call(this);
