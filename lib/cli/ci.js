#!/usr/bin/env node

'use strict';

const { log } = console;

const open = require('open');

const { argv } = require('yargs')
	.option('remote', {
		alias: 'r',
		type: 'string',
		description: 'The name of the remot you want to use.',
		default: 'origin'
	})
	.option('execution-id', {
		alias: 'e',
		description: 'The ID if the execution you want to view. If this is not passed it will show you the executions list.'
	})
	.help();

const isInWorkingDir = require('../helpers/git/is-in-working-dir');
const getRemote = require('../helpers/git/get-remote');
const remoteToUrl = require('../helpers/git/remote-to-url');

const detectCiProvider = require('../helpers/ci/detect-ci-provider');

(async () => {

	if(!await isInWorkingDir()) {
		log('Not in a git repository!');
		process.exit(1);
	}

	const { executionId } = argv;

	const remote = await getRemote(argv.remote);

	const provider = await detectCiProvider();
	const repositoryUrl = remoteToUrl(provider, remote, { executionId });

	log(`Opening repository in the browser: ${repositoryUrl}`);
	open(repositoryUrl);

})();
