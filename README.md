# Nova starter

## How to use

To start a new project:

1. Clone this repo, remove `.git` and create a new repo.

```
git clone --depth=1 --branch=master git@github.com:edinum/nova-starter.git projectname
cd projectname
rm -rf ./.git
git init
git remote add origin new.git.url
```

2. Edit `version.json` (`name` and `repository` keys)

3. Commit all changes

```
git add --all
git commit -m "Initialisation du projet"
```

## Full documentation

See Nova: https://github.com/edinum/nova
