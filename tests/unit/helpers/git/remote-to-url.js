'use strict';

const assert = require('assert');

const sinon = require('sinon');
const gitUp = require('git-up');

const remoteToUrl = require('../../../../lib/helpers/git/remote-to-url');

const { githubRemoteUrls } = require('../../../resources/remotes');

describe('Helpers', () => {
	describe('Git', () => {
		describe('Remote to url', () => {

			const dummyUrl = 'https://example.com/repo.git';

			const fakeProvider = {
				mapRemoteToUrl: () => dummyUrl
			};

			const extraParams = {
				foo: 'bar'
			};

			afterEach(() => sinon.restore());

			context('One provider passed', () => {

				it('Should just use the given provider', async () => {

					sinon.spy(fakeProvider, 'mapRemoteToUrl');

					const url = await remoteToUrl(fakeProvider, githubRemoteUrls[0], { ...extraParams });

					assert.strictEqual(url, dummyUrl);

					sinon.assert.calledOnceWithExactly(fakeProvider.mapRemoteToUrl, gitUp(githubRemoteUrls[0]), extraParams);
				});

			});

			context('Multiple providers passed', () => {

				it('Should throw if remote URL cannot be recognized', async () => {

					sinon.spy(fakeProvider, 'mapRemoteToUrl');

					assert.throws(() => remoteToUrl({ github: fakeProvider }, dummyUrl, { ...extraParams }));

					sinon.assert.notCalled(fakeProvider.mapRemoteToUrl);
				});

				it('Should throw if the detected provider is not available', async () => {

					sinon.spy(fakeProvider, 'mapRemoteToUrl');

					assert.throws(() => remoteToUrl({ notGithub: fakeProvider }, dummyUrl, { ...extraParams }));

					sinon.assert.notCalled(fakeProvider.mapRemoteToUrl);
				});

				it('Should throw if the detected provider is not available', async () => {

					sinon.spy(fakeProvider, 'mapRemoteToUrl');

					const url = await remoteToUrl({ github: fakeProvider }, githubRemoteUrls[0], { ...extraParams });

					assert.strictEqual(url, dummyUrl);

					sinon.assert.calledOnceWithExactly(fakeProvider.mapRemoteToUrl, gitUp(githubRemoteUrls[0]), extraParams);
				});

			});

		});
	});
});
