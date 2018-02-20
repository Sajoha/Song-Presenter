'use strict';

class song_helper {
	static display(lyrics) {
		var win = Ti.UI.createWindow({
			layout: 'vertical',
			backgroundColor: '#349CC2'
		});

		console.log(lyrics);

		var lab = Ti.UI.createLabel({
			text: lyrics,
			color: '#EDA60F',
			top: '5%'
		});

		win.add(lab);

		win.open();
	}
}

module.exports = song_helper;