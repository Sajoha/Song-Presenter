const
	reader = require('ReadFile.js');

var win = Ti.UI.createWindow({
	layout: 'vertical',
	backgroundColor: '#349CC2'
});

var lab = Ti.UI.createLabel({
	text: 'Songs',
	color: '#EDA60F',
	top: '5%'
});

var data = [{
	title: '1',
	color: '#EDA60F'
}, {
	title: '2',
	color: '#EDA60F'
}, {
	title: '3',
	color: '#EDA60F'
}]

var list = Ti.UI.createTableView({
	top: '2%',
	height: '60%',
	backgroundColor: '#349CC2',
	data: data
});

var button = Ti.UI.createButton({
	title: 'Show',
	top: '1%'
});

button.addEventListener('click', function(e) {
	var lyrics = reader.readFile('assets/files/song.txt');

	var split = lyrics.split('\n\n');

	var view = Ti.UI.createView({

	});

	console.log(split);
});

win.add(lab);
win.add(list);
win.add(button);

win.open();