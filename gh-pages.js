var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'deploy-dir'), function (err) {
  if (!err) {
    console.log('Deploy succeed.');
    return;
  }

  console.log('Error during deploy', err);
});
