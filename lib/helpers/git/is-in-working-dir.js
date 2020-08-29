'use strict';

const { spawn } = require('child_process');

module.exports = () => {

	return new Promise(resolve => {

		const command = spawn('git', ['rev-parse', '--show-toplevel']);

		command.on('close', code => {
			resolve(code === 0);
		});

	});
};
