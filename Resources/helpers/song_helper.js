'use strict';

class song_helper {
	/***************************************************************************
	 * Create a new window for displaying a song, and present the first verse,
	 * the verses can be moved forwards and backwards with the on screen
	 * controls to move through the song.
	 **************************************************************************/
	static display(lyrics) {

		let
			count = 0,
			verses = lyrics.split('\n\n');

		var win = Ti.UI.createWindow({
			backgroundColor: 'black'
		});

		// The label that will contain the verse
		var songVerse = Ti.UI.createLabel({
			text: verses[count],
			color: '#EDA60F',
			top: '2%',
			height: '93%'
		});

		// A holder for the navigation controls
		var controls = Ti.UI.createView({
			bottom: '0%',
			height: '5%',
			backgroundColor: '#349CC2'
		});

		// The button to move to the next verse
		var next = Ti.UI.createButton({
			title: '>',
			left: '10%'
		});

		next.addEventListener('click', function(e) {
			if(count < (verses.length - 1)) {
				count = count + 1;

				songVerse.setText(verses[count]);
			}
		});

		// The button to move back to the last verse
		var back = Ti.UI.createButton({
			title: '<',
			left: '5%'
		});

		back.addEventListener('click', function(e) {
			if(count > 0) {
				count = count - 1;

				songVerse.setText(verses[count]);
			}
		});

		// A button to close the song viewer, and return to the song list
		var close = Ti.UI.createButton({
			title: 'Close',
			right: '5%'
		});

		close.addEventListener('click', function(e) {
			win.close();
		});

		win.add(songVerse);
		win.add(controls);

		controls.add(back);
		controls.add(next);
		controls.add(close);

		win.open();
	}
}

module.exports = song_helper;