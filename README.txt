
------------------------------------------------------------
Environment setup:

Install Chrome Canary
  React Developer Tools Chrome Extension
  JSON Viewer Chrome Extension
Install Latest XCode
update git from git-scm.com
Configure GitHub SSH Key
Install MongoDB
Install NVM
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
Install node download from nodejs.org (installs npm)

npm install -g jspm webpack nodemon
npm install --save babel-preset-react babel-preset-es2015 express react react-dom webpack
npm install --save babel babel-loader babel-core
npm install --save  react-addons-test-utils

npm install css-loader style-loader --save-dev

sudo npm install -g jasmine

add jasmine to Gemfile
bundle install

jasmine init (already done and checked in)
jasmine examples (already done and checked in)

------------------------------------------------------------

To run jasmine tests:

  webpack
  rake jasmine
  localhost:8888

To run the code:

  webpack
  nodemon
  localhost:3000




