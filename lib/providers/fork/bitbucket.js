'use strict';

const {
	getBaseUrl
} = require('../base/bitbucket');

module.exports.mapRemoteToUrl = remoteUrlData => {

	const baseUrl = getBaseUrl(remoteUrlData);

	return `${baseUrl}/fork`;
};
