'use strict';

const {
	getBaseUrl
} = require('../base/gitlab');

module.exports.mapRemoteToUrl = (remoteUrlData, { pullRequestId }) => {

	const baseUrl = getBaseUrl(remoteUrlData);

	if(!pullRequestId)
		return `${baseUrl}/-/merge_requests`;

	return `${baseUrl}/-/merge_requests/${pullRequestId}`;
};
