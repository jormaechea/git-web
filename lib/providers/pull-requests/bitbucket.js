'use strict';

const {
	getBaseUrl
} = require('../base/bitbucket');

module.exports.mapRemoteToUrl = (remoteUrlData, { pullRequestId }) => {

	const baseUrl = getBaseUrl(remoteUrlData);

	if(!pullRequestId)
		return `${baseUrl}/pull-requests`;

	return `${baseUrl}/pull-requests/${pullRequestId}`;
};
