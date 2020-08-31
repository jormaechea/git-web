'use strict';

const { log } = console;

const open = require('open');

const isInWorkingDir = require('../helpers/git/is-in-working-dir');
const getRemote = require('../helpers/git/get-remote');
const remoteToUrl = require('../helpers/git/remote-to-url');

const checkWorkingTree = async () => {
	if(!await isInWorkingDir()) {
		log('Not in a git repository!');
		process.exit(1);
	}
};

module.exports.executeCommand = async (argv, providers) => {

	const {
		remote: remoteName,
		...extraParams
	} = argv;

	await checkWorkingTree();

	const remote = await getRemote(remoteName);

	const repositoryUrl = remoteToUrl(providers, remote, extraParams);

	log(`Opening repository in the browser: ${repositoryUrl}`);
	open(repositoryUrl);

};
