'use strict';

const gitUp = require('git-up');

const hostnameMapper = require('../../providers/hostname');

module.exports = (providers, remote, extraParams) => {

	const urlData = gitUp(remote.replace('\n', ''), false);

	// If only one provider is recevied, just use it
	if(providers.mapRemoteToUrl)
		return providers.mapRemoteToUrl(urlData, extraParams);

	const providerName = hostnameMapper(urlData.resource);

	if(!providers[providerName])
		throw new Error(`Provider ${providerName} has no support for this operation`);

	return providers[providerName].mapRemoteToUrl(urlData, extraParams);
};
