#!/usr/bin/env node

'use strict';

const { argv } = require('./yargs-base')
	.option('pull-request-id', {
		alias: 'p',
		description: 'Open an specific pull request.'
	});

const { executeCommand } = require('./common');

const prProviders = require('../providers/pull-request');

executeCommand(argv, prProviders);
