// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`0c000c00030101010101010101010603010101010102010106010601060605010101010801070601010101030101010301060109010201010501010106010609010101010102010706060304010101010101010106060609030201010501030606060109010601010101010106010606010101030101010301060601010801010101060606010701010101010106010101060601`, img`
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . 2 . . . . 2 . . . . 
. . . . . . . . . . . 2 
. . . . 2 . . . . . . 2 
. . . . . . . . . . . 2 
. . . . . . . . . . . 2 
. . . . 2 . . . . . . 2 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. 2 . . . . . . . . . . 
. . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.swamp.swampTile3,sprites.castle.tileGrass2,sprites.dungeon.stairWest,sprites.castle.rock0,sprites.castle.tileGrass3,sprites.swamp.swampTile1,sprites.castle.rock1,sprites.dungeon.floorMixed], TileScale.Sixteen);
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
