export default (cursors, sprite) => {
  if (cursors.left.isDown) {
    sprite.body.velocity.x = -100
    sprite.animations.play('walkWest', 8, true)
  } else if (cursors.right.isDown) {
    sprite.body.velocity.x = 100
    sprite.animations.play('walkEast', 8, true)
  } else if (cursors.up.isDown) {
    sprite.body.velocity.y = -100
    sprite.animations.play('walkNorth', 8, true)
  } else if (cursors.down.isDown) {
    sprite.body.velocity.y = 100
    sprite.animations.play('walkSouth', 8, true)
  } else {
    sprite.body.velocity.x = 0
    sprite.body.velocity.y = 0
    sprite.animations.stop()
  }
}
