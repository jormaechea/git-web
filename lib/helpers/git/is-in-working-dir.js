'use strict';

const childProcess = require('child_process');

module.exports = () => {

	return new Promise(resolve => {

		const command = childProcess.spawn('git', ['rev-parse', '--show-toplevel']);

		command.on('close', code => {
			resolve(code === 0);
		});

	});
};
