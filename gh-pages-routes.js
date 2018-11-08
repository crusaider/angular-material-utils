'use strict';

const copyfiles = require('copyfiles');
const fs = require('fs');

const routes = ['home'];
const baseDir = './dist/demos-app';

fs.readFile('./projects/demos-app/src/assets/toc.json', (_, data) => {
  const toc = JSON.parse(data);
  toc.forEach(item => routes.push(item.slug));
  routes.forEach(route =>
    copyfiles([baseDir + '/index.html', baseDir + '/' + route], true, () =>
      console.log(route)
    )
  );
});
