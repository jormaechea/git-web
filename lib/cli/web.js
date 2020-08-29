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
	.option('commit', {
		alias: 'c',
		description: 'Pass without value to open commits list or with a commit hash to open it.'
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

	const { commit } = argv;

	const remote = await getRemote(argv.remote);

	const repositoryUrl = remoteToUrl(remote, commit);

	log(`Opening repository in the browser: ${repositoryUrl}`);
	open(repositoryUrl);

})();
