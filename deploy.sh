sh

#1/usr/bin/env sh 
# abort on errors 
set -e 




# build 
npn run build 


# navigate into the build output directory 
cd dist 
# if you are deploying to a custom domain 
# echo 'www.example.com’ > CNAME 
git init 
git checkout -b main 
git add -A 
git commit -m 'deploy’ 

# if you are deploying to https://<ediel96>.github.io 
# git push -f git@github.con:<ediel96>/<ediel96>.github.i0.git main-dev

# if you are deploying to https://<USERNAME>.github.io/<REPO> 
# git push - git@github.com:<USERNAME>/<REP0>.git main:gh-pages 
cd - 