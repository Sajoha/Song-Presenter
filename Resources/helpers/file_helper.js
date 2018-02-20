'use strict';

class file_helper {
	/***************************************************************************
	 * Get the contents of a requested song file, and return it to the app.
	 **************************************************************************/
	static readFile(fileName) {
		// Find the file
		let filePath = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'assets', 'songs', fileName);

		// Read from that file
		let lyrics = filePath.read();

		// Return that value
		return lyrics.text;
	}

	/***************************************************************************
	 * Get the list of songs from the asset folder, these will then be displayed
	 * within a list view in the application.
	 **************************************************************************/
	static getSongs() {
		// Empty Container for list of songs
		let songs = [];
		// Get the object for the song directory
		let songDir = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'assets', 'songs');
		// Get a list of items with the songs directory
		let songList = songDir.getDirectoryListing();

		songList.forEach(song => {
			// Extract the name of the file before the file type
			let rawName = song.split('.')[0];
			// Format the string to look better in the table view
			let songName = rawName.replace(/_/g, ' ');

			songs.push({
				id: song,
				title: songName,
				color: '#EDA60F'
			});
		});

		return songs;
	}
}

module.exports = file_helper;