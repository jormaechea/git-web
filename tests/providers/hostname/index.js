'use strict';

const assert = require('assert');

const hostnameMapper = require('../../../lib/providers/hostname');

describe('Providers', () => {
	describe('Hostname', () => {
		describe('Hostname mapper', () => {

			it('Should return a string representing the provider', () => {
				assert.deepStrictEqual(hostnameMapper('bitbucket.org'), 'bitbucket');
				assert.deepStrictEqual(hostnameMapper('git-codecommit.us-east-1.amazonaws.com'), 'codecommit');
				assert.deepStrictEqual(hostnameMapper('git-codecommit.us-west-2.amazonaws.com'), 'codecommit');
				assert.deepStrictEqual(hostnameMapper('github.com'), 'github');
				assert.deepStrictEqual(hostnameMapper('gitlab.com'), 'gitlab');
			});

			it('Should throw if the provider can\'t be mapped', () => {
				assert.throws(() => hostnameMapper('unknown.com'));
			});

		});
	});
});
