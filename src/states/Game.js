/* globals __DEV__ */
import Phaser from 'phaser'
import { animate, navigate } from './helperFunctions'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.clockOverlap = false
    this.resetClockOverlap = () => {
      if (this.clockOverlap) this.clockOverlap = false
    }
    this.checkOverlap = (spriteA, spriteB) => {
      var boundsA = spriteA.getBounds()
      var boundsB = spriteB.getBounds()

      if (Phaser.Rectangle.intersects(boundsA, boundsB)) {
        if (!this.clockOverlap) {
          console.log('YES!')
          this.clockOverlap = true
          setTimeout(this.resetClockOverlap, 3000)
        }
      }
    }

    this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER)

    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.game.world.setBounds(0, 0, 20 * 32, 10 * 32)
    this.cursors = this.game.input.keyboard.createCursorKeys()
    console.log(this.cursors)

    this.map = this.game.add.tilemap('inside')
    this.map.addTilesetImage('interior', 'tiles')
    this.floor = this.map.createLayer('floor')
    this.barriers = this.map.createLayer('barriers')

    this.chests = this.game.add.group()
    this.chests.enableBody = true

    this.map.createFromObjects(
      'chests',
      148,
      'tiles',
      147,
      true,
      false,
      this.chests
    )

    this.sprite = this.game.add.sprite(200, 200, 'tiles')
    this.sprite.inputEnabled = true
    this.sprite.input.enableDrag()
    let style = {
      font: '12px Arial',
      fill: '#ff0044',
      wordWrap: true,
      wordWrapWidth: this.sprite.width,
      align: 'center',
      backgroundColor: '#ffff00'
    }

    this.text = this.game.add.text(0, 0, '- text on a sprite -\ndrag me', style)
    console.log(this.map)
    // clock
    this.clock = this.game.add.sprite(192, 0, 'tiles', 163)
    this.clock.animations.add('ticktock', [162, 161, 163, 161], 4, true)
    this.clock.animations.play('ticktock')

    // this.map.createFromObjects('clocks', 162, 'tiles', 161, true, false)
    this.map.setCollisionBetween(0, 999, true, 'barriers')

    // Create player's character
    // Make sure you set up the physics first before animating the character
    this.hero = this.game.add.sprite(200, 36, 'hero')
    // this.game.add.sprite(60, 200, 'tiles', 48)

    this.game.physics.enable(this.hero)
    this.camera.follow(this.hero) // Set up the camera to follow the character
    animate(this.hero)
  }

  update () {
    this.game.physics.arcade.collide(this.hero, this.barriers)
    this.checkOverlap(this.hero, this.clock)

    navigate(this.cursors, this.hero)

    this.text.x = Math.floor(this.sprite.x + this.sprite.width / 2)
    this.text.y = Math.floor(this.sprite.y + this.sprite.height / 2)
  }
  render () {}
}
