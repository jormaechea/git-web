#!/usr/bin/env node

'use strict';

const { argv } = require('./yargs-base');

const { executeCommand } = require('./common');

const createIssueProviders = require('../providers/create-issue');

executeCommand(argv, createIssueProviders);
