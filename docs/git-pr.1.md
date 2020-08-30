# git-pr

> Git PR - Interact with your git provider from your command line.

For more information about the project, visit [Git web](https://github.com/jormaechea/git-web).

## DESCRIPTION

Create a PR in your git repository provider in the browser.

## SYNOPSIS

`git pr [--remote remote-name] [--source source-branch] [--destination destination-branch]`

## ARGUMENTS

`--remote`, `-r`
	Use a different remote. Default: `origin`

`--source`, `-s`
	The source branch for the PR. Default: current branch.

`--destination`, `-d`
	The destination branch for the PR. Default: `master`.

`--help`
	Show this help message

## EXAMPLES

`git pr`

`git pr -r upstream`

`git pr -d develop`

`git pr -s some-branch`

`git pr -s some-branch -d develop`

## Website

[](https://github.com/jormaechea/git-web)

## BUGS

Please report any bugs to [](https://github.com/jormaechea/git-web/issues).

## LICENSE

Copyright (c) 2020, Joaquín Ormaechea (MIT).

## SEE ALSO

git-ci(1), git-fork(1), git-issues(1), git-prs(1), git-web(1)
