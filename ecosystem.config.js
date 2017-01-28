module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "carcareapp-api",
      script    : "server/index.js",
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "deploy",
      host : "138.197.108.171",
      ref  : "origin/master",
      repo : "https://github.com/noahjohn9259/carcare-api.git",
      path : "~/carcareapp-api",
      "post-deploy" : "nvm install && npm install && /home/deploy/.nvm/versions/node/v6.9.4/bin/pm2 startOrRestart ecosystem.config.json --env production"
    }
  }
}
