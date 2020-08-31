'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { github } = require('../../../../lib/providers/issues');

const { githubRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Issues', () => {
		describe('Github', () => {

			it('Should return the issues list url', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(github.mapRemoteToUrl(remoteUrlData, {}), 'https://github.com/my-username/my-repo/issues');
				});
			});

			it('Should return the issue detail url', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(github.mapRemoteToUrl(remoteUrlData, {
						issueId: '455'
					}), 'https://github.com/my-username/my-repo/issues/455');
				});
			});

		});
	});
});
