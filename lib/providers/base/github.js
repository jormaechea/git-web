'use strict';

module.exports.getBaseUrl = remoteUrlData => {
	return `https://github.com${remoteUrlData.pathname.replace(/\.git$/, '')}`;
};
