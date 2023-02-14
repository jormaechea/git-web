# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2023-02-14
### Changed
- Dropped support for node 10 and 12 **BREAKING CHANGE**
- Updated bitbucket pipelines URLs

### Security
- Dependencies updated to fix known vulnerabilities

## [0.2.1] - 2021-03-09
### Fixed
- Issue with `fs.access` flags in node 14+

## [0.2.0] - 2020-08-31
### Added
- New commmands: `git fork`, `git issue`, `git issues`, `git pr` and `git prs`.
- Man pages for all the commands
- Documentation in README
- Stability improved with unit testing

## [0.1.0] - 2020-08-29
### Added
- `git web` command with origin and commit modifiers with support for bitbucket, codecommit, github and gitlab.
- `git ci` command with origin and commit modifiers with support for bitbucket, circleci, github, gitlab and travis.
- Pending commands `git issues`, `git fork` , `git prs` and `git pr`.
