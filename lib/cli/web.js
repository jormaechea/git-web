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
	.help();

const isInWorkingDir = require('../helpers/git/is-in-working-dir');
const getRemote = require('../helpers/git/get-remote');
const remoteToUrl = require('../helpers/git/remote-to-url');

(async () => {

	if(!await isInWorkingDir()) {
		log('Not in a git repository!');
		process.exit(1);
	}

	const remote = await getRemote(argv.remote);

	const repositoryBaseUrl = remoteToUrl(remote);

	log(`Opening repository in the browser: ${repositoryBaseUrl}`);
	open(repositoryBaseUrl);
})();
