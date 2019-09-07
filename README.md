# ReactNativeProjects

## Project Rename
#### Installation
```
yarn global add react-native-rename
or
npm install react-native-rename -g
```
#### Usage
```
react-native-rename <newName>
```

> With custom Bundle Identifier (Android only. For iOS, please use Xcode)
```
react-native-rename <newName> -b <bundleIdentifier>
```

#### Example
```
react-native-rename "Travel App"
```


## Project Icons and Splashscreen Generation
## Requirements

- You need node >= 6 installed (using [NVM](https://github.com/creationix/nvm) is recommended)
- Install the generator `npm install -g yo generator-rn-toolbox`
- You need `imagemagick` installed to use this generator.

On a mac, you can install it with `brew`:
```
brew install imagemagick
```

Then run:
```
yo rn-toolbox:assets --icon icon.png
```
Answer yes when asked about overwriting.

That's it! :balloon:
Icons have been generated in different sizes and integrated in your project.

## Generate splashscreens
You'll need a **square** image for your splash with a size of more than **2208x2208 px** (psd is supported). The image will be cropped, it should be the logo of the app inside a big square with a 30% margin.
Be aware that content located on the edges of the picture might get cut (see [example with bottom content](./doc/splashscreen-with-bottom-content.png) and [example with right side content](./doc/splashscreen-with-right-side-content.png) where the logo is cut).
### iOS

Run:
```
yo rn-toolbox:assets --splash splash.psd --ios
```
### Android

The generator only supports a splash with a plain background color on Android.

Run:
```
yo rn-toolbox:assets --splash splash.psd --android
```