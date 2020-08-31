'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { bitbucket } = require('../../../../lib/providers/pull-requests');

const { bitbucketRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Pull Requests', () => {
		describe('Bitbucket', () => {

			it('Should return the pull requests list url', () => {
				bitbucketRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(bitbucket.mapRemoteToUrl(remoteUrlData, {}), 'https://bitbucket.org/my-workspace/my-repo/pull-requests');
				});
			});

			it('Should return the issue detail url', () => {
				bitbucketRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(bitbucket.mapRemoteToUrl(remoteUrlData, {
						pullRequestId: '455'
					}), 'https://bitbucket.org/my-workspace/my-repo/pull-requests/455');
				});
			});

		});
	});
});
