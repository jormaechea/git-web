'use strict';

module.exports = require('yargs')
	.option('remote', {
		alias: 'r',
		type: 'string',
		description: 'The name of the remot you want to use.',
		default: 'origin'
	})
	.help();
