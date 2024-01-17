namespace SpriteKind {
    export const Door = SpriteKind.create()
}
function Grey () {
	
}
function purpleGreen_1 () {
	
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`play2`, SpriteKind.Player))
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
    play2.setPosition(play1.x, play1.y)
    scene.cameraFollowSprite(play2)
    health_2 = statusbars.create(20, 4, StatusBarKind.Health)
    health_2.attachToSprite(play2)
    controller.player2.moveSprite(play2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    tiles.setCurrentTilemap(tileList._pickRandom())
})
function purpleGreen_2 () {
	
}
function lvl_1 () {
    scene.setBackgroundColor(6)
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
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`play1`, SpriteKind.Player))
    play1.setPosition(80, 60)
    scene.cameraFollowSprite(play1)
    health_1 = statusbars.create(20, 4, StatusBarKind.Health)
    health_1.attachToSprite(play1)
    controller.moveSprite(play1, 100, 100)
    lv1en()
}
function purplePurple () {
	
}
function lv1en () {
    lvl1en = sprites.create(img`
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
    tiles.placeOnTile(lvl1en, tiles.getTileLocation(randint(0, 11), randint(0, 11)))
    lvl1en.follow(play1, randint(10, 100))
    lvl1en.follow(play2, randint(10, 100))
}
let lvl1en: Sprite = null
let health_1: StatusBarSprite = null
let health_2: StatusBarSprite = null
let play1: Sprite = null
let play2: Sprite = null
let tileList: tiles.TileMapData[] = []
tileList = [
tilemap`level0`,
tilemap`level2`,
tilemap`level8`,
tilemap`level2`
]
tiles.setCurrentTilemap(tilemap`level0`)
lvl_1()
