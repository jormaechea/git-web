'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { github } = require('../../../../lib/providers/pull-requests');

const { githubRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Pull Requests', () => {
		describe('Github', () => {

			it('Should return the pull requests list url', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(github.mapRemoteToUrl(remoteUrlData, {}), 'https://github.com/my-username/my-repo/pulls');
				});
			});

			it('Should return the pull request detail url', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(github.mapRemoteToUrl(remoteUrlData, {
						pullRequestId: '455'
					}), 'https://github.com/my-username/my-repo/pull/455');
				});
			});

		});
	});
});
