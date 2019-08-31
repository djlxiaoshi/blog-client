const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', { url: 'http://localhost:3700' });

if (typeof window === 'undefined') {
  global.window = dom.window;
  global.document = window.document;
  global.navigator = window.navigator;
}
