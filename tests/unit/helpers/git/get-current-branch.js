'use strict';

const assert = require('assert');

const sinon = require('sinon');

const getCurrentBranch = require('../../../../lib/helpers/git/get-current-branch');

const mockSpawn = require('../../../resources/mock-spawn');

describe('Helpers', () => {
	describe('Git', () => {
		describe('Get current branch', () => {

			afterEach(() => sinon.restore());

			it('Should reject the stdout content if git command exits with a non-zero code', async () => {

				const spawnEvent = mockSpawn();

				const promise = getCurrentBranch();

				spawnEvent.stderr.emit('data', 'Some error');
				spawnEvent.emit('close', 1);

				await assert.rejects(promise, {
					message: 'Some error'
				});

				sinon.assert.calledOnceWithExactly(spawnEvent.spawnStub, 'git', ['branch']);
			});

			it('Should resolve null if no branch is active', async () => {

				const spawnEvent = mockSpawn();

				const promise = getCurrentBranch();

				spawnEvent.stdout.emit('data', '  master\n');
				spawnEvent.stdout.emit('data', '  develop\n');
				spawnEvent.emit('close', 0);

				const result = await promise;

				assert.strictEqual(result, null);

				sinon.assert.calledOnceWithExactly(spawnEvent.spawnStub, 'git', ['branch']);
			});

			it('Should resolve the branch name if a branch is active', async () => {

				const spawnEvent = mockSpawn();

				const promise = getCurrentBranch();

				spawnEvent.stdout.emit('data', '  master\n');
				spawnEvent.stdout.emit('data', '* develop\n');
				spawnEvent.emit('close', 0);

				const result = await promise;

				assert.strictEqual(result, 'develop');

				sinon.assert.calledOnceWithExactly(spawnEvent.spawnStub, 'git', ['branch']);
			});

		});
	});
});
