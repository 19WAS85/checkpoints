#!/bin/sh
rm -rf node_modules dist
yarn install
yarn build
git checkout gh-pages
git rm -rf .
git reset HEAD
git checkout .gitignore
mv dist/* .
git add . -A
git commit -m 'Deploy'
git push
git checkout master
