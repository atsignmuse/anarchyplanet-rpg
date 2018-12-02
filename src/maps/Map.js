import Phaser from 'phaser'

class Map extends Phaser.Tilemap {
  constructor ({ game, key, tileWidth, tileHeight, width, height }) {
    super(game, key, tileWidth, tileHeight, width, height)
  }

  update () {
    console.log('hi!')
  }
}
export default Map
