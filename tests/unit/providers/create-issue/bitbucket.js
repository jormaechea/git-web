'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { bitbucket } = require('../../../../lib/providers/create-issue');

const { bitbucketRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Create Issue', () => {
		describe('Bitbucket', () => {

			it('Should return the new issue url', () => {
				bitbucketRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(bitbucket.mapRemoteToUrl(remoteUrlData), 'https://bitbucket.org/my-workspace/my-repo/issues/new');
				});
			});

		});
	});
});
