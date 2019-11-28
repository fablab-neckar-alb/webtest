const cssnano = require('cssnano')
const cssDeclarationSorter = require('css-declaration-sorter')
const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')
const cachebuster = require('postcss-cachebuster')

const config = {
  plugins: [
    cssDeclarationSorter({
      order: 'smacss'
    }),
    mqpacker({
      sort: true
    }),
    autoprefixer({
      grid: true
    }),
    cachebuster({
      imagesPath: '/static/gfx',
      cssPath: '/static/css',
      type: 'checksum'
    }),
    cssnano({
      preset: [
        'advanced',
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
}

module.exports = config
