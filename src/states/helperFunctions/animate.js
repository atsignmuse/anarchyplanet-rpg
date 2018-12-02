export default sprite => {
  sprite.animations.add('walkSouth', [0, 1, 2, 3, 4, 5, 6, 7], null, true)
  sprite.animations.add('walkNorth', [8, 9, 10, 11, 12, 13, 14, 15], null, true)
  sprite.animations.add(
    'walkWest',
    [16, 17, 18, 19, 20, 21, 21, 23],
    null,
    true
  )
  sprite.animations.add(
    'walkEast',
    [24, 25, 26, 27, 28, 29, 30, 31],
    null,
    true
  )
  sprite.body.collideWorldBounds = true
}
