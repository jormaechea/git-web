'use strict';

const {
	getBaseUrl
} = require('../base/bitbucket');

module.exports.mapRemoteToUrl = (remoteUrlData, { issueId }) => {

	const baseUrl = getBaseUrl(remoteUrlData);

	if(!issueId)
		return `${baseUrl}/issues?status=new&status=open`;

	return `${baseUrl}/issues/${issueId}`;
};
