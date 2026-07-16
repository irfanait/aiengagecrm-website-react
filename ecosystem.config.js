module.exports = {
  apps: [
    {
      name: "crm-site-dev",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 7001",
      cwd: "/srv/aitrillion.com/subdomains/crm-site-dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
