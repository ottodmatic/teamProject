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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (play1.vx != 0 || play1.vy != 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 2 2 4 2 . . . . . . 
            . . . . . . 2 4 2 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, play1, play1.vx, play1.vy)
    } else {
        if (facingLeft == true) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 2 4 2 . . . . . . 
                . . . . . . 2 4 2 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, play1, -100, 0)
        }
        if (facingRight == true) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 2 4 2 . . . . . . 
                . . . . . . 2 4 2 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, play1, 100, 0)
        }
        if (facingUp == true) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 2 4 2 . . . . . . 
                . . . . . . 2 4 2 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, play1, 0, -100)
        }
        if (facingDown == true) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 2 4 2 . . . . . . 
                . . . . . . 2 4 2 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, play1, 0, 100)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    if (count < 5) {
        tiles.setCurrentTilemap(tileList.removeAt(randint(0, tileList.length - 1)))
    }
    count += 1
})
function final () {
    play1.setPosition(98, 184)
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
    enemy_1(enmlist)
}
function enemy_1 (enemyList: any[]) {
    enemy()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    if (count < 5) {
        tiles.setCurrentTilemap(tileList.removeAt(randint(0, tileList.length - 1)))
    }
    count += 1
})
function enemy () {
    count2 = 0
    enm_1 = enmlist._pickRandom()
    for (let index = 0; index < randint(1, 2 * count); index++) {
        tiles.placeOnTile(enm_1, tiles.getTileLocation(randint(0, 11), randint(0, 11)))
        enm_1.follow(play1, randint(10, 50 + 5 * count))
        count2 += 1
    }
}
tileUtil.onMapLoaded(function (tilemap2) {
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
})
function purplePurple () {
    play1.setPosition(22, 88)
    tiles.setWallAt(tiles.getTileLocation(5, 11), false)
    tiles.setWallAt(tiles.getTileLocation(6, 11), false)
}
tileUtil.onMapLoaded(function (tilemap2) {
    enemy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.ashes, 500)
})
let enm_1: Sprite = null
let facingDown = false
let facingUp = false
let facingRight = false
let facingLeft = false
let projectile: Sprite = null
let tileList: tiles.TileMapData[] = []
let enmlist: Sprite[] = []
let TileMapLevel = 0
let play1: Sprite = null
let count = 0
let snake: Sprite = null
let count2 = 0
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
enmlist = [
sprites.create(assets.image`enemy1`, SpriteKind.Enemy),
sprites.create(assets.image`purplegreen2`, SpriteKind.Enemy),
sprites.create(assets.image`purpgreen1`, SpriteKind.Enemy),
sprites.create(assets.image`purplepurp`, SpriteKind.Enemy),
sprites.create(assets.image`purpgrey`, SpriteKind.Enemy)
]
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
game.onUpdateInterval(500, function () {
    if (controller.left.isPressed() || (controller.right.isPressed() || (controller.up.isPressed() || controller.down.isPressed()))) {
        if (play1.vx < 0) {
            animation.stopAnimation(animation.AnimationTypes.ImageAnimation, play1)
            animation.runImageAnimation(
            play1,
            [img`
                . . . f f f f f . . . . 
                . . f e e e e e f f . . 
                . f e e e e e e e f f . 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                f f e 4 4 f f 4 e 4 f f 
                . f f d d d d 4 d 4 f . 
                . . f b b d d 4 f f f . 
                . . f e 4 4 4 e e f . . 
                . . f 1 1 1 e d d 4 . . 
                . . f 1 1 1 e d d e . . 
                . . f 6 6 6 f e e f . . 
                . . . f f f f f f . . . 
                . . . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . . f e e e e e f f f . 
                . f e e e e e e e f f f 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                . f e 4 4 f f 4 e 4 f f 
                . . f d d d d 4 d 4 f . 
                . . f b b d e e f f f . 
                . . f e 4 e d d 4 f . . 
                . . f 1 1 e d d e f . . 
                . f f 6 6 f e e f f f . 
                . f f f f f f f f f f . 
                . . f f f . . . f f . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . . f e e e e e f f f . 
                . f e e e e e e e f f f 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                . f e 4 4 f f 4 e 4 f f 
                . . f d d d d 4 d 4 f f 
                . . f b b d d 4 f f f . 
                . . f e 4 4 4 e d d 4 . 
                . . f 1 1 1 1 e d d e . 
                . f f 6 6 6 6 f e e f . 
                . f f f f f f f f f f . 
                . . f f f . . . f f . . 
                `],
            200,
            false
            )
            facingLeft = true
            facingRight = false
            facingUp = false
            facingDown = false
        }
        if (play1.vx > 0) {
            animation.stopAnimation(animation.AnimationTypes.ImageAnimation, play1)
            animation.runImageAnimation(
            play1,
            [img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e e f . . 
                f f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f . 
                f f 4 d 4 d d d d f . . 
                . f f f 4 d d b b f . . 
                . 4 d d e 4 4 4 e f . . 
                . e d d e 1 1 1 1 f . . 
                . f e e f 6 6 6 6 f f . 
                . f f f f f f f f f f . 
                . . f f . . . f f f . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e e f . . 
                f f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f . 
                . f 4 d 4 d d d d f . . 
                . f f f e e d b b f . . 
                . . f 4 d d e 4 e f . . 
                . . f e d d e 1 1 f . . 
                . f f f e e f 6 6 f f . 
                . f f f f f f f f f f . 
                . . f f . . . f f f . . 
                `,img`
                . . . . f f f f f . . . 
                . . f f e e e e e f . . 
                . f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f f 
                . f 4 d 4 d d d d f f . 
                . f f f 4 d d b b f . . 
                . . f e e 4 4 4 e f . . 
                . . 4 d d e 1 1 1 f . . 
                . . e d d e 1 1 1 f . . 
                . . f e e f 6 6 6 f . . 
                . . . f f f f f f . . . 
                . . . . f f f . . . . . 
                `],
            200,
            false
            )
            facingRight = true
            facingUp = false
            facingLeft = false
            facingDown = false
        }
        if (play1.vy < 0) {
            animation.stopAnimation(animation.AnimationTypes.ImageAnimation, play1)
            animation.runImageAnimation(
            play1,
            [img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f f e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f f e e e e e e f e f 
                f f f f e e e e f f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                e 4 f b b b b b b f 4 e 
                4 d f d d d d d d c d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f e e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f e e e e e e e f e f 
                f f f e e e e f f f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                . 4 f b b b b b f e 4 e 
                . 4 f d d d d d e d d 4 
                . e f f f f f f e e 4 . 
                . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f f e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f f f e e e e e f e f 
                f f f f f e e e e f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                e 4 e f b b b b b f 4 . 
                4 d d e d d d d d f 4 . 
                . 4 e e f f f f f f e . 
                . . . . . . . f f f . . 
                `],
            200,
            false
            )
            facingUp = true
            facingLeft = false
            facingRight = false
            facingDown = false
        }
        if (play1.vy > 0) {
            animation.stopAnimation(animation.AnimationTypes.ImageAnimation, play1)
            animation.runImageAnimation(
            play1,
            [img`
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
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e f f f . 
                f f f e e e e e e f f f 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d 4 e f e 
                f f f e 4 4 4 4 d d 4 e 
                e 4 f b 1 1 1 e d d e . 
                . . f 6 6 6 6 f e e . . 
                . . f f f f f f f . . . 
                . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e f f f . 
                f f f e e e e e e f f f 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                e f e 4 d b b d d e f . 
                e 4 d d 4 4 4 4 e f f f 
                . e d d e 1 1 1 b f 4 e 
                . . e e f 6 6 6 6 f . . 
                . . . f f f f f f f . . 
                . . . . . . . f f f . . 
                `],
            200,
            false
            )
            facingDown = true
            facingLeft = false
            facingRight = false
            facingUp = false
        }
    } else {
        if (facingLeft == true) {
            play1.setImage(img`
                . . . f f f f f . . . . 
                . . f e e e e e f f . . 
                . f e e e e e e e f f . 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                f f e 4 4 f f 4 e 4 f f 
                . f f d d d d 4 d 4 f . 
                . . f b b d d 4 f f f . 
                . . f e 4 4 4 e e f . . 
                . . f 1 1 1 e d d 4 . . 
                . . f 1 1 1 e d d e . . 
                . . f 6 6 6 f e e f . . 
                . . . f f f f f f . . . 
                . . . . . f f f . . . . 
                `)
        }
        if (facingRight == true) {
            play1.setImage(img`
                . . . . f f f f f . . . 
                . . f f e e e e e f . . 
                . f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f f 
                . f 4 d 4 d d d d f f . 
                . f f f 4 d d b b f . . 
                . . f e e 4 4 4 e f . . 
                . . 4 d d e 1 1 1 f . . 
                . . e d d e 1 1 1 f . . 
                . . f e e f 6 6 6 f . . 
                . . . f f f f f f . . . 
                . . . . f f f . . . . . 
                `)
        }
        if (facingUp == true) {
            play1.setImage(img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f f e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f f e e e e e e f e f 
                f f f f e e e e f f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                e 4 f b b b b b b f 4 e 
                4 d f d d d d d d c d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `)
        }
        if (facingDown == true) {
            play1.setImage(img`
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
                `)
        }
    }
})
