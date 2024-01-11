// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0c000c000307070707090707070707050110110b0b0b0b0b0b0b0b060a110d0b0b0b0b0b0b0b0b060110110b0b0b0b0b0b0b0b06010b0b0b0b0b0b0b0b0b0b06010c0c0c0c0c0c0b0b0b0b06010c0c0c0c0c0c0b0b0b0b060e0b0b0b0b0b0b0b0b0b0b06010b0b0b0b0b0b0b0b0b0b06010b0b0b0b0b0b0b0b0b0b06010b0b0b0b0b0b0b0b0b0b0602080808080f0f0808080804`, img`
2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.stairLarge,sprites.dungeon.purpleOuterWest1,sprites.dungeon.stairNorth,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.floorDark0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
