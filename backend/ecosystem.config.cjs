module.exports = {
  apps: [
    {
      name: "nest-backend",
      script: "dist/main.js",
      instances: "max",        // Scales across all available CPU cores (Cluster Mode)
      exec_mode: "cluster",    // Enables zero-downtime reloads
      env: {
        NODE_ENV: "production",
      }
    }
  ]
};