'use strict';

module.exports.mapRemoteToUrl = (remoteUrlData, commit) => {
	const baseUrl = `https://bitbucket.org${remoteUrlData.pathname.replace(/\.git$/, '')}`;

	if(!commit)
		return baseUrl;

	return `${baseUrl}/commits/${typeof commit === 'string' ? commit : ''}`;
};
