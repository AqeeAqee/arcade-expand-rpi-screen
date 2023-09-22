/**
 * Bigger screen for RPi
 * 1. set following define, max size: 
 *      200x160 (C8 x A0) for neat, 66% bigger area
 *      or
 *      208x152 (D0 x 98) for keep 4:3 ratio, 65% bigger area
 *      more bigger size will cause panic(22=PANIC_GC_TOO_BIG_ALLOCATION) of gc, object size too big to allocate memery (max bytes=16*1024-16)
 * 2. save raw elf file for RPi, https://arcade.makecode.com/?compile=rawELF&hw=rpi#editor
 * 3. open elf in hex editor, search "20 B4 A0 20 78 21", which is partial bytes of the hardcode "screen=image.create(160,120)"
 * 4. replace A0 to width, and 78 to height in hex.
 * 5. Or do 4&5 with provided python tool
 * 6. done. Have fun!
 */

namespace userconfig {
    //defines we need
    export const DISPLAY_WIDTH = 208; //D0
    export const DISPLAY_HEIGHT = 152; //98
    
    //for sim, accordantly
    export const ARCADE_SCREEN_WIDTH = DISPLAY_WIDTH
    export const ARCADE_SCREEN_HEIGHT = DISPLAY_HEIGHT

    //other defines
    // export const SPEAKER_VOLUME=99
}


//test codes:
scene.setBackgroundColor(11)
scene.setBackgroundImage(sprites.background.autumn)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
mySprite.vx=33
mySprite.vy=33
mySprite.setBounceOnWall(true)