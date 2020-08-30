'use strict';

const {
	getBaseUrl
} = require('../base/github');

module.exports.mapRemoteToUrl = remoteUrlData => {

	const baseUrl = getBaseUrl(remoteUrlData);

	return `${baseUrl}/fork`;
};
