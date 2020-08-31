'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { gitlab } = require('../../../../lib/providers/ci');

const { gitlabRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('CI', () => {
		describe('Gitlab', () => {

			it('Should return the CI list url', () => {
				gitlabRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(gitlab.mapRemoteToUrl(remoteUrlData, {}), 'https://gitlab.com/my-project/my-repo/pipelines');
				});
			});

			it('Should return the CI execution url', () => {
				gitlabRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(gitlab.mapRemoteToUrl(remoteUrlData, {
						executionId: '455'
					}), 'https://gitlab.com/my-project/my-repo/pipelines/455');
				});
			});

		});
	});
});
