'use strict';

const ciProviders = require('../../providers/ci');

module.exports = async () => {

	let ciProviderName;
	let i = 0;

	const providerNames = Object.keys(ciProviders);

	while(!ciProviderName && i < providerNames.length) {

		const providerName = providerNames[i];
		const provider = ciProviders[providerName];
		const isSetup = await provider.isSetup();

		if(isSetup) {
			ciProviderName = providerName;
			break;
		}

		i++;
	}

	if(!ciProviderName)
		throw new Error('No CI/CD provider found');

	return ciProviders[ciProviderName];
};
