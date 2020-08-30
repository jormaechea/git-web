'use strict';

const {
	getBaseUrl
} = require('../base/bitbucket');

module.exports.mapRemoteToUrl = (remoteUrlData, { source, destination }) => {

	const baseUrl = getBaseUrl(remoteUrlData);

	return `${baseUrl}/pull-requests/new?source=${source}&dest=${destination}`;
};
