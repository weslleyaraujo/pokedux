echo 'Starting deploy...';

mkdir deploy-dir
NODE_ENV=production webpack -p
cp index.html deploy-dir
cp favicon.png dist
mv dist deploy-dir
node gh-pages.js
rm -rf deploy-dir
