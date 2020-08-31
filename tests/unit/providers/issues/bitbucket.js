'use strict';

const assert = require('assert');

const gitUp = require('git-up');

const { bitbucket } = require('../../../../lib/providers/issues');

const { bitbucketRemoteUrls } = require('../../../resources/remotes');

describe('Providers', () => {
	describe('Issues', () => {
		describe('Bitbucket', () => {

			it('Should return the issues list url', () => {
				bitbucketRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(bitbucket.mapRemoteToUrl(remoteUrlData, {}), 'https://bitbucket.org/my-workspace/my-repo/issues?status=new&status=open');
				});
			});

			it('Should return the issue detail url', () => {
				bitbucketRemoteUrls.forEach(remoteUrl => {
					const remoteUrlData = gitUp(remoteUrl);
					assert.deepStrictEqual(bitbucket.mapRemoteToUrl(remoteUrlData, {
						issueId: '455'
					}), 'https://bitbucket.org/my-workspace/my-repo/issues/455');
				});
			});

		});
	});
});
