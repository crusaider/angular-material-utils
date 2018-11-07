'use strict';

const copyfiles = require('copyfiles');

const routes = ['home', 'overlay-spinner', 'sorted-table'];

const baseDir = './dist/demos-app';

routes.forEach(route =>
  copyfiles([baseDir + '/index.html', baseDir + '/' + route], true, () =>
    console.log(route)
  )
);
