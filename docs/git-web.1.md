# git-web

> Git web - Interact with your git provider from your command line.

For more information about the project, visit [Git web](https://github.com/jormaechea/git-web).

## DESCRIPTION

Open your git repository provider in the browser.

## SYNOPSIS

`git web [--remote remote-name] [--commit [commit-hash]]`

## ARGUMENTS

`--remote`, `-r`
	Use a different remote. Default: `origin`

`--commit`, `-c`
	Show the commit list (if passed without values) or an specific commit (if the commit hash is passed)

`--help`
	Show this help message

## EXAMPLES

`git web`

`git web -r upstream`

`git web -c`

`git web -c a1b2c3d4`

## Website

[](https://github.com/jormaechea/git-web)

## BUGS

Please report any bugs to [](https://github.com/jormaechea/git-web/issues).

## LICENSE

Copyright (c) 2020, Joaquín Ormaechea (MIT).

## SEE ALSO

git-ci(1), git-fork(1), git-issue(1), git-issues(1), git-prs(1), git-pr(1)
