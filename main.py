_player1 = game.create_sprite(2, 2)
_player2 = game.create_sprite(3, 2)
_ball = game.create_sprite(2, 2)
time = 120
time -= 1
music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
    music.PlaybackMode.UNTIL_DONE)
_ball.set(LedSpriteProperty.Y, -6)

def on_forever():
    basic.pause(500)
    _ball.change(LedSpriteProperty.Y, 1)
basic.forever(on_forever)
