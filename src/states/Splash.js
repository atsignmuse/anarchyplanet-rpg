import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(
      this.game.world.centerX,
      this.game.world.centerY,
      'loaderBg'
    )
    this.loaderBar = this.add.sprite(
      this.game.world.centerX,
      this.game.world.centerY,
      'loaderBar'
    )
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    this.game.load.tilemap(
      'inside',
      './assets/inside.json',
      null,
      Phaser.Tilemap.TILED_JSON
    )

    this.game.load.spritesheet('tiles', './assets/interior.png', 32, 32)
    this.game.load.spritesheet('hero', './assets/player_walk.png', 40, 40)
  }

  create () {
    this.state.start('Game')
  }
}
