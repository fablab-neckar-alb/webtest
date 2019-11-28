import commonjs from 'rollup-plugin-commonjs'
import compiler from '@ampproject/rollup-plugin-closure-compiler'
import { eslint } from 'rollup-plugin-eslint'
import flow from 'rollup-plugin-flow'
import resolve from 'rollup-plugin-node-resolve'
import sucrase from 'rollup-plugin-sucrase';

export default {
  plugins: [
    resolve(),
    eslint({
      fix: true
    }),
    flow({
      all: true
    }),
    commonjs(),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: []
    }),
    compiler({
      formatting: 'SINGLE_QUOTES',
      'compilation_level': 'SIMPLE',
      'strict_mode_input': true
    })
  ]
}
