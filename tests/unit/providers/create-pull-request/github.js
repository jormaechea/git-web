'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { github } = require('../../../../lib/providers/create-pull-request');

const { githubRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Create Pull Request', () => {
		describe('Github', () => {

			it('Should return the new pull request url', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(
						github.mapRemoteToUrl(remoteUrlData, {
							source: 'my-branch',
							destination: 'master'
						}), 'https://github.com/my-username/my-repo/compare/master...my-branch'
					);
				});
			});

		});
	});
});
