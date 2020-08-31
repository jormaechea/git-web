#!/usr/bin/env node

'use strict';

const { argv } = require('./yargs-base');

const { executeCommand } = require('./common');

const forkProviders = require('../providers/fork');

executeCommand(argv, forkProviders);
