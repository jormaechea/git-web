'use strict';

module.exports.getBaseUrl = remoteUrlData => {
	return `https://gitlab.com${remoteUrlData.pathname.replace(/\.git$/, '')}`;
};
