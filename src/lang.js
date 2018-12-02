import idiom from 'idiom.js'

const lang = idiom({
  default: {
    welcome: 'All your base are belong to us!'
  },
  'pt-BR': {
    welcome: 'Bem vindo ao Phaser + ES6 + Webpack!'
  }
})

export default lang(window.navigator.language)
