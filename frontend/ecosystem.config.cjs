module.exports = {
  apps: [
    {
      name: "react-app",
      script: "npx",
      args: "serve -s dist -l 3000",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};