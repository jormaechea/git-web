'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { gitlab } = require('../../../../lib/providers/create-pull-request');

const { gitlabRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Create Pull Request', () => {
		describe('Gitlab', () => {

			it('Should return the new pull request url', () => {
				gitlabRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);

					const params = '?merge_request%5Bsource_branch%5D=my-branch&merge_request%5Btarget_branch%5D=master';

					assert.deepStrictEqual(
						gitlab.mapRemoteToUrl(remoteUrlData, {
							source: 'my-branch',
							destination: 'master'
						}), `https://gitlab.com/my-project/my-repo/-/merge_requests/new${params}`
					);
				});
			});

		});
	});
});
