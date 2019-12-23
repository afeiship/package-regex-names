/*!
 * name: @feizheng/package-regex-names
 * url: https://github.com/afeiship/package-regex-names
 * version: 1.0.0
 * license: MIT
 */

var appPath=require("app-root-path").path,path=require("path"),DEFAULT_OPTIONS={target:"dependencies",exclude:/!(.*)/};module.exports=function(e,t){var a=require(path.join(appPath,"package.json")),r=Object.assign({},DEFAULT_OPTIONS,t),p=a[r.target],n=[];for(var u in p)e.test(u)&&!r.exclude.test(u)&&n.push(u);return n};