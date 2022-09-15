# FormyApp

Project created to practice the TestCafe tool.

Useful links for TestCafe:
- https://testcafe.io/documentation/402830/guides/basic-guides/run-tests
- https://www.devexpress.com/products/testcafestudio/


## Running tests
`testcafe <browser> teste.js`

example: 
```
testcafe chrome teste.js
```

## Running tests live
`testcafe <browser> teste.js --live`

example: 
```
testcafe chrome teste.js --live
```

## Run specific test
`testcafe <browser> teste.js -t <name of the test>`

example: 
```
testcafe chrome teste.js -t 'Fill out form'
```


## Headless tests
`testcafe <browser>:headless teste.js`

example: 
```
testcafe chrome:headless teste.js
```

## Run in parallel
`testcafe -c 2 <browser> teste.js`

example: 
```
testecafe -c 2 chrome teste.js
```

## Run from script
```
npm run test:chrome
```
