'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { github } = require('../../../../lib/providers/ci');

const { githubRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('CI', () => {
		describe('Github', () => {

			it('Should return the CI list url', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(github.mapRemoteToUrl(remoteUrlData, {}), 'https://github.com/my-username/my-repo/actions');
				});
			});

			it('Should return the CI execution url', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(github.mapRemoteToUrl(remoteUrlData, {
						executionId: '455'
					}), 'https://github.com/my-username/my-repo/actions/runs/455');
				});
			});

		});
	});
});
