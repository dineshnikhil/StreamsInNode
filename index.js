const fs = require('fs');

const inputFile = './inputs/input.txt';
const outputFile = './outputs/output.txt';

const readableStream = fs.createReadStream(inputFile);
const writeableStream = fs.createWriteStream(outputFile);

readableStream.on('data', (chunk) => {
	writeableStream.write(chunk);
});

readableStream.on('end', () => {
	writeableStream.end();
	console.log('file Copy completed!');
});
