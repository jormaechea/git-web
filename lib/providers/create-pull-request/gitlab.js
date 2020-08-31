'use strict';

const {
	getBaseUrl
} = require('../base/gitlab');

module.exports.mapRemoteToUrl = (remoteUrlData, { source, destination }) => {

	const baseUrl = getBaseUrl(remoteUrlData);

	const sourceParam = encodeURI(`merge_request[source_branch]=${source}`);
	const destParam = encodeURI(`merge_request[target_branch]=${destination}`);

	return `${baseUrl}/-/merge_requests/new?${sourceParam}&${destParam}`;
};
