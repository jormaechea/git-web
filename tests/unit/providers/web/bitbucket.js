'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { bitbucket } = require('../../../../lib/providers/web');

const { bitbucketRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Web', () => {
		describe('Bitbucket', () => {

			it('Should return the repository home', () => {
				bitbucketRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(bitbucket.mapRemoteToUrl(remoteUrlData, {}), 'https://bitbucket.org/my-workspace/my-repo');
				});
			});

			it('Should return the commits list url', () => {
				bitbucketRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(bitbucket.mapRemoteToUrl(remoteUrlData, {
						commit: true
					}), 'https://bitbucket.org/my-workspace/my-repo/commits');
				});
			});

			it('Should return the commits list url', () => {
				bitbucketRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(bitbucket.mapRemoteToUrl(remoteUrlData, {
						commit: 'fe686ca'
					}), 'https://bitbucket.org/my-workspace/my-repo/commits/fe686ca');
				});
			});

		});
	});
});
