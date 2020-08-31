'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { codecommit } = require('../../../../lib/providers/create-pull-request');

const { codecommitRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Create Pull Request', () => {
		describe('CodeCommit', () => {

			it('Should return the new pull request url', () => {
				codecommitRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(
						codecommit.mapRemoteToUrl(remoteUrlData, {
							source: 'my-branch',
							destination: 'master'
						}),
						// eslint-disable-next-line max-len
						'https://console.aws.amazon.com/codesuite/codecommit/repositories/my-repo.git/pull-requests/new/refs/heads/master/.../refs/heads/my-branch?region=us-east-2'
					);
				});
			});

		});
	});
});
