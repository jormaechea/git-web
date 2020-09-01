'use strict';

const childProcess = require('child_process');

module.exports.getRepositoryRootDir = () => {

	return new Promise((resolve, reject) => {

		const command = childProcess.spawn('git', ['rev-parse', '--show-toplevel']);

		let rootPath = '';
		let errorData = '';

		command.stdout.on('data', data => {
			rootPath += data.toString('utf8');
		});

		command.stderr.on('data', data => {
			errorData += data.toString('utf8');
		});

		command.on('close', code => {
			if(code !== 0)
				return reject(new Error(errorData));

			resolve(rootPath.replace(/\n/, ''));
		});
	});
};
