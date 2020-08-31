'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { github } = require('../../../../lib/providers/create-issue');

const { githubRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Create Issue', () => {
		describe('Github', () => {

			it('Should return the new issue url', () => {
				githubRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(github.mapRemoteToUrl(remoteUrlData), 'https://github.com/my-username/my-repo/issues/new');
				});
			});

		});
	});
});
