#!/usr/bin/env node

'use strict';

const { log } = console;

const open = require('open');

const { argv } = require('./yargs-base')
	.option('--pull-request-id', {
		alias: 'p',
		description: 'Open an specific pull request.'
	});

const isInWorkingDir = require('../helpers/git/is-in-working-dir');
const getRemote = require('../helpers/git/get-remote');
const remoteToUrl = require('../helpers/git/remote-to-url');

const prProviders = require('../providers/pull-request');

(async () => {

	if(!await isInWorkingDir()) {
		log('Not in a git repository!');
		process.exit(1);
	}

	const { pullRequestId } = argv;

	const remote = await getRemote(argv.remote);

	const repositoryUrl = remoteToUrl(prProviders, remote, { pullRequestId });

	log(`Opening repository in the browser: ${repositoryUrl}`);
	open(repositoryUrl);

})();
