#!/usr/bin/env node

'use strict';

const { log } = console;

const open = require('open');

const { argv } = require('./yargs-base');

const isInWorkingDir = require('../helpers/git/is-in-working-dir');
const getRemote = require('../helpers/git/get-remote');
const remoteToUrl = require('../helpers/git/remote-to-url');

const forkProviders = require('../providers/fork');

(async () => {

	if(!await isInWorkingDir()) {
		log('Not in a git repository!');
		process.exit(1);
	}

	const remote = await getRemote(argv.remote);

	const repositoryUrl = remoteToUrl(forkProviders, remote);

	log(`Opening repository in the browser: ${repositoryUrl}`);
	open(repositoryUrl);

})();
