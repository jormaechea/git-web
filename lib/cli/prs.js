#!/usr/bin/env node

'use strict';

const { argv } = require('./yargs-base')
	.option('pull-request-id', {
		alias: 'p',
		description: 'Open an specific pull request.'
	});

const { executeCommand } = require('./common');

const pullRequestsProviders = require('../providers/pull-requests');

executeCommand(argv, pullRequestsProviders);
