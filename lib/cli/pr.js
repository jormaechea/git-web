#!/usr/bin/env node

'use strict';

const yargs = require('./yargs-base');

const { executeCommand } = require('./common');

const createPrProviders = require('../providers/create-pull-request');

const getCurrentBranch = require('../helpers/git/get-current-branch');

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

	await executeCommand(argv, createPrProviders);

})();
