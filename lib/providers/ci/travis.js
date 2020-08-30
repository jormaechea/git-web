'use strict';

const { getBaseUrl } = require('../base/travis');

const fileExists = require('../../helpers/fs/file-exists');

module.exports.isSetup = () => fileExists('.travis.yml');

module.exports.mapRemoteToUrl = (remoteUrlData, { executionId }) => {

	const baseUrl = getBaseUrl(remoteUrlData);

	if(!executionId)
		return baseUrl;

	return `${baseUrl}/builds/${executionId}`;
};
