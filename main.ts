namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const Paddle = SpriteKind.create()
    export const LeftWall = SpriteKind.create()
    export const RightWall = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Paddle, SpriteKind.Ball, function (sprite, otherSprite) {
    ballSprite.vx = ballSprite.vx * -1
})
sprites.onOverlap(SpriteKind.LeftWall, SpriteKind.Ball, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    ballSprite.setPosition(80, 60)
})
info.onLifeZero(function () {
    game.setGameOverMessage(true, "Player 2 WON")
    game.gameOver(true)
})
info.player2.onLifeZero(function () {
    game.setGameOverMessage(true, "Player 1 WON")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.RightWall, SpriteKind.Ball, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
    ballSprite.setPosition(80, 60)
})
let ballSprite: Sprite = null
info.setLife(3)
info.player2.setLife(3)
let leftWallSprite = sprites.create(img`
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    `, SpriteKind.LeftWall)
leftWallSprite.setPosition(2, 60)
let rightWallSprite = sprites.create(img`
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    22
    `, SpriteKind.RightWall)
rightWallSprite.setPosition(158, 60)
let paddleSprite1 = sprites.create(img`
    3 3 3 
    3 3 3 
    3 3 3 
    3 3 3 
    3 3 3 
    3 3 3 
    3 3 3 
    3 3 3 
    3 3 3 
    3 3 3 
    3 3 3 
    3 3 3 
    3 3 3 
    3 3 3 
    3 3 3 
    3 3 3 
    `, SpriteKind.Paddle)
paddleSprite1.setStayInScreen(true)
controller.moveSprite(paddleSprite1, 0, 100)
paddleSprite1.setPosition(10, 65)
let paddleSprite2 = sprites.create(img`
    6 6 6 
    6 6 6 
    6 6 6 
    6 6 6 
    6 6 6 
    6 6 6 
    6 6 6 
    6 6 6 
    6 6 6 
    6 6 6 
    6 6 6 
    6 6 6 
    6 6 6 
    6 6 6 
    6 6 6 
    6 6 6 
    `, SpriteKind.Paddle)
paddleSprite2.setStayInScreen(true)
controller.player2.moveSprite(paddleSprite2, 0, 100)
paddleSprite2.setPosition(150, 65)
ballSprite = sprites.create(img`
    5 5 5 5 
    5 5 5 5 
    5 5 5 5 
    5 5 5 5 
    `, SpriteKind.Ball)
ballSprite.setVelocity(50, 50)
ballSprite.setBounceOnWall(true)
