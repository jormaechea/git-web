'use strict';

const {
	getBaseUrl,
	getRegion
} = require('../base/codecommit');

const branchtoRef = branch => `/refs/heads/${branch}`;

module.exports.mapRemoteToUrl = (remoteUrlData, { source, destination }) => {

	const baseUrl = getBaseUrl(remoteUrlData);
	const region = getRegion(remoteUrlData);

	const sourceRef = branchtoRef(source);
	const destinationRef = branchtoRef(destination);

	return `${baseUrl}/pull-requests/new${destinationRef}/...${sourceRef}?region=${region}`;
};
