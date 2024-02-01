namespace SpriteKind {
    export const Door = SpriteKind.create()
    export const Acid = SpriteKind.create()
    export const POWER = SpriteKind.create()
}
/**
 * Use WASD or Arrow Keys to move
 * 
 * Use Z or Space Bar to shoot forward
 * 
 * use X to shoot backwards
 */
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
	
})
function Grey () {
    play1.setPosition(22, 88)
    tiles.setWallAt(tiles.getTileLocation(11, 5), true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Acid, function (sprite, otherSprite) {
    if (shield == false) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, sprite).value += -20
        sprites.destroy(otherSprite)
        pause(200)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
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
    100,
    true
    )
    facingUp = true
    facingLeft = false
    facingRight = false
    facingDown = false
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    if (count < 5) {
        tiles.setCurrentTilemap(tileList.removeAt(randint(0, tileList.length - 1)))
    }
    count += 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
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
            `, play1, 100, 0)
        if (shotty == true) {
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
                `, play1, 50, -50)
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
                `, play1, 50, 50)
        }
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
            `, play1, -100, 0)
        if (shotty == true) {
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
                `, play1, -50, 50)
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
                `, play1, -50, -50)
        }
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
            `, play1, 0, 100)
        if (shotty == true) {
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
                `, play1, 50, 50)
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
                `, play1, -50, 50)
        }
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
            `, play1, 0, -100)
        if (shotty == true) {
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
                `, play1, -50, -50)
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
                `, play1, 50, -50)
        }
    }
})
function purpleGreen_1 () {
    play1.setPosition(160, 120)
    tiles.setWallAt(tiles.getTileLocation(0, 5), true)
    tiles.setWallAt(tiles.getTileLocation(0, 4), true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
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
        if (shotty == true) {
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
                `, play1, -50, 50)
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
                `, play1, -50, -50)
        }
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
        if (shotty == true) {
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
                `, play1, 50, -50)
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
                `, play1, 50, 50)
        }
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
        if (shotty == true) {
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
                `, play1, -50, -50)
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
                `, play1, 50, -50)
        }
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
        if (shotty == true) {
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
                `, play1, 50, 50)
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
                `, play1, -50, 50)
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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
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
    100,
    true
    )
    facingLeft = true
    facingRight = false
    facingUp = false
    facingDown = false
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    if (count < 5) {
        tiles.setCurrentTilemap(tileList.removeAt(randint(0, tileList.length - 1)))
    }
    count += 1
})
function purpleGreen_2 () {
    play1.setPosition(22, 104)
    tiles.setWallAt(tiles.getTileLocation(11, 6), true)
    tiles.setWallAt(tiles.getTileLocation(11, 5), true)
}
function lvl_1 () {
	
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(status.spriteAttachedTo(), effects.ashes, 500)
    count2 += -1
})
function I_HAVE_THE_POWER () {
	
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(status.spriteAttachedTo(), effects.fire, 500)
    game.splash("GAME OVER")
    game.reset()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
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
    100,
    true
    )
    facingRight = true
    facingUp = false
    facingLeft = false
    facingDown = false
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    if (count < 5) {
        tiles.setCurrentTilemap(tileList.removeAt(randint(0, tileList.length - 1)))
    }
    count += 1
})
function enemy (list: Image[]) {
    count2 = 0
    for (let index = 0; index < 2 * count; index++) {
        enm_1 = sprites.create(list._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(enm_1, tiles.getTileLocation(randint(2, 10), randint(2, 10)))
        statusbars.create(20, 4, StatusBarKind.EnemyHealth).attachToSprite(enm_1)
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, enm_1).value = 100
        count2 += 1
        if (!(enm_1.image.equals(assets.image`purpgrey`))) {
            enm_1.follow(play1, randint(10, 50 + 5 * count))
        }
    }
}
tileUtil.onMapLoaded(function (tilemap2) {
    powerup = sprites.create(powerups._pickRandom(), SpriteKind.POWER)
    tiles.placeOnTile(powerup, tiles.getTileLocation(randint(1, 10), randint(1, 10)))
})
function purplePurple () {
    play1.setPosition(22, 88)
    tiles.setWallAt(tiles.getTileLocation(5, 11), true)
    tiles.setWallAt(tiles.getTileLocation(6, 11), true)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
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
    100,
    true
    )
    facingDown = true
    facingLeft = false
    facingRight = false
    facingUp = false
})
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
enemy(enmlist)
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
	
})
sprites.onCreated(SpriteKind.Acid, function (sprite) {
    timer.after(5000, function () {
        sprites.destroy(sprite)
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1 * P_P
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.POWER, function (sprite, otherSprite) {
    if (otherSprite.image.equals(assets.image`nodamage`)) {
        shield = true
        timer.after(5000, function () {
            shield = false
        })
    }
    if (otherSprite.image.equals(assets.image`shotty`)) {
        shotty = true
        count3 += 1
        if (count3 >= 1) {
            P_P += 5
        }
    }
    if (otherSprite.image.equals(assets.image`Vigor`)) {
        health_1.value = 100
    }
    if (otherSprite.image.equals(assets.image`str`)) {
        P_P += 10
    }
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Acid, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (shield == false) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, sprite).value += -5
        pause(200)
    }
})
let Acid: Sprite = null
let powerup: Sprite = null
let enm_1: Sprite = null
let count2 = 0
let projectile: Sprite = null
let facingDown = false
let facingRight = false
let facingLeft = false
let facingUp = false
let shotty = false
let shield = false
let powerups: Image[] = []
let tileList: tiles.TileMapData[] = []
let enmlist: Image[] = []
let health_1: StatusBarSprite = null
let P_P = 0
let play1: Sprite = null
let count = 0
let count3 = 0
count3 = 0
count = 1
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
P_P = 20
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), play1)
play1.setPosition(80, 60)
scene.cameraFollowSprite(play1)
health_1 = statusbars.create(20, 4, StatusBarKind.Health)
health_1.value = 100
health_1.attachToSprite(play1, 0, 0)
controller.moveSprite(play1, 100, 100)
scene.setBackgroundColor(6)
enmlist = [
assets.image`purplepurp`,
assets.image`purpgreen1`,
assets.image`purplegreen2`,
assets.image`enemy1`,
assets.image`purpgrey`
]
tileList = [
tilemap`level7`,
tilemap`level2`,
tilemap`level8`,
tilemap`level5`
]
powerups = [
assets.image`nodamage`,
assets.image`str`,
assets.image`Vigor`,
assets.image`shotty`
]
tiles.setCurrentTilemap(tilemap`level0`)
tiles.setWallAt(tiles.getTileLocation(11, 6), true)
shield = false
let heal3 = false
let strength = false
shotty = false
game.onUpdate(function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(11, 6), sprites.dungeon.doorOpenEast)) {
        tiles.setWallAt(tiles.getTileLocation(11, 6), false)
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(0, 5), sprites.dungeon.stairEast)) {
        if (count2 == 0) {
            tiles.setWallAt(tiles.getTileLocation(0, 5), false)
            tiles.setWallAt(tiles.getTileLocation(0, 4), false)
        }
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(5, 11), sprites.dungeon.stairNorth)) {
        if (count2 == 0) {
            tiles.setWallAt(tiles.getTileLocation(5, 11), false)
            tiles.setWallAt(tiles.getTileLocation(6, 11), false)
        }
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(11, 5), sprites.dungeon.stairEast)) {
        if (count2 == 0) {
            tiles.setWallAt(tiles.getTileLocation(11, 5), false)
        }
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(11, 6), sprites.dungeon.stairWest)) {
        if (count2 == 0) {
            tiles.setWallAt(tiles.getTileLocation(11, 6), false)
            tiles.setWallAt(tiles.getTileLocation(11, 5), false)
        }
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(2, 2), assets.tile`myTile9`)) {
        if (count2 == 0) {
            game.showLongText("YOU WIN.... TO BE CONTINUED", DialogLayout.Bottom)
            game.reset()
        }
    }
})
game.onUpdate(function () {
    if (!(controller.left.isPressed() || (controller.right.isPressed() || (controller.up.isPressed() || controller.down.isPressed())))) {
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
game.onUpdateInterval(5000, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.image.equals(assets.image`purpgrey`)) {
            Acid = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . a c 7 c . . . . . . 
                . . . . . a a a c 7 7 . . . . . 
                . . . . 7 c 7 a 7 a 7 c . . . . 
                . . . . c 7 7 7 a a 7 7 . . . . 
                . . . . . 7 a 7 a c 7 . . . . . 
                . . . . . . 7 7 c c . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Acid)
            Acid.setPosition(value.x, value.y)
            Acid.follow(play1, 50)
        }
    }
})
forever(function () {
    if (count == 6) {
        tiles.setCurrentTilemap(tilemap`fin lvl`)
        scene.setBackgroundColor(4)
        count += 1
        final()
    }
})
