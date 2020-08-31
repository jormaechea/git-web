'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { gitlab } = require('../../../../lib/providers/issues');

const { gitlabRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Issues', () => {
		describe('Gitlab', () => {

			it('Should return the issues list url', () => {
				gitlabRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(gitlab.mapRemoteToUrl(remoteUrlData, {}), 'https://gitlab.com/my-project/my-repo/-/issues');
				});
			});

			it('Should return the issue detail url', () => {
				gitlabRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(gitlab.mapRemoteToUrl(remoteUrlData, {
						issueId: '455'
					}), 'https://gitlab.com/my-project/my-repo/-/issues/455');
				});
			});

		});
	});
});
