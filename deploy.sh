#!/usr/bin/env sh
# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b master 
git add -A 
git commit -m 'deploy'

# if you are deploying to https://<Ediel96>.github.io
# git push -f git@github.com: <Ediel96>/Ediel96>.github.jo.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com: <USERNAME>/<REPO>. git main:gh-pages
