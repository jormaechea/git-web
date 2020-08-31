'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { github } = require('../../../../lib/providers/web');

const { githubRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Web', () => {
		describe('Github', () => {

			it('Should return the repository home', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(github.mapRemoteToUrl(remoteUrlData, {}), 'https://github.com/my-username/my-repo');
				});
			});

			it('Should return the commits list url', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(github.mapRemoteToUrl(remoteUrlData, {
						commit: true
					}), 'https://github.com/my-username/my-repo/commits');
				});
			});

			it('Should return the commits list url', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(github.mapRemoteToUrl(remoteUrlData, {
						commit: 'fe686ca'
					}), 'https://github.com/my-username/my-repo/commit/fe686ca');
				});
			});

		});
	});
});
