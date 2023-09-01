# gas_clasp

This is the setup for commandline of Google Apps Script and typescript.

The npm has to be installed in the environment.

```bash
$ node --v
9.5.1
$ npm --v
9.5.1
```

## Set Google Apps Script API

You have to access to [userSetting of GAS](https://script.google.com/home/usersettings), and set "Google Apps Script API" to "ON".

## Install google/clasp

```bash
$ npm init --y
$ sudo npm install -g @google/clasp
```

## Login Google account

When login your google account, you have to allow access on your browser.

```bash
$ clasp login
```

## Install typescript for clasp

```bash
$ npm install --save-dev @types/google-apps-script
```

## Create script

When you execute below command, you have to choose script type.

- standalone
- docs
- sheets
- slides
- forms
- webapp
- api

```bash
$ clasp create
```

## Create script file and push to google server

After creating script file, you make coding in the file.

```bash
$ mkdir src && touch src/main.ts
$ clasp push
```

## Open script

```bash
$ clasp open
```
