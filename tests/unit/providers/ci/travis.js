'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { travis } = require('../../../../lib/providers/ci');

const { githubRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('CI', () => {
		describe('Travis', () => {

			it('Should return the CI list url', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(travis.mapRemoteToUrl(remoteUrlData, {}), 'https://travis-ci.org/my-username/my-repo');
				});
			});

			it('Should return the CI execution url', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(travis.mapRemoteToUrl(remoteUrlData, {
						executionId: '455'
					}), 'https://travis-ci.org/my-username/my-repo/builds/455');
				});
			});

		});
	});
});
