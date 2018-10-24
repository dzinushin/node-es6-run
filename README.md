# node-es6-run

This is example how to create Nodejs project with support ES6

```
npm inti -y
npm install --save-dev babel-cli babel-preset-es2015 rimraf
````
create file ```.babelrc``` with next content:
```
{
  "presets": ["es2015"]
}
```
add in file ```packages.json``` next lines :
```
{
  "scripts": {
    "build": "rimraf dist/ && babel ./ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files",
    "start": "npm run build && node dist/index.js"
  }
}
```
create file ```index.js``` and add your code in it
execute your code by command
```
npm run start
```