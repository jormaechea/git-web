'use strict';

const assert = require('assert');

const sinon = require('sinon');

const getRemote = require('../../../../lib/helpers/git/get-remote');

const mockSpawn = require('../../../resources/mock-spawn');

describe('Helpers', () => {
	describe('Git', () => {
		describe('Get remote', () => {

			afterEach(() => sinon.restore());

			it('Should reject the stdout content if git command exits with a non-zero code', async () => {

				const spawnEvent = mockSpawn();

				const promise = getRemote('upstream');

				spawnEvent.stderr.emit('data', 'fatal: No such remote \'upstream\'');
				spawnEvent.emit('close', 1);

				await assert.rejects(promise, {
					message: 'fatal: No such remote \'upstream\''
				});

				sinon.assert.calledOnceWithExactly(spawnEvent.spawnStub, 'git', ['remote', 'get-url', 'upstream']);
			});

			it('Should resolve the remote url if the command runs successfully', async () => {

				const spawnEvent = mockSpawn();

				const promise = getRemote('upstream');

				spawnEvent.stdout.emit('data', 'https://github.com/my-project/my-repo.git');
				spawnEvent.emit('close', 0);

				const result = await promise;

				assert.strictEqual(result, 'https://github.com/my-project/my-repo.git');

				sinon.assert.calledOnceWithExactly(spawnEvent.spawnStub, 'git', ['remote', 'get-url', 'upstream']);
			});

		});
	});
});
