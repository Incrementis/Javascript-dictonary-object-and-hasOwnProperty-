function getProperties()
{
	var image 		= document.getElementById('snail');
	var time 		= document.getElementById('time');
	var distance 	= document.getElementById('distance');
	var properties	= document.getElementById('properties');
	
	image.setAttribute('src', 'Snail-Properties.jpg');
	
	/*
		NOTE:
		This part of code is not important, because it 
		adds only some content into the html document and is not
		an essential part of this dictonary object (if any at al).
		
		TIP:
		Understand attribute "onchange".
		Mark a word with the mouse/keyboard to highlite every same word within the whole document(Notepad++)
	*/	
	time.innerHTML 		= 'Set time: <input type="number" min="1" value="1" onchange="Snail.has_velocity()">';
	distance.innerHTML 	= 'Set distance: <input type="number" min="1" value="1" onchange="Snail.has_velocity()">';
	properties.style.visibility = "visible";
	
}



/*
	ATTENTION:
	A dictonary object with the name "Snail"
*/
var Snail =
{
	needs_time: "",
	travels_distance:"",
	has_velocity: function()
	{
		//Plus signs are needed to convert input values to type "number"
		this.travels_distance 	= +document.getElementById('distance').getElementsByTagName('input')[0].value;
		this.needs_time 		= +document.getElementById('time').getElementsByTagName('input')[0].value;
		
		
		var result = document.getElementById('result');
		result.innerHTML = this.travels_distance/this.needs_time;
		
	}
	
}



//Checking the Properties of the "Snail" object
function analyseSnail()
{
	var List = document.getElementById('propList');
	
	//Showing the Properties in the Browser
	List.innerHTML = 'Time: ' + Snail.hasOwnProperty('needs_time');
	List.innerHTML += '<br>Distance: ' + Snail.hasOwnProperty('travels_distance');
	List.innerHTML += '<br>Velocity:' + Snail.hasOwnProperty('has_velocity');
}



//Deletes the "hasOwnProperty" method 
function destroy()
{
	/*
		A REASON:
		E.g. not knowing, an inexperienced developer overwrites the "hasOwnProperty" method by defining it as
		the amount of properties which the "Snail" object has.
	*/
	Snail.hasOwnProperty = 3;
	
	
	var List = document.getElementById('propList');
	
	//Reset
	List.innerHTML = "";
	
	//Showing the Properties in the Browser
	List.innerHTML = 'Time: ' + Snail.hasOwnProperty('needs_time');
	List.innerHTML += '<br>Distance: ' + Snail.hasOwnProperty('travels_distance');
	List.innerHTML += '<br>Velocity:' + Snail.hasOwnProperty('has_velocity');
	
}



//Repairs the "hasOwnProperty" method 
function repair()
{
	//Repairing
	Snail.hasOwnProperty = {}.hasOwnProperty;
	
	var List = document.getElementById('propList');
	
	//Showing the Properties in the Browser 
	List.innerHTML = 'Time: ' + Snail.hasOwnProperty('needs_time');
	List.innerHTML += '<br>Distance: ' + Snail.hasOwnProperty('travels_distance');
	List.innerHTML += '<br>Velocity:' + Snail.hasOwnProperty('has_velocity');
}