# ReactNativeProjects

## Project Rename
#### Installation
```
  
npm i mobx mobx-react --save
npm i metro-react-native-babel-preset @babel/preset-flow @babel/plugin-proposal-decorators --save-dev

```

#### this statment in .babalrc
```
{
  "presets": [
    "module:metro-react-native-babel-preset"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
}
```