'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { gitlab } = require('../../../../lib/providers/fork');

const { gitlabRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Fork', () => {
		describe('Gitlab', () => {

			it('Should return the fork url', () => {
				gitlabRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(gitlab.mapRemoteToUrl(remoteUrlData), 'https://gitlab.com/my-project/my-repo/-/forks/new');
				});
			});

		});
	});
});
