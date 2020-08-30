'use strict';

module.exports.getBaseUrl = remoteUrlData => {
	return `https://bitbucket.org${remoteUrlData.pathname.replace(/\.git$/, '')}`;
};
