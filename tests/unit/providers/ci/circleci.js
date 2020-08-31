'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { circleci } = require('../../../../lib/providers/ci');

const { githubRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('CI', () => {
		describe('CircleCI', () => {

			it('Should return the CI list url', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(circleci.mapRemoteToUrl(remoteUrlData, {}), 'https://app.circleci.com/pipelines/github/my-username/my-repo');
				});
			});

			it('Should return the CI execution url', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(circleci.mapRemoteToUrl(remoteUrlData, {
						executionId: '455'
					}), 'https://app.circleci.com/pipelines/github/my-username/my-repo/455');
				});
			});

		});
	});
});
