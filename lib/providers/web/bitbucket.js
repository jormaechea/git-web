'use strict';

module.exports.mapRemoteToUrl = remoteUrlData => {
	return `https://bitbucket.org${remoteUrlData.pathname.replace(/\.git$/, '')}`;
};
