'use strict'

import domready from 'domready'

const log = window.console.debug.bind(window.console, 'DEBUG:')

domready(() => {
  log('test')
  document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, 'js')
})
