// Key Order: C G D A E B F# C# G# D# A# F

var allNotes=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
var steps=[8.6,8.6,4.3,8.6,8.6,8.6,4.3];

var keys=[
	// C 0
	["C","D","E","F","G","A","B"],
	// G 1
	["G", "A", "B", "C", "D", "E", "F#"],
	// D 2
	["D", "E", "F#", "G", "A", "B", "C#"],
	// A 3
	["A", "B", "C#", "D", "E", "F#", "G#"],
	// E 4 
	["E", "F#", "G#", "A", "B", "C#", "D#"],
	// B 5 
	["B", "C#", "D#", "E", "F#", "G#", "A#"],
	// F# 6
	["F#", "G#", "A#", "B", "C#", "D#", "F"],
	// C# 7
	["C#", "D#", "F", "F#", "G#", "A#", "C"],
	// G# 8
	["G#", "A#", "C", "C#", "D#", "F", "G"],
	// D# 9
	["D#", "F", "G", "G#", "A#", "C", "D"],
	// A# 10
	["A#", "C", "D", "D#", "F", "G", "A"],
	// F 11
	["F", "G", "A", "A#", "C", "D", "E"]

];


var bpm=150;
bpm=60000 / bpm;

var key = keys[7];
var parts=[[3,1,5,4],[6,2,4,1]];
var pattern=[[4,1,0.15],[2,2,0.25]];
var style='norm';


var paused = 0;
var playArray=[true,false]
var alwaysPlay=Math.floor(Math.random()*2);
alwaysPlay=playArray[alwaysPlay];
console.log(alwaysPlay);

var chords=[];

var currentSection=0;
var currentOctave=1;

var poly=4;





