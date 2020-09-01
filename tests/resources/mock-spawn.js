'use strict';

const EventEmitter = require('events');
const childProcess = require('child_process');

const sinon = require('sinon');

module.exports = () => {

	const stdout = new EventEmitter();
	const stderr = new EventEmitter();

	const spawnEvent = new EventEmitter();
	spawnEvent.stdout = stdout;
	spawnEvent.stderr = stderr;

	const spawnStub = sinon.stub(childProcess, 'spawn')
		.returns(spawnEvent);

	spawnEvent.spawnStub = spawnStub;

	return spawnEvent;
};
