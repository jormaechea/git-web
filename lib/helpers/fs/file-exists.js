'use strict';

const fs = require('fs');
const path = require('path');

const getRepositoryRootDir = require('../git/get-repository-root-dir');

module.exports = async filePath => {

	const rootDir = await getRepositoryRootDir();

	return new Promise(resolve => {
		fs.access(path.resolve(rootDir, filePath), 'r', err => resolve(!err));
	});
};
