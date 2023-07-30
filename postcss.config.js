import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import postcssImport from 'postcss-import'
import tailwindcssNesting from 'tailwindcss/nesting'

import tailwindConfig from './tailwind.config.cjs'

export default {
  plugins: [
    postcssImport,
    tailwindcssNesting,
    tailwind(tailwindConfig), 
    autoprefixer
  ]
  //   plugins: {
  //   'postcss-import': {},
  //   'tailwindcss/nesting': {},
  //   tailwindcss: {},
  //   autoprefixer: {},
  // },
}
