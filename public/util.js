function populateChords(){
	var newChords=[];
	for(i=0;i<parts.length;i++){
		newChords=[];
		for(a=0;a<parts[i].length;a++){
			newChords.push(findChord(parts[i][a],pattern[i][1]));
		}
	}
}
populateChords();

document.onkeydown=function(e){
	if(e.keyCode==32){
		paused++;
	}
}

function findPos(x, array){
	for(a=0;a<array.length;a++){
		if(array[a]==x){
			return a;
		}
	}
}

function playNote(note,octave,instrument,volume,duration){
	duration=duration*1000||4000
	var pos=findPos(note,allNotes);
	var audio=new Audio(instrument);
	var timestamp=octave*48-48;
	timestamp=timestamp+pos*4;
	audio.currentTime=timestamp;
	audio.volume=volume;
	audio.play();
	setTimeout(function(){
		audio.pause();
	},duration);
}

function populateKeys(){
	var newKey=[];
	var pos=4;
	var loc=0;
	for(o=0;o<allNotes.length;o++){
		newKey=[];
		for(i=4;i<11;i++){
			if(pos>6){
				pos=pos-7;
			}
			if(i==10){
				loc = findPos(keys[o][pos],allNotes)+1;
				if(loc==allNotes.length){
					loc=0;
				}
				newKey.push(allNotes[loc]);
			}
			else{
				newKey.push(keys[o][pos]);
			}
			pos++;
		}
		keys.push(newKey);
	}
}

populateKeys();
function findChord(position, octave){
	position=position-1;
	var nextNote = position+2;
	var thirdNote = position+4;
	var chord = [[key[position],octave]];
	var newOctave=octave;
	if(nextNote>6){
		nextNote=nextNote-7;
		newOctave++;
	}
	chord.push([key[nextNote],newOctave]);
	if(thirdNote>6){
		thirdNote=thirdNote-7;
		if(newOctave==octave){
			newOctave++;
		}
	}
	chord.push([key[thirdNote],newOctave]);
	chords.push(chord);
	return chord;
}





