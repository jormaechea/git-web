'use strict';

const baseBuilder = require('./base');
const webProviders = require('../../providers/web');

module.exports = (remote, commit) => baseBuilder(webProviders, remote, commit);
