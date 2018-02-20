const
	file = require('./helpers/file_helper'),
	song = require('./helpers/song_helper');

var win = Ti.UI.createWindow({
	layout: 'vertical',
	backgroundColor: '#349CC2'
});

var lab = Ti.UI.createLabel({
	text: 'Songs',
	color: '#EDA60F',
	top: '5%'
});

var tableView = Ti.UI.createTableView({
	top: '2%',
	height: '60%',
	backgroundColor: '#349CC2',
	data: file.getSongs()
});

tableView.addEventListener('click', function(e) {
	var lyrics = file.readFile(e.rowData.id);

	song.display(lyrics)
});

win.add(lab);
win.add(tableView);

win.open();