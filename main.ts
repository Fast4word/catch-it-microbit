let _player = game.createSprite(2, 2)
let _ball = game.createSprite(2, 2)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
_ball.set(LedSpriteProperty.Y, -6)
basic.forever(function () {
    basic.pause(500)
    _ball.change(LedSpriteProperty.Y, 1)
})
