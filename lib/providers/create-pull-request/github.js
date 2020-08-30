'use strict';

const {
	getBaseUrl
} = require('../base/github');

module.exports.mapRemoteToUrl = (remoteUrlData, { source, destination }) => {

	const baseUrl = getBaseUrl(remoteUrlData);

	return `${baseUrl}/compare/${destination}...${source}`;
};
