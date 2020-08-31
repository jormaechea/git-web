'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { github } = require('../../../../lib/providers/fork');

const { githubRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Fork', () => {
		describe('Github', () => {

			it('Should return the fork url', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(github.mapRemoteToUrl(remoteUrlData), 'https://github.com/my-username/my-repo/fork');
				});
			});

		});
	});
});
