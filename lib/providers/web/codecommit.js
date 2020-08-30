'use strict';

const {
	getBaseUrl,
	getRegion
} = require('../base/codecommit');

module.exports.mapRemoteToUrl = (remoteUrlData, commit) => {

	const baseUrl = getBaseUrl(remoteUrlData);
	const region = getRegion(remoteUrlData);

	if(!commit)
		return `${baseUrl}/browse?region=${region}`;

	if(commit === true)
		return `${baseUrl}/commits?region=${region}`;

	return `${baseUrl}/commit/${commit}?region=${region}`;
};
