let _player1 = game.createSprite(2, 2)
let _player2 = game.createSprite(3, 2)
let _ball = game.createSprite(2, 2)
let time = 120
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
_ball.set(LedSpriteProperty.Y, -6)
basic.forever(function () {
    basic.pause(500)
    _ball.change(LedSpriteProperty.Y, 1)
})
basic.forever(function () {
    time += 0 - 1
    if (true) {
    	
    }
})
