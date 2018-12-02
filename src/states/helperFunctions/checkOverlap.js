export default (spriteA, spriteB, clockOverlap) => {
  var boundsA = spriteA.getBounds()
  var boundsB = spriteB.getBounds()

  if (Phaser.Rectangle.intersects(boundsA, boundsB)) {
    if (!clockOverlap) {
      console.log('YES!')
      this.clockOverlap = true
      setTimeout(this.resetClockOverlap, 3000)
    }
  }
}
