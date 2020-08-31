'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { gitlab } = require('../../../../lib/providers/web');

const { gitlabRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Web', () => {
		describe('Gitlab', () => {

			it('Should return the repository home', () => {
				gitlabRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(gitlab.mapRemoteToUrl(remoteUrlData, {}), 'https://gitlab.com/my-project/my-repo');
				});
			});

			it('Should return the commits list url', () => {
				gitlabRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(gitlab.mapRemoteToUrl(remoteUrlData, {
						commit: true
					}), 'https://gitlab.com/my-project/my-repo/-/commits');
				});
			});

			it('Should return the commits list url', () => {
				gitlabRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(gitlab.mapRemoteToUrl(remoteUrlData, {
						commit: 'fe686ca'
					}), 'https://gitlab.com/my-project/my-repo/-/commit/fe686ca');
				});
			});

		});
	});
});
