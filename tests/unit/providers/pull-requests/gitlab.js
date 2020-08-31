'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { gitlab } = require('../../../../lib/providers/pull-requests');

const { gitlabRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Pull Requests', () => {
		describe('Gitlab', () => {

			it('Should return the merge requests list url', () => {
				gitlabRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(gitlab.mapRemoteToUrl(remoteUrlData, {}), 'https://gitlab.com/my-project/my-repo/-/merge_requests');
				});
			});

			it('Should return the merge request detail url', () => {
				gitlabRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(gitlab.mapRemoteToUrl(remoteUrlData, {
						pullRequestId: '455'
					}), 'https://gitlab.com/my-project/my-repo/-/merge_requests/455');
				});
			});

		});
	});
});
