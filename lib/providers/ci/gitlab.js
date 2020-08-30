'use strict';

const { getBaseUrl } = require('../base/gitlab');

const fileExists = require('../../helpers/fs/file-exists');

const ciPath = '/pipelines';

module.exports.isSetup = () => fileExists('.gitlab-ci.yml');

module.exports.mapRemoteToUrl = (remoteUrlData, { executionId }) => {

	const baseUrl = getBaseUrl(remoteUrlData);

	if(!executionId)
		return `${baseUrl}${ciPath}`;

	return `${baseUrl}${ciPath}/${executionId}`;
};
