function hero2 () {
    hero = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . f f 2 2 2 2 2 2 2 f f . . . . . . . . . . . 
. . . . . . . . . f 2 2 2 2 2 2 2 2 2 2 2 f . . . . . . . . . . 
. . . . . . . . . f 2 2 2 2 2 2 2 2 2 2 2 f . . . . . . . . . . 
. . . . . . . . . 2 f f 2 2 2 2 2 2 2 f f 2 . . . . . . . . . . 
. . . . . . . . . f 1 1 f 2 2 2 2 2 f 1 1 f . . . . . . . . . . 
. . . . . . . . f 1 1 1 1 f 2 2 2 f 1 1 1 1 f . . . . . . . . . 
. . . . . . . . f 1 1 1 1 1 f 2 f 1 1 1 1 1 f . . . . . . . . . 
. . . . . . . . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f . . . . . . . . . 
. . . . . . . . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f . . . . . . . . . 
. . . . . . . . . f f 1 1 1 f 2 f 1 1 1 f f . . . . . . . . . . 
. . . . . . . . . f 2 f f f 2 2 2 f f f 2 f . . . . . . . . . . 
. . . . . . . . . . f 2 2 2 2 2 2 2 2 2 f . . . . . . . . . . . 
. . . . . . . . . . . f f 2 2 2 2 2 f f . . . . . . . . . . . . 
. . . . . . . . . . f 2 2 f f f f f 2 2 f . . . . . . . . . . . 
. . . . . . . . . f 2 2 2 f 2 f 2 f 2 2 2 f . . . . . . . . . . 
. . . . . . . . f 8 8 f 8 2 f f f 2 8 f 8 8 f . . . . . . . . . 
. . . . . . . f 2 2 8 f 8 f 2 f 2 f 8 f 8 2 2 f . . . . . . . . 
. . . . . . . f 2 2 f f 2 2 2 2 2 2 2 f f 2 2 f . . . . . . . . 
. . . . . . . . f f . f 8 8 8 8 8 8 8 f . f f . . . . . . . . . 
. . . . . . . . . . f 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . 
. . . . . . . . . . f 8 8 8 f f f 8 8 8 f . . . . . . . . . . . 
. . . . . . . . . f f 2 2 f . . . f 2 2 f f . . . . . . . . . . 
. . . . . . . . . f 2 2 2 f . . . f 2 2 2 f . . . . . . . . . . 
. . . . . . . . . f f f f f . . . f f f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(hero, 300, 300)
    hero.setPosition(272, 495)
}
function countdown () {
    info.startCountdown(250)
}
function background () {
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 2 2 b b b b b f c c c c b c b c f f f 6 6 6 6 b b b f b b b f 
f 2 2 f f f f f f f f f f f f f b f f f 5 f f f b f b f f f b f 
f f f f c c c b b c c c e c c c c f f 8 a 5 4 4 b b b b f f b f 
f b b b b f f f f f f f f f f f f f f f 5 f f f b f b f f b b f 
f b f f b b b b b b b c c c c c c f f f 7 7 7 7 b b b b f b f f 
f b c f b f f f f f f f f f f c f f f f f f f f b f b b f b b f 
f f b f b f b f b b b b c c f c f f f f f f f f f f f b f b b f 
f c c f c f b f f f f f f b f c f f c b f f c f b b f b f b f f 
f e b f b f b b b b b b f b b c c c f b b b c f b f f b f b b f 
f b f f b b b b f f f f f b f b f c f b c c f f b f b b f f b f 
f b f f b f f b f f f f f b f b f c f b f c c f b f f b f b b f 
f b e f c f b b b b f b b b f b f c f c b f c f b f b b f b f f 
f f b f b f f f f b b f f b f b f b f f c f c f b f f b b b b f 
f b b f b f f f f f b b f e f b f b f f f f c f b f b b f f f f 
f b f f b b b f 9 f f b f b f b f e b b b b b f b f b f b f f f 
f b e f b f f f b f f b f b f b f f f f f f b f b b b f b b f f 
f f b f b b f f b f f f f b f b f b b b c f b f b b f f f b b f 
f 2 2 f e b b f b f b b b b f b f b f f f f b f b b b b b b b f 
f 2 2 f b f b f b b b f f f f c f b f e f b b f f f f f f f b f 
f f f f f f b f f f f f b e b c b c f c f f f f b f b f b b b f 
f b f f f f b f e c b b b b f f f f f b f 2 2 f b b b b b f f f 
f b b b b b b f f f f f f b b c b b b b f 2 2 f b f f f b f b f 
f f b f b f f f f f f f f f f f f f f f f f b f b f f b b f b f 
f b b f b b b b b b b b b b b b b b b b b f b b b f f b f f b f 
f f b f f f f f f f f f f f f f b f f f b f f f f f f b f f b f 
f f b b b b b b b b b f f b b f b f b b b f b b b b b b b f b f 
f f f f f b f b f f b b f f b f b f b f f f b f f f f f f f b f 
f b b b f b f b b f f b b f b f b f b b b f b b b b b b b f b f 
f b f f f b f f f f f f b b b f f f f f b f b f f f f b f f b f 
f b b b b b b b b f b b b f b f b b b b b b b f b b b b b b b f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.ThirtyTwo)
    scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
    scene.setTile(4, img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, false)
    scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, false)
}
function camera () {
    scene.cameraFollowSprite(hero)
}
function Ammo () {
    Ammo2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . b b b b b . . 
. . . . . . . . b b 7 7 7 b b . 
. . . . . . . b b 7 7 7 7 7 b . 
. . . . . . b b 7 7 7 7 7 7 b . 
. . . . . b b 7 7 7 7 7 7 7 b . 
. . . . . b 7 7 7 7 7 7 7 b b . 
. . . . . b 7 7 7 7 7 7 b b . . 
. . . . . b 7 7 7 7 7 b b . . . 
. . . . . b b 7 7 7 b b . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 d 1 . . . . . . . 
. . . . . 1 d 1 d 1 . . . . . . 
. . . . 1 d 1 d 1 d 1 . . . . . 
. . . . . 1 d 1 d 1 . . . . . . 
. . . . . . 1 d 1 . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, 100, 0)
})
function villian1 () {
    villian = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . f f 8 8 5 5 8 8 f f . . . . . . . . . . . . 
. . . . . . . . . f 8 8 8 8 5 5 8 8 8 8 f . . . . . . . . . . . 
. . . . . . . . f 8 8 8 8 8 5 5 8 8 8 8 8 f . . . . . . . . . . 
. . . . . . . . f 8 8 8 8 8 5 5 8 8 8 8 8 f . . . . . . . . . . 
. . . . . . . f 8 5 8 8 8 8 5 5 8 8 8 8 5 8 f . . . . . . . . . 
. . . . . . . f 8 5 5 5 8 8 5 5 8 8 5 5 5 8 f . . . . . . . . . 
. . . . . . f 8 8 8 5 5 5 5 5 5 5 5 5 5 8 8 8 f . . . . . . . . 
. . . . . . f 8 8 8 5 5 5 5 5 5 5 5 5 5 8 8 8 f . . . . . . . . 
. . . . . . f 8 8 5 5 5 5 5 5 5 5 5 5 5 5 8 8 f . . . . . . . . 
. . . . . . f 8 5 a a a a a a a a a a a a 5 8 f . . . . . . . . 
. . . . . . f 8 5 a f 1 a a a a a a f 1 a 5 8 f . . . . . . . . 
. . . . . . . f 5 a f f a a a a a a f f a 5 f . . . . . . . . . 
. . . . . . . f 5 a a a a a a a a a a a a 5 f . . . . . . . . . 
. . . . . . f 5 f 5 a 1 1 1 1 1 1 1 1 a 5 f 5 f . . . . . . . . 
. . . . . f 5 5 5 f a a a a a a a a a a f 5 5 5 f . . . . . . . 
. . . . . f f 5 5 5 f f f f f f f f f f 5 5 5 f f . . . . . . . 
. . . . . . . f 8 8 5 5 5 5 5 5 5 5 5 5 8 8 f . . . . . . . . . 
. . . . . . f 8 8 f 8 8 5 5 5 5 5 5 8 8 f 8 8 f f . . . . . . . 
. . . . . f 5 5 5 f 8 8 8 8 5 5 8 8 8 8 f 5 5 5 5 f . . . . . . 
. . . . . f 5 5 f f 5 5 5 5 5 5 5 5 5 5 f f 4 2 8 f . . . . . . 
. . . . . . f f . f 5 5 5 8 5 5 8 5 5 5 f . f 7 3 f . . . . . . 
. . . . . . . . . f 8 8 8 8 5 5 8 8 8 8 f . . f f . . . . . . . 
. . . . . . . . f 8 8 8 8 f f f f 8 8 8 8 f . . . . . . . . . . 
. . . . . . . . f 5 5 5 f . . . . f 5 5 5 f . . . . . . . . . . 
. . . . . . . f f 5 5 5 f . . . . f 5 5 5 f f . . . . . . . . . 
. . . . . . f 5 5 5 5 5 f . . . . f 5 5 5 5 5 f . . . . . . . . 
. . . . . . f 5 5 5 5 5 f . . . . f 5 5 5 5 5 f . . . . . . . . 
. . . . . . f f f f f f f . . . . f f f f f f f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    villian.setPosition(658, 110)
    villian.follow(hero, 100)
}
let villian: Sprite = null
let projectile: Sprite = null
let Ammo2: Sprite = null
let hero: Sprite = null
hero2()
camera()
background()
villian1()
countdown()
Ammo()
