'use strict';

const {
	getBaseUrl
} = require('../base/github');

module.exports.mapRemoteToUrl = (remoteUrlData, { commit }) => {

	const baseUrl = getBaseUrl(remoteUrlData);

	if(!commit)
		return baseUrl;

	if(commit === true)
		return `${baseUrl}/commits`;

	return `${baseUrl}/commit/${commit}`;
};
