'use strict';

const {
	getBaseUrl
} = require('../base/gitlab');

module.exports.mapRemoteToUrl = remoteUrlData => {

	const baseUrl = getBaseUrl(remoteUrlData);

	return `${baseUrl}/-/issues/new`;
};
