'use strict';

const github = require('./github');
const gitlab = require('./gitlab');
const bitbucket = require('./bitbucket');
const codecommit = require('./codecommit');

const providersHostnames = {
	github,
	gitlab,
	bitbucket
};

const providersMap = Object.entries(providersHostnames).reduce((map, [provider, hostnames]) => {
	[].concat(hostnames).forEach(hostname => {
		map[hostname] = provider;
	});
	return map;
}, {});

module.exports = hostname => {

	if(providersMap[hostname])
		return providersMap[hostname];

	// Codecommit is a regexp due to AWS Regions in the hostname
	if(hostname.match(codecommit))
		return 'codecommit';

	throw new Error(`Hostname ${hostname} could not be identified`);
};
