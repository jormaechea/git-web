#!/usr/bin/env node

'use strict';

const { argv } = require('./yargs-base')
	.option('execution-id', {
		alias: 'e',
		description: 'The ID if the execution you want to view. If this is not passed it will show you the executions list.'
	});

const { executeCommand } = require('./common');

const detectCiProvider = require('../helpers/ci/detect-ci-provider');

(async () => {

	const provider = await detectCiProvider();

	await executeCommand(argv, provider);

})();
