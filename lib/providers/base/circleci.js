'use strict';

module.exports.getBaseUrl = remoteUrlData => {
	return `https://app.circleci.com/pipelines/github${remoteUrlData.pathname.replace(/\.git$/, '')}`;
};
