var very_left = -13.3;
var very_right = 26.6;
var very_bottom = -9.9;
var very_top = 19.8;

var total_horizontal = very_right - very_left;
var total_vertical = very_top - very_bottom;

var num_x_increments = 11;  //number of points - 1

var x_increment_size = total_horizontal / num_x_increments;
var X_VALUE_INCREMENT = 2.10969010667;
//var y_increment_size = ;      //percentage conversion --> Y position
var increment_count = 0;
var increments = [];
for(var i = 0; i < num_x_increments; i++) {
  increments.push(very_right / num_x_increments);
}

var bottom_percentage = 0;
var top_percentage = 45;
var percentage_difference = top_percentage - bottom_percentage;


var chemicalEngineering = [];
var civilEngineering = [];
var computerScience = [];
var electricalEngineering = [];
var mechanicalEngineering = [];

var year;
var nextyear;

var trailing_squares = []; // to create a line behind squares as they move
var trailing_colors = []; // colors corresponding to points in trailing_squares
var trailingPointCount = 0; // helper var to get rid of starting points

/** Total count of students per major */
chemTotal = [332, 311, 344, 347, 358, 367, 368, 383, 374, 280, 264, 224];
civilTotal = [289, 310, 351, 379, 382, 395, 402, 361, 302, 255, 248, 242];
comSciTotal = [563, 486, 433, 408, 287, 314, 294, 274, 253, 220, 225, 265];
elecTotal = [565, 684, 682, 724, 759, 730, 758, 660, 565, 477, 497, 612];
mechTotal = [494, 414, 389, 391, 424, 466, 489, 509, 495, 386, 362, 369];
// 2004 -> 2015
chemTotal = chemTotal.reverse();
civilTotal = civilTotal.reverse();
comSciTotal = comSciTotal.reverse();
elecTotal = elecTotal.reverse();
mechTotal = mechTotal.reverse();

var adjustedfix = 0;
var adjustedHeight;


//2015 --> 2004
chemicalEngineering = [33.4,	33.1,	29.7,	30.5,	32.4,	31.3,	33.4,	37.1, 35.6,	31.4,	29.2,	34.4];
civilEngineering = [36,	33.9,	33.3,	35.8,	35.1,	33.9,	33.1,	29.9,	33.1,	29,	30.2,	31];
computerScience = [17.4,	16.9,	16.4,	16.2,	16.7,	15.1,	12.6,	10.6,	9.9,	13.2,	15.6,	19.6];
electricalEngineering = [18.2,	18.1,	16.6,	16.02,	14.6,	13.6,	13.3,	12.1,	11.3,	13.2,	13.3,	14.7];
mechanicalEngineering = [16.4,	15.2,	28.6,	13.04,	9.9,	12.4,	12.5,	11, 12.7,	14.5,	13.8,	15.4];

//2004 --> 2015
chemicalEngineering = chemicalEngineering.reverse();
civilEngineering = civilEngineering.reverse();
computerScience = computerScience.reverse();
electricalEngineering = electricalEngineering.reverse();
mechanicalEngineering = mechanicalEngineering.reverse();

//testing to see if it works
// console.log(chemicalEngineering);
// console.log(civilEngineering);
// console.log(computerScience);
// console.log(electricalEngineering);
// console.log(mechanicalEngineering);


function calculateHeight(percentage) {
  var height;
  height = percentage - bottom_percentage;          //calculate difference from very bottom
  //console.log("Percent difference", height);
  height = height / percentage_difference           //calculate where (percentage wise) this would lie between bottom and top
  //console.log("Percent up from bottom", height);    //this works fine

  height = height * very_top;                       //calculate adjusted height
  //console.log("Return value:", height);
  return height - .5;                               // -0.5 because to offet; to set the center of the cube as what we want.

}

function calculateScale(num) {
  // average total enrollment = 400 per major
  var avg = 400;
  var diff = num - avg;
  var small = false;
  if (diff < 0)
    small = true;
  var percent = diff / avg;

  if (small) {
    return 1.0 - percent;
  }
  else {
    return 1.0 + percent;
  }
}