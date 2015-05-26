import SimpleJSON;

var data : TextAsset;
var pokedex_data;

function Start () {
	var pokedex_data = JSON.Parse(data.text);
	// Let's just print Bulbasaur's data
//	print(pokedex_data[0]);
	
	// Now let's try the data of a random pokemon
//	print(pokedex_data[Random.Range(0,747)]);

	//What does every pokemon have? Let's take a look at the keys of the pokemon
//	var keys = pokedex_data[Random.Range(0,747)].Keys;
//	for(key in keys)
//	print(key);

	// What do you want to mess with?
//	print(pokemon[Random.Range(0,747)][ENTER QUALITY];
}

function Update () {
	
}