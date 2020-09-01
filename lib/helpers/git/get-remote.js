'use strict';

const childProcess = require('child_process');

module.exports = remoteName => {

	return new Promise((resolve, reject) => {

		const command = childProcess.spawn('git', ['remote', 'get-url', remoteName]);

		let remoteUrl = '';
		let errorData = '';

		command.stdout.on('data', data => {
			remoteUrl += data.toString('utf8');
		});

		command.stderr.on('data', data => {
			errorData += data.toString('utf8');
		});

		command.on('close', code => {
			if(code !== 0)
				return reject(new Error(errorData));

			resolve(remoteUrl);
		});

	});
};
