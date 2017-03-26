for d in ./Piano/*; do
	NEW="${d:12:3}"
	NEW=$(echo $NEW | tr -d 'K')
	NEW="$NEW.wav"
	mv $d $NEW
done