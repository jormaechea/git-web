'use strict';

module.exports.mapRemoteToUrl = (remoteUrlData, commit) => {

	const baseUrl = `https://gitlab.com${remoteUrlData.pathname.replace(/\.git$/, '')}`;

	if(!commit)
		return baseUrl;

	return `${baseUrl}/commit/${typeof commit === 'string' ? commit : ''}`;
};
