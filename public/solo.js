var newWeights=[];
var fullSize=0;

function startup(){
	var weights=[5,10,14,6,10,16,10];
	newWeights=[];
	fullSize=0;
	for(i=0;i<weights.length;i++){
		fullSize+=weights[i];
		for(a=0;a<weights[i];a++){
			newWeights.push(i);
		}
	}
}

startup();
function firstNote(currentNote){
	var rando=Math.floor(Math.random()*fullSize);
	console.log(rando);
	rando=newWeights[rando];
	rando+=findPos(currentNote,key);
	if(rando>6){
		rando=rando-7;
	}
	console.log(key[rando]);
	if(currentNote%2!=0){
		playNote(key[rando],2,"Accoustic.wav",1);
	}
	else{
		playNote(currentNote,2,"Accoustic.wav",0.75);
	}
}