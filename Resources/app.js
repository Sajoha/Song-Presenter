const
	file = require('./helpers/file_helper'),
	song = require('./helpers/song_helper');

var win = Ti.UI.createWindow({
	layout: 'vertical',
	backgroundColor: '#349CC2'
});

// Title for the page
var title = Ti.UI.createLabel({
	text: 'Songs',
	color: '#EDA60F',
	top: '5%',
	font: {
		fontSize: 40
	}
});

// The table view containing the list of songs
var songList = Ti.UI.createTableView({
	top: '2%',
	height: '60%',
	backgroundColor: '#349CC2',
	data: file.getSongs()
});

songList.addEventListener('click', function(e) {
	var lyrics = file.readFile(e.rowData.id);

	song.display(lyrics)
});

win.add(title);
win.add(songList);

win.open();