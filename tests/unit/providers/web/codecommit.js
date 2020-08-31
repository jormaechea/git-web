'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { codecommit } = require('../../../../lib/providers/web');

const { codecommitRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Web', () => {
		describe('CodeCommit', () => {

			it('Should return the repository home', () => {
				codecommitRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(
						codecommit.mapRemoteToUrl(remoteUrlData, {}),
						'https://console.aws.amazon.com/codesuite/codecommit/repositories/my-repo.git/browse?region=us-east-2'
					);
				});
			});

			it('Should return the commits list url', () => {
				codecommitRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(codecommit.mapRemoteToUrl(remoteUrlData, {
						commit: true
					}), 'https://console.aws.amazon.com/codesuite/codecommit/repositories/my-repo.git/commits?region=us-east-2');
				});
			});

			it('Should return the commits list url', () => {
				codecommitRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(codecommit.mapRemoteToUrl(remoteUrlData, {
						commit: 'fe686ca'
					}), 'https://console.aws.amazon.com/codesuite/codecommit/repositories/my-repo.git/commit/fe686ca?region=us-east-2');
				});
			});

		});
	});
});
