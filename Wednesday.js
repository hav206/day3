var kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
var thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs", 
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans", 
    
  ]
];

//kristynsCloset.push("hello");
//var kristynsShoe = kristynsCloset.pop();
//console.log(kristynsShoe);
var kristynsShoe = kristynsCloset.shift();
console.log(kristynsShoe);
thomsCloset.push(kristynsShoe);

kristynsCloset[0] = "no cowboy boots";
kristynsCloset[1] = "no socks";
kristynsCloset[2] = "no GA hoodie";

for (var i = 0; i < kristynsCloset.length;i++){
	console.log(kristynsCloset[i]);
}

console.log(thomsCloset[0][0] = "white button-up");
console.log(thomsCloset[0][1] = "yellow grey button-up");
console.log(thomsCloset[1][0] = "red jeans");


for (var i = 0; i < kristynsCloset.length; i++)
{
	console.log("WHIRR: Now washington(item)" + kristynsCloset[i]);
}

var k = thomsCloset.length;
console.log(k);

for (var i = 0; i < thomsCloset.length; i++)
{
	for(var j = 0; j < thomsCloset[i].length; j++){
		console.log(thomsCloset[i][j]);
	}
}

var temp = 0;
for (var k = 0; k < 100; i++){
	if(i % 3 == 0 || i % 5 == 0){
		temp += k;
	}
}


// change the first index to no cowboy boots
// change the second index of Kristyns to no sock and so on...
