<h1 align="center">Git web</h1>

<p align="center">

<a href="https://www.npmjs.com/package/git-web">
	<img src="https://badge.fury.io/js/git-web.svg" alt="npm version" />
</a>

<a href="https://github.com/jormaechea/git-web/actions?query=workflow%3A%22Build+Status%22">
	<img src="https://github.com/jormaechea/git-web/workflows/Build%20Status/badge.svg" alt="Build status" />
</a>

<!--
<a href="https://coveralls.io/github/jormaechea/git-web?branch=master">
	<img src="https://coveralls.io/repos/github/jormaechea/git-web/badge.svg?branch=master" alt="Coverage status" />
</a>
-->

</p>

<p align="center">
	<strong>Interact with your git provider from your command line.</strong>
</p>

## :computer: Usage

First install it globally:

```sh
npm install --global git-web
```

Then you will be able to run your brand new git commands:

```sh
git web # Open the repository home

git web -c # Open the list of commits

git web -c COMMITHASH # Open an specific commit

git ci # Open your CI/CD provider

git ci -e ID # Open a CI/CD execution details
```

## :question: Why?

This is a CLI utility inspired by [git-open](https://github.com/paulirish/git-open), but implemented in node. Why? Because I think it has a wider community that can use and contribute to the project.

## :ballot_box_with_check: Features

Open your git web interface right from your terminal! Both git and CI/CD will be autodetected using your git remote(s) and your repository config files.

The following features are available for each provider:

### AWS Codecommit

- Open repository home
- Open commits list
- Open an specific commit
- Open pull requests list
- Open an specific pull request
- Open PR creation screen

### Bitbucket

- Open repository home
- Open commits list
- Open an specific commit
- Open pipeline executions list
- Open an specific pipeline execution
- Open pull requests list
- Open an specific pull request
- Open PR creation screen
- Fork a repository
- Open issues list
- Open an specific issue

### CircleCI

- Open pipeline executions list
- Open an specific pipeline execution

### Github

- Open repository home
- Open commits list
- Open an specific commit
- Open pipeline executions list
- Open an specific pipeline execution
- Open pull requests list
- Open an specific pull request
- Open PR creation screen
- Fork a repository
- Open issues list
- Open an specific issue

### Gitlab

- Open repository home
- Open commits list
- Open an specific commit
- Open pipeline executions list
- Open an specific pipeline execution (or the latest!)
- Open pull requests list
- Open an specific pull request
- Open PR creation screen
- Fork a repository
- Open issues list
- Open an specific issue

### Travis

- Open pipeline executions list
- Open an specific pipeline execution

## Contributing

All contributions are welcome. And remember to be nice to each other!

## License

MIT
