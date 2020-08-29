'use strict';

const github = require('./hostname/github');
const gitlab = require('./hostname/gitlab');
const bitbucket = require('./hostname/bitbucket');
const codecommit = require('./hostname/codecommit');

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
