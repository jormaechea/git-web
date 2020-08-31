'use strict';

const {
	getBaseUrl
} = require('../base/github');

module.exports.mapRemoteToUrl = (remoteUrlData, { pullRequestId }) => {

	const baseUrl = getBaseUrl(remoteUrlData);

	if(!pullRequestId)
		return `${baseUrl}/pulls`;

	return `${baseUrl}/pull/${pullRequestId}`;
};
