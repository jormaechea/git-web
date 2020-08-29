'use strict';

const gitUp = require('git-up');

const hostnameMapper = require('../../providers/hostname-mapper');

const webProviders = require('../../providers/web');

module.exports = remote => {

	const urlData = gitUp(remote);

	const providerName = hostnameMapper(urlData.resource);

	if(!webProviders[providerName])
		throw new Error(`Provider ${providerName} has no support for Web operations`);

	return webProviders[providerName].mapRemoteToUrl(urlData);
};
