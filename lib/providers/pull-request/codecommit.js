'use strict';

const {
	getBaseUrl,
	getRegion
} = require('../base/codecommit');

module.exports.mapRemoteToUrl = (remoteUrlData, { pullRequestId }) => {

	const baseUrl = getBaseUrl(remoteUrlData);
	const region = getRegion(remoteUrlData);

	if(!pullRequestId)
		return `${baseUrl}/pull-requests?region=${region}`;

	return `${baseUrl}/pull-requests/${pullRequestId}?region=${region}`;
};
