exports.readFile = function(file) {
	// Find the file
	var file = Ti.Filesystem.getFile(file);

	// Read from that file
	var blob = file.read();

	// Return that value
	return(blob.text);
}