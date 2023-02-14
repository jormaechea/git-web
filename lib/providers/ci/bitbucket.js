'use strict';

const { getBaseUrl } = require('../base/bitbucket');

const fileExists = require('../../helpers/fs/file-exists');

const ciPath = '/pipelines';

module.exports.isSetup = () => fileExists('bitbucket-pipelines.yml');

module.exports.mapRemoteToUrl = (remoteUrlData, { executionId }) => {

	const baseUrl = getBaseUrl(remoteUrlData);

	if(!executionId)
		return `${baseUrl}${ciPath}`;

	return `${baseUrl}${ciPath}/results/${executionId}`;
};
