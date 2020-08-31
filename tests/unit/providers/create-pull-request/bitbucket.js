'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { bitbucket } = require('../../../../lib/providers/create-pull-request');

const { bitbucketRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Create Pull Request', () => {
		describe('Bitbucket', () => {

			it('Should return the new pull request url', () => {
				bitbucketRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(
						bitbucket.mapRemoteToUrl(remoteUrlData, {
							source: 'my-branch',
							destination: 'master'
						}),
						'https://bitbucket.org/my-workspace/my-repo/pull-requests/new?source=my-branch&dest=master'
					);
				});
			});

		});
	});
});
