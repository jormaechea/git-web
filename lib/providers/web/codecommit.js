'use strict';

module.exports.mapRemoteToUrl = remoteUrlData => {
	return `https://${remoteUrlData.resource}${remoteUrlData.pathname.replace(/\.git$/, '')}`;
};
