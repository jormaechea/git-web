'use strict';

module.exports.mapRemoteToUrl = remoteUrlData => {
	return `https://github.com${remoteUrlData.pathname.replace(/\.git$/, '')}`;
};
