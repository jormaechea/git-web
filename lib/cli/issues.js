#!/usr/bin/env node

'use strict';

const { argv } = require('./yargs-base')
	.option('issue-id', {
		alias: 'i',
		description: 'Pass without value to open issues list or with an issue ID to open it.'
	});

const { executeCommand } = require('./common');

const issuesProviders = require('../providers/issues');

executeCommand(argv, issuesProviders);
