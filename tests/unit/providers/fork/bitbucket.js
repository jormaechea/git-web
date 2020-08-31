'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { bitbucket } = require('../../../../lib/providers/fork');

const { bitbucketRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Fork', () => {
		describe('Bitbucket', () => {

			it('Should return the fork url', () => {
				bitbucketRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(bitbucket.mapRemoteToUrl(remoteUrlData), 'https://bitbucket.org/my-workspace/my-repo/fork');
				});
			});

		});
	});
});
