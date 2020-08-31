'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { codecommit } = require('../../../../lib/providers/pull-requests');

const { codecommitRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Pull Requests', () => {
		describe('CodeCommit', () => {

			it('Should return the pull requests list url', () => {
				codecommitRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(
						codecommit.mapRemoteToUrl(remoteUrlData, {}),
						'https://console.aws.amazon.com/codesuite/codecommit/repositories/my-repo.git/pull-requests?region=us-east-2'
					);
				});
			});

			it('Should return the issue detail url', () => {
				codecommitRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(codecommit.mapRemoteToUrl(remoteUrlData, {
						pullRequestId: '455'
					}), 'https://console.aws.amazon.com/codesuite/codecommit/repositories/my-repo.git/pull-requests/455?region=us-east-2');
				});
			});

		});
	});
});
