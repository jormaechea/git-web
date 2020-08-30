#!/usr/bin/env node

'use strict';

const { log } = console;

const open = require('open');

const { argv } = require('./yargs-base')
	.option('issue-id', {
		alias: 'i',
		description: 'Pass without value to open issues list or with an issue ID to open it.'
	});

const isInWorkingDir = require('../helpers/git/is-in-working-dir');
const getRemote = require('../helpers/git/get-remote');
const remoteToUrl = require('../helpers/git/remote-to-url');

const issuesProviders = require('../providers/issues');

(async () => {

	if(!await isInWorkingDir()) {
		log('Not in a git repository!');
		process.exit(1);
	}

	const { issueId } = argv;

	const remote = await getRemote(argv.remote);

	const repositoryUrl = remoteToUrl(issuesProviders, remote, { issueId });

	log(`Opening repository in the browser: ${repositoryUrl}`);
	open(repositoryUrl);

})();
