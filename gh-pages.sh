#!/bin/sh

# rm -rf node_modules
rm -rf dist
yarn install
npm version patch
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
git push
git push --tags
