'use strict';

const { getBaseUrl } = require('../base/github');

const fileExists = require('../../helpers/fs/file-exists');

const ciPath = '/actions';

module.exports.isSetup = () => fileExists('.github/workflows');

module.exports.mapRemoteToUrl = (remoteUrlData, { executionId }) => {

	const baseUrl = getBaseUrl(remoteUrlData);

	if(!executionId)
		return `${baseUrl}${ciPath}`;

	return `${baseUrl}${ciPath}/runs/${executionId}`;
};
