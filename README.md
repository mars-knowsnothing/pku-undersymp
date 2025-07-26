# Deploy
```bash
mkdir /var/www/pku-undersymp/
sudo rm -rf /var/www/pku-undersymp/* && yarn build && sudo cp -r out* /var/www/pku-undersymp/ && sudo chown -R www-data:www-data /var/www/pku-undersymp
```

## Nginx
```bash
cd /etc/nginx
sudo cp alma-workshop.kiaa-pku.cn undersymp25.kiaa-pku.cn
sudo ln -s /etc/nginx/sites-available/undersymp25.kiaa-pku.cn /etc/nginx/sites-enabled/
