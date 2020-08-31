'use strict';

const gitUp = require('git-up');

const hostnameMapper = require('../../providers/hostname');

module.exports = (providers, remote, commit) => {

	const urlData = gitUp(remote);

	const providerName = hostnameMapper(urlData.resource);

	if(!providers[providerName])
		throw new Error(`Provider ${providerName} has no support for this operation`);

	return providers[providerName].mapRemoteToUrl(urlData, commit);
};
