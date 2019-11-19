/**
 * @file Entrypoint for JavaScript
 * @author Joris Karl Dzaack <hola@arebours.de>
 * @flow
 */
'use strict'

import domready from 'domready'
import replaceClass from './aux/replace-class.js'

// const log = window.console.debug.bind(window.console, 'DEBUG:')

domready(() => {
  replaceClass(window.document.documentElement, 'no-js', 'js')
})
