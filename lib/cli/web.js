#!/usr/bin/env node

'use strict';

const { argv } = require('./yargs-base')
	.option('commit', {
		alias: 'c',
		description: 'Pass without value to open commits list or with a commit hash to open it.'
	});

const { executeCommand } = require('./common');

const webProviders = require('../providers/web');

executeCommand(argv, webProviders);
