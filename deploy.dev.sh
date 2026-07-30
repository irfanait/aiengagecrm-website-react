#!/bin/bash
echo "\n Pulling code....."
git pull
echo "\n Building website...."
npm run build
echo "\n Restarting service.."
pm2 stop aiengagecrm-site-dev
pm2 delete aiengagecrm-site-dev
pm2 start npm --name aiengagecrm-site-dev -- start -- -p 7001
echo "\n Code deployed successfully!"