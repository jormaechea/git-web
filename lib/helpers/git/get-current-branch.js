'use strict';

const childProcess = require('child_process');

const currentBranchRegexp = /^\* .+$/m;

module.exports = () => {

	return new Promise((resolve, reject) => {

		const command = childProcess.spawn('git', ['branch']);

		let branches = '';
		let errorData = '';

		command.stdout.on('data', data => {
			branches += data.toString('utf8');
		});

		command.stderr.on('data', data => {
			errorData += data.toString('utf8');
		});

		command.on('close', code => {

			if(code !== 0)
				return reject(new Error(errorData));

			const matchedBranch = branches.match(currentBranchRegexp);
			if(!matchedBranch)
				return resolve(null);

			resolve(matchedBranch[0].replace('* ', ''));
		});
	});
};
