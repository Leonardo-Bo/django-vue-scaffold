#!/bin/bash

#BASE_DIR="$(readlink -f $( dirname -- "$0"; )/django-vue-scaffold)"
BASE_DIR="$(dirname $(readlink -f $0))"

## git
git init
#cp -r $( dirname -- "$0"; )/gitignore .
cp -r ${BASE_DIR}/README.txt .
mv README.txt README.md
cp -r ${BASE_DIR}/gitignore .
mv gitignore .gitignore

git add .
git commit -m "created and updated README.md"
git branch develop
git switch develop

## Backend
python3.10 -m venv venv
echo -e "
#export EMAIL_SYSTEM=''
#export EMAIL_PASS=''
#export EMAIL_ADMIN=''
#export USER_ADMIN=''
#export DB_USER=''
#export DB_PASS=''
#export SECRET_KEY=''" >> venv/bin/activate
. venv/bin/activate
python -m pip install --upgrade pip
pip install django
pip install djangorestframework
pip install gunicorn
pip install psycopg2-binary
django-admin startproject backend
SECRET_KEY="$(grep SECRET_KEY backend/backend/settings.py)"
#mv ${PWD}/backend/backend/settings.py ${PWD}/backend/backend/settings_original.py
#cp -r $( dirname -- "$0"; )/settings.py backend/backend/
#cp -r $( dirname -- "$0"; )/urls.py backend/backend/
cp -r ${BASE_DIR}/settings.py backend/backend/
sed -i "/SECRET_KEY/c\\${SECRET_KEY}" backend/backend/settings.py
##sed -i "/export SECRET_KEY=/c\export ${SECRET_KEY}" venv/bin/activate
cp -r ${BASE_DIR}/urls.py backend/backend/
#cp -r $( dirname -- "$0"; )/templates backend/
cp -r ${BASE_DIR}/templates backend/
mkdir ${PWD}/backend/static

## Frontend
echo | vue create frontend
#cp -r $( dirname -- "$0"; )/index.html frontend/public/
#cp -r $( dirname -- "$0"; )/vue.config.js frontend/
cp -r ${BASE_DIR}/index.html frontend/public/
cp -r ${BASE_DIR}/vue.config.js frontend/
cp -r ${BASE_DIR}/main.js frontend/src/
cp -r ${BASE_DIR}/App.vue frontend/src/
cp -r ${BASE_DIR}/router frontend/src/
cp -r ${BASE_DIR}/stores frontend/src/
cp -r ${BASE_DIR}/views frontend/src/

python3	${BASE_DIR}/edit_package_json.py

cd frontend/
npm install vue-router@4
npm install pinia
npm install axios
npm install -D sass-loader sass
cd ../

cp -r ${BASE_DIR}/.vscode .

git add . 
git commit -m "created project with django-vue-scaffold"
