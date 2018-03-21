
var temp = ["..Human..Why are taking pictures of me", "...The catnip made me doit...",
"..Why does the red dot always get awasy.."];
for (i = 0; i <= 20; i++){
	console.log("Love me, pet me!")
	if(i % 2 == 0)
	{
		console.log(temp[Math.floor(temp.length * Math.random())]);
	}
	
}