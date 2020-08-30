#!/usr/bin/env bash

SCRIPTPATH=$(readlink -f $0)
SCRIPTDIR=$(dirname $SCRIPTPATH)

MANSRCDIR="$SCRIPTDIR/../docs"
MANDSTDIR="$SCRIPTDIR/../man"

mkdir -p $MANDSTDIR

rm -f $MANDSTDIR/*

npx marked-man ${MANSRCDIR}/git-ci.1.md > ${MANDSTDIR}/git-ci.1
npx marked-man ${MANSRCDIR}/git-fork.1.md > ${MANDSTDIR}/git-fork.1
npx marked-man ${MANSRCDIR}/git-issues.1.md > ${MANDSTDIR}/git-issues.1
npx marked-man ${MANSRCDIR}/git-pr.1.md > ${MANDSTDIR}/git-pr.1
npx marked-man ${MANSRCDIR}/git-prs.1.md > ${MANDSTDIR}/git-prs.1
npx marked-man ${MANSRCDIR}/git-web.1.md > ${MANDSTDIR}/git-web.1
