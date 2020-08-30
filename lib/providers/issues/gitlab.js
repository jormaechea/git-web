'use strict';

const {
	getBaseUrl
} = require('../base/gitlab');

module.exports.mapRemoteToUrl = (remoteUrlData, { issueId }) => {

	const baseUrl = getBaseUrl(remoteUrlData);

	if(!issueId)
		return baseUrl;

	if(issueId === true)
		return `${baseUrl}/issues`;

	return `${baseUrl}/issues/${issueId}`;
};
