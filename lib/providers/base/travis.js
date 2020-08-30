'use strict';

module.exports.getBaseUrl = remoteUrlData => {
	return `https://travis-ci.org${remoteUrlData.pathname.replace(/\.git$/, '')}`;
};
