# package-regex-names
> Get names from package.json.

## installation
```shell
npm install -S @feizheng/package-regex-names 
```

## usage
```js
// codes
import pkgRegexNames from '@feizheng/package-regex-names';

pkgRegexNames(/react-/,{
  target:'dependencies',
  exclude:/react-router-dom/
});

// [ 'react','react-dom' ]
```
