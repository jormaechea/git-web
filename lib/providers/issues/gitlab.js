'use strict';

const {
	getBaseUrl
} = require('../base/gitlab');

module.exports.mapRemoteToUrl = (remoteUrlData, { issueId }) => {

	const baseUrl = getBaseUrl(remoteUrlData);

	if(!issueId)
		return `${baseUrl}/-/issues`;

	return `${baseUrl}/-/issues/${issueId}`;
};
