'use strict';

const github = require('./github');
const gitlab = require('./gitlab');
const bitbucket = require('./bitbucket');
const codecommit = require('./codecommit');

const providersMap = {
	[github]: 'github',
	[gitlab]: 'gitlab',
	[bitbucket]: 'bitbucket'
};

module.exports = hostname => {

	if(providersMap[hostname])
		return providersMap[hostname];

	// Codecommit is a regexp due to AWS Regions in the hostname
	if(hostname.match(codecommit))
		return 'codecommit';

	throw new Error(`Hostname ${hostname} could not be identified`);
};
