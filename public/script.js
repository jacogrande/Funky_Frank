function startDaJams(){
	var part_pos=0;
	var pattern_pos=0;
	var part_inc=0;
	var pattern_inc=0;
	var lastNote;
	var shouldIPlay=true;
	var notes;
	var lastNote=[[]];
	var measureInc=0;
	currentSection=0;
	var currentGroove=0;
	var play = setInterval(function(){
		if(paused%2==0){
			if(measureInc==0){
				notes = findChord(parts[part_pos][part_inc],pattern[pattern_pos][1]);
				if(notes[0][0]==lastNote[0][0] && alwaysPlay==false){
					shouldIPlay=false;
				}
				firstNote(notes[0][0]);
				lastNote=notes;
				playNote(notes[0][0],1,"Bass.wav",0.25);
				playNote("C",1,"Drums.wav",0.5);
				playNote("C#",1,"Drums.wav",0.5);
				for(i=0;i<notes.length;i++){
					if(shouldIPlay){
						playNote(notes[i][0],notes[i][1],"Piano.wav",pattern[pattern_pos][2]);
					}
				}
				part_inc++;
				if(part_inc==parts[part_pos].length){
					part_inc=0;
					pattern_inc++;
					if(pattern_inc==pattern[part_pos][0]){
						pattern_inc=0;
						pattern_pos++;
						currentSection++;
						part_pos++;
						if(pattern_pos==pattern.length){
							pattern_pos=0;
							part_pos=0;
							currentSection++;
						}
					}
				}
				shouldIPlay=true;
			}

			else if(measureInc%2==0){
				playNote(notes[0][0],1,"Bass.wav",0.25);
			}

			if(measureInc==1){
				playNote("C",1,"Drums.wav",0.5);
			}
			else if(measureInc==2){
				playNote("C",1,"Drums.wav",0.5);
				playNote("D",1,"Drums.wav",0.5);
			}
			else if(measureInc==3){
				playNote("C",1,"Drums.wav",0.5);
			}



			measureInc++;

			for(i=0;i<grooves[currentGroove][0].length;i++){
				if(measureInc==grooves[currentGroove][0][i]){
					playNote("C",1,"Drums.wav",0.5);
				}
			}

			if(measureInc==poly){
				measureInc=0;
			}
		}
	},bpm);
}