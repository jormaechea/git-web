'use strict';

const assert = require('assert');
const fs = require('fs');

const sinon = require('sinon');

const fileExists = require('../../../../lib/helpers/fs/file-exists');

const getRepositoryRootDir = require('../../../../lib/helpers/git/get-repository-root-dir');

describe('Helpers', () => {
	describe('FS', () => {
		describe('File exists', () => {

			afterEach(() => sinon.restore());

			it('Should reject if repository root dir cannot be obtained', async () => {

				sinon.stub(getRepositoryRootDir, 'getRepositoryRootDir')
					.rejects(new Error('Root dir not found'));

				sinon.stub(fs, 'access');

				await assert.rejects(() => fileExists('foo.txt'), {
					message: 'Root dir not found'
				});

				sinon.assert.notCalled(fs.access);
			});

			it('Should reject if fs.access fails with some un handled error', async () => {

				sinon.stub(getRepositoryRootDir, 'getRepositoryRootDir')
					.resolves('/root/path');

				sinon.stub(fs, 'access')
					.callsFake((filepath, mode, callback) => {
						const error = new Error('Some error');
						error.code = 'UNKNOWN';
						callback(error);
					});

				await assert.rejects(() => fileExists('foo.txt'), {
					message: 'Some error'
				});

				sinon.assert.calledOnceWithExactly(fs.access, '/root/path/foo.txt', fs.constants.R_OK, sinon.match.func);
			});

			it('Should resolve with false if fs.access fails with ENOENT error', async () => {

				sinon.stub(getRepositoryRootDir, 'getRepositoryRootDir')
					.resolves('/root/path');

				sinon.stub(fs, 'access')
					.callsFake((filepath, mode, callback) => {
						const error = new Error('File not found');
						error.code = 'ENOENT';
						callback(error);
					});

				const result = await fileExists('foo.txt');

				assert.strictEqual(result, false);

				sinon.assert.calledOnceWithExactly(fs.access, '/root/path/foo.txt', fs.constants.R_OK, sinon.match.func);
			});

			it('Should resolve with true if fs.access succeeds', async () => {

				sinon.stub(getRepositoryRootDir, 'getRepositoryRootDir')
					.resolves('/root/path');

				sinon.stub(fs, 'access')
					.callsFake((filepath, mode, callback) => {
						callback(null, {});
					});

				const result = await fileExists('foo.txt');

				assert.strictEqual(result, true);

				sinon.assert.calledOnceWithExactly(fs.access, '/root/path/foo.txt', fs.constants.R_OK, sinon.match.func);
			});

		});
	});
});
