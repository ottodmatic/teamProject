namespace SpriteKind {
    export const Door = SpriteKind.create()
}
function Grey () {
    play1.setPosition(22, 88)
    tiles.setWallAt(tiles.getTileLocation(11, 5), false)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    if (count < 5) {
        tiles.setCurrentTilemap(tileList.removeAt(randint(0, tileList.length - 1)))
    }
    count += 1
})
function purpleGreen_1 () {
    play1.setPosition(160, 120)
    tiles.setWallAt(tiles.getTileLocation(0, 5), false)
    tiles.setWallAt(tiles.getTileLocation(0, 4), false)
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    play2 = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), play2)
    play2.setPosition(play1.x, play1.y)
    scene.cameraFollowSprite(play2)
    health_2 = statusbars.create(20, 4, StatusBarKind.Health)
    health_2.attachToSprite(play2)
    controller.player2.moveSprite(play2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    if (count < 5) {
        tiles.setCurrentTilemap(tileList.removeAt(randint(0, tileList.length - 1)))
    }
    count += 1
})
function final () {
	
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    if (count < 5) {
        tiles.setCurrentTilemap(tileList.removeAt(randint(0, tileList.length - 1)))
    }
    count += 1
})
function purpleGreen_2 () {
    play1.setPosition(22, 104)
    tiles.setWallAt(tiles.getTileLocation(11, 6), false)
    tiles.setWallAt(tiles.getTileLocation(11, 5), false)
}
function lvl_1 () {
    scene.setBackgroundColor(6)
    tiles.setWallAt(tiles.getTileLocation(11, 6), false)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    if (count < 5) {
        tiles.setCurrentTilemap(tileList.removeAt(randint(0, tileList.length - 1)))
    }
    count += 1
})
function enemy () {
    snake = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
    for (let index = 0; index < randint(1, 2 * count); index++) {
        tiles.placeOnTile(snake, tiles.getTileLocation(randint(0, 11), randint(0, 11)))
        snake.follow(play1, randint(10, 50 + 5 * count))
    }
}
tileUtil.onMapLoaded(function (tilemap2) {
    enemy()
})
function purplePurple () {
    play1.setPosition(22, 88)
    tiles.setWallAt(tiles.getTileLocation(5, 11), false)
    tiles.setWallAt(tiles.getTileLocation(6, 11), false)
}
tileUtil.onMapLoaded(function (tilemap2) {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(11, 6), sprites.dungeon.doorOpenEast)) {
        lvl_1()
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(0, 5), sprites.dungeon.stairEast)) {
        purpleGreen_1()
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(5, 11), sprites.dungeon.stairNorth)) {
        purplePurple()
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(11, 5), sprites.dungeon.stairEast)) {
        Grey()
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(11, 6), sprites.dungeon.stairWest)) {
        purpleGreen_2()
    }
})
let snake: Sprite = null
let health_2: StatusBarSprite = null
let play2: Sprite = null
let count = 0
let tileList: tiles.TileMapData[] = []
let play1: Sprite = null
let TileMapLevel = 0
play1 = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), play1)
play1.setPosition(80, 60)
scene.cameraFollowSprite(play1)
let health_1 = statusbars.create(20, 4, StatusBarKind.Health)
health_1.attachToSprite(play1)
controller.moveSprite(play1, 100, 100)
tileList = [
tilemap`level7`,
tilemap`level2`,
tilemap`level8`,
tilemap`level5`
]
tiles.setCurrentTilemap(tilemap`level0`)
lvl_1()
forever(function () {
    if (count == 5) {
        tiles.setCurrentTilemap(tilemap`fin lvl`)
        scene.setBackgroundColor(4)
        count += 1
        final()
    }
})
