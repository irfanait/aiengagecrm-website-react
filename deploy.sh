#!/bin/bash
echo "\n Pulling code....."
git pull
echo "\n Building website...."
npm run build
echo "\n Restarting service.."
pm2 stop ecosystem.config.js
pm2 start ecosystem.config.js
echo "\n Code deployed successfully!"