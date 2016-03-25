echo 'Starting deploy...';

mkdir deploy-dir
webpack -p
cp index.html deploy-dir
mv dist deploy-dir
node gh-pages.js
rm -rf deploy-dir
