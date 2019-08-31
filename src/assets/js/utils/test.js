const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', { url: 'https://github.com/jsdom/jsdom/wiki/jsdom-%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3' });

if (typeof window === 'undefined') {
  global.window = dom.window;
  global.document = window.document;
  global.navigator = window.navigator;
}

console.log('dom', dom);
console.log('document', document);
