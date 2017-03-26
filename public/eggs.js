// Inherited Components:
// key = the key the jam is in
// playNote(note,octave,instrument.wav,volume,duration[optional])
// the first note is C1, the last is B3
// allNotes = every note


function setup(){
	bpm=document.getElementById("BPM_IN").value;
	// Check the value of the input field
	if(bpm=="sup hoss"){
		// make a new audio element (hoss.mp3)
		var audio=new Audio("hoss.mp3");
		// start the audio element
		audio.play();
		// change the value of what snoop says
		document.getElementById("da_words").innerHTML="sup hoss...";
	}
	else if(bpm=="garbage"){
		for(i=0;i<allNotes.length;i++){
			playNote(allNotes[i],1,"Piano.wav",1);
		}
	}
	else{
		bpm=60000/bpm;
		startDaJams();
	}
}

