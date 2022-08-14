import { defineConfig, presetUno, presetIcons } from 'unocss'

const colors = [
  'white',
  'black',
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink',
]

const safelist = [
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-700`),
]

export default defineConfig({
  safelist,
  exclude: ['node_modules', '.git', 'dist', 'mock', './stats.html'],
  presets: [presetUno(), presetIcons()],
})
