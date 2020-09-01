/*
  Flood Fill

  Most graphical “paint” applications, have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2 dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor) ! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent.

  Input:
  [
    [3, 2, 3, 4, 3],
    [2, 3, 3, 4, 0],
    [7, 3, 3, 5, 3],
    [6, 5, 3, 4, 1],
    [1, 2, 3, 3, 3]
  ]

  and startXY of [2,2], and newColor of 1.

  we examine the cells that are directly (not diagonally) adjacent to startXY. If any have a value of 3 (the original value at startXY), we change its value to 1 ( newColor ) and repeat the process with its directly-adjacent neighbor cells. We repeat this until th e entire zone of similarly-colored cells is changed .

  Output:
  [
    [3, 2, 1, 4, 3],
    [2, 1, 1, 4, 0],
    [7, 1, 1, 5, 3],
    [6, 5, 1, 4, 1],
    [1, 2, 1, 1, 1 ]
]
*/

// add params if needed for recursion
function floodFill(canvas2D, startXY, newColor) {
    //var X < canvas2D.length;
    //var Y < canvas2D.length;
    var canvas2D[Y][X] = startXY;
    if (X < 0 || Y < 0 || X > canvas2D.length || Y > canvas2D.length) { //
        return null;
    }
    //unreachable below
    if (startXY == newColor) {
        return startXY;
    } //  [x-1,y], [x+1,y],[x,y-1],[x,y+1]
    if (canvas2D[Y][X - 1] == startXY) {
        canvas2D[Y][X - 1] = newColor;
    }
    if (canvas2D[Y][X + 1] == startXY) {
        canvas2D[Y][X + 1] = newColor;
    }
    if (canvas2D[Y + 1][X] == startXY) {
        canvas2D[Y + 1][X] = newColor;
    }
    if (canvas2D[Y - 1][X] == startXY) {
        canvas2D[Y - 1][X] = newColor;
    }
    return floodFill(canvas2D, startXY, newColor)
}
var canvas2D = [
    [3, 2, 3, 4, 3],
    [2, 3, 3, 4, 0],
    [7, 3, 3, 5, 3],
    [6, 5, 3, 4, 1],
    [1, 2, 3, 3, 3]
]
var startXY = [2, 2]
var newColor = 1
console.log(floodFill(canvas2D, startXY, newColor))


/* ******************************************************************************** */

/*
  Given
    - a 2d array representing a social space as a grid
      Each grid space either has a string representing a person's name,
      or null if there is no person there
    - a point object {x: int, y: int} indicating where "patient zero" is in the grid

  return an array of all the names of the people who that corona virus will spread to due to not social distancing


  There will be exactly one grid space with the value "patient zero" that
  represents someone infected.

  Standing next to someone means there is someone in the grid space immediately
  above, below, left, or right. Infection cannot directly spread diagonally.

  Someone is social distancing if the grid space above, below, left, and right are null or
  there is no space next to them.

  For simplicity sake (not technically true) let's assume if a person is standing
  next to someone who is or becomes infected, they will also become infected.

  Find everyone who corona virus will spread to starting from "patient zero" as the virus spreads outward.
*/

const socialSpaceGrid = [
    ["Jon2", "Jane2", null, null],
    [null, "Jon1", "Jane1", null],
    ["Jane4", "patient zero", null, "Jon3"],
    ["Jon4", null, "Jane3", null],
]
const patientZeroPoint = { x: 1, y: 2 }
const expected = ["Jane4", "Jon4", "Jon1", "Jane1", "Jane2", "Jon2"]
// order of output list does not matter

// add params if needed for recursion
function coronaVirusFloodFill(grid, point) { }