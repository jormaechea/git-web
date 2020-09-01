'use strict';

const fs = require('fs');
const path = require('path');

const getRepositoryRootDir = require('../git/get-repository-root-dir');

module.exports = async filePath => {

	const rootDir = await getRepositoryRootDir.getRepositoryRootDir();

	return new Promise((resolve, reject) => {
		fs.access(path.resolve(rootDir, filePath), 'r', err => {
			if(err) {
				if(err.code !== 'ENOENT')
					return reject(err);

				return resolve(false);
			}

			return resolve(true);
		});
	});
};
