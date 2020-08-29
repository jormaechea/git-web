'use strict';

module.exports.mapRemoteToUrl = remoteUrlData => {
	return `https://gitlab.com${remoteUrlData.pathname.replace(/\.git$/, '')}`;
};
