'use strict';

const baseBuilder = require('./base');
const ciProviders = require('../../providers/ci');

module.exports = (remote, commit) => baseBuilder(ciProviders, remote, commit);
