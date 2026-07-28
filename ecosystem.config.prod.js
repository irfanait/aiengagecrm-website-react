module.exports = {
  apps: [
    {
      name: "aiengagecrm-site",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 7001",
      cwd: "/srv/aiengagecrm.com/httpdocs",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
