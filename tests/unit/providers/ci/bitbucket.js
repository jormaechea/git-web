'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { bitbucket } = require('../../../../lib/providers/ci');

const { bitbucketRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('CI', () => {
		describe('Bitbucket', () => {

			it('Should return the CI list url', () => {
				bitbucketRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(bitbucket.mapRemoteToUrl(remoteUrlData, {}), 'https://bitbucket.org/my-workspace/my-repo/addon/pipelines/home#!/');
				});
			});

			it('Should return the CI execution url', () => {
				bitbucketRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(bitbucket.mapRemoteToUrl(remoteUrlData, {
						executionId: '455'
					}), 'https://bitbucket.org/my-workspace/my-repo/addon/pipelines/home#!/results/455');
				});
			});

		});
	});
});
