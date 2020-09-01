'use strict';

const assert = require('assert');

const sinon = require('sinon');

const isInWorkingDir = require('../../../../lib/helpers/git/is-in-working-dir');

const mockSpawn = require('../../../resources/mock-spawn');

describe('Helpers', () => {
	describe('Git', () => {
		describe('Is in working dir', () => {

			afterEach(() => sinon.restore());

			it('Should reject the stdout content if git command exits with a non-zero code', async () => {

				const spawnEvent = mockSpawn();

				const promise = isInWorkingDir();

				spawnEvent.stderr.emit('data', 'fatal: not a git repository (or any of the parent directories): .git');
				spawnEvent.emit('close', 1);

				const result = await promise;

				assert.strictEqual(result, false);

				sinon.assert.calledOnceWithExactly(spawnEvent.spawnStub, 'git', ['rev-parse', '--show-toplevel']);
			});

			it('Should resolve the remote url if the command runs successfully', async () => {

				const spawnEvent = mockSpawn();

				const promise = isInWorkingDir();

				spawnEvent.stdout.emit('data', '/root/path');
				spawnEvent.emit('close', 0);

				const result = await promise;

				assert.strictEqual(result, true);

				sinon.assert.calledOnceWithExactly(spawnEvent.spawnStub, 'git', ['rev-parse', '--show-toplevel']);
			});

		});
	});
});
