'use strict';

const { getBaseUrl } = require('../base/circleci');

const fileExists = require('../../helpers/fs/file-exists');

module.exports.isSetup = () => fileExists('.circleci/config.yml');

module.exports.mapRemoteToUrl = (remoteUrlData, { executionId }) => {

	const baseUrl = getBaseUrl(remoteUrlData);

	if(!executionId)
		return baseUrl;

	return `${baseUrl}/${executionId}`;
};
