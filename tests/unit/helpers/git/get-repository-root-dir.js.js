'use strict';

const assert = require('assert');

const sinon = require('sinon');

const { getRepositoryRootDir } = require('../../../../lib/helpers/git/get-repository-root-dir');

const mockSpawn = require('../../../resources/mock-spawn');

describe('Helpers', () => {
	describe('Git', () => {
		describe('Get Repository Root Dir', () => {

			afterEach(() => sinon.restore());

			it('Should reject the stdout content if git command exits with a non-zero code', async () => {

				const spawnEvent = mockSpawn();

				const promise = getRepositoryRootDir();

				spawnEvent.stderr.emit('data', 'fatal: not a git repository (or any of the parent directories): .git');
				spawnEvent.emit('close', 1);

				await assert.rejects(promise, {
					message: 'fatal: not a git repository (or any of the parent directories): .git'
				});

				sinon.assert.calledOnceWithExactly(spawnEvent.spawnStub, 'git', ['rev-parse', '--show-toplevel']);
			});

			it('Should resolve the remote url if the command runs successfully', async () => {

				const spawnEvent = mockSpawn();

				const promise = getRepositoryRootDir();

				spawnEvent.stdout.emit('data', '/root/path');
				spawnEvent.emit('close', 0);

				const result = await promise;

				assert.strictEqual(result, '/root/path');

				sinon.assert.calledOnceWithExactly(spawnEvent.spawnStub, 'git', ['rev-parse', '--show-toplevel']);
			});

		});
	});
});
