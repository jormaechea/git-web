'use strict';

module.exports.getBaseUrl = remoteUrlData => {

	// Remote
	// 'https://git-codecommit.us-east-1.amazonaws.com/v1/repos/my-repo';
	// 'ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/my-repo';

	// Console
	// 'https://console.aws.amazon.com/codesuite/codecommit/repositories/my-repo/browse?region=us-east-1';
	// 'https://console.aws.amazon.com/codesuite/codecommit/repositories/my-repo/commits?region=us-east-1';
	// 'https://console.aws.amazon.com/codesuite/codecommit/repositories/my-repo/commit/e1ba89e511b62641e1c8ca0bc5a04495ebd83521?region=us-east-1';

	const [repoName] = remoteUrlData.pathname.split('/').slice(-1);

	return `https://console.aws.amazon.com/codesuite/codecommit/repositories/${repoName}`;
};

module.exports.getRegion = remoteUrlData => {

	const [, region] = remoteUrlData.resource.match(/git-codecommit\.(.+)\.amazonaws\.com/);

	return region;
};
