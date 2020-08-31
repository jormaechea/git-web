'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { gitlab } = require('../../../../lib/providers/create-issue');

const { gitlabRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Create Issue', () => {
		describe('Gitlab', () => {

			it('Should return the new issue url', () => {
				gitlabRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(gitlab.mapRemoteToUrl(remoteUrlData), 'https://gitlab.com/my-project/my-repo/-/issues/new');
				});
			});

		});
	});
});
