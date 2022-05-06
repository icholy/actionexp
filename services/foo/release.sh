#!/bin/sh

BRANCH="release/foo/$(date +'%F-%s')"
git switch -c $BRANCH
git push -u origin $BRANCH
