# django-vue-scaffold
A bash script for Linux systems that builds the skeleton of a full stack project.
The backend is managed by `django rest framework`, while the frontend is managed by `vue3`.

The script performs the following steps:

1. initialize a local `git` repository, add a `.gitignore`, a `README.md` and create a develop branch
2. create a python virtual environment in the work directory
3. add environment variables in `.venv/bin/activate`
4. install the packages:
    - `django`
    - `django rest framework`
    - `psycopg2-binary`
    - `gunicorn`
5. create a backend folder with a custom `settings.py`, `urls.py` files, a templates folder with `base.html` and `index.html` and an empty static folder
6. create a frontend folder with `vue-cli` and edit the files:
	- `public/index.html`
	- `vue-config.js`
	- `src/main.js`
	- `src/App.vue`
7. Add the files and folders `router/index.js`, `stores/ParamStore.js` and `views/Home.vue` to src
8. install the packages:
	- `vue-router@4`
	- `pinia`
	- `axios`
	- `sass-loader`

At the end of the installation to activate the services open two shells

```bash
# shell 1
. venv/bin/activate
cd backend
python manage.py runserver
```

```bash
# shell 2
cd frontend
npm run serves
```
