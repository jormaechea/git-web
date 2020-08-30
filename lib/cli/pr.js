#!/usr/bin/env node

'use strict';

const { log } = console;

const open = require('open');

const getCurrentBranch = require('../helpers/git/get-current-branch');

const yargs = require('./yargs-base');

const isInWorkingDir = require('../helpers/git/is-in-working-dir');
const getRemote = require('../helpers/git/get-remote');
const remoteToUrl = require('../helpers/git/remote-to-url');

const createPrProviders = require('../providers/create-pull-request');

(async () => {

	const { argv } = yargs
		.option('source', {
			alias: 's',
			description: 'The source branch for the PR.',
			default: await getCurrentBranch()
		})
		.option('destination', {
			alias: 'd',
			description: 'The destination branch for the PR.',
			default: 'master'
		});

	if(!await isInWorkingDir()) {
		log('Not in a git repository!');
		process.exit(1);
	}

	const { source, destination } = argv;

	const remote = await getRemote(argv.remote);

	const repositoryUrl = remoteToUrl(createPrProviders, remote, { source, destination });

	log(`Opening repository in the browser: ${repositoryUrl}`);
	open(repositoryUrl);

})();
