const fs = require('fs');
const { Transform } = require('stream');

const inputFile = './inputs/input.txt';
const outputFile = './outputs/output.txt';

const readableStream = fs.createReadStream(inputFile);
const writeableStream = fs.createWriteStream(outputFile);

readableStream.on('end', () => {
	console.log('successfully transformed the data!');
});

writeableStream.on('finish', () => {
	console.log('Data Processing Completed!');
});

const transformStream = new Transform({
	transform(chunk, encoding, callback) {
		const data = chunk.toString();
		const words = data.split(' ');

		const transformedWords = words.map((word) => {
			return word.split('').reverse().join('');
		});

		const transformedData = transformedWords.join(' ');

		this.push(transformedData);
		callback();
	},
});

readableStream.pipe(transformStream).pipe(writeableStream);
