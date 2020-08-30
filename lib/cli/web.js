#!/usr/bin/env node

'use strict';

const { log } = console;

const open = require('open');

const { argv } = require('./yargs-base')
	.option('commit', {
		alias: 'c',
		description: 'Pass without value to open commits list or with a commit hash to open it.'
	});

const isInWorkingDir = require('../helpers/git/is-in-working-dir');
const getRemote = require('../helpers/git/get-remote');
const remoteToUrl = require('../helpers/git/remote-to-url');

const webProviders = require('../providers/web');

(async () => {

	if(!await isInWorkingDir()) {
		log('Not in a git repository!');
		process.exit(1);
	}

	const { commit } = argv;

	const remote = await getRemote(argv.remote);

	const repositoryUrl = remoteToUrl(webProviders, remote, { commit });

	log(`Opening repository in the browser: ${repositoryUrl}`);
	open(repositoryUrl);

})();
