# React Native Template Icons

**React Native Template Icons** provides a set of icons designed by **JaMa D&D**.

## Features

- Comprehensive icon set
- Supports predefined icon sizes and custom icon sizes
- Customizable icon colors

## Installation

```sh
yarn add @jamadd/react-native-template-icons
```

or

```sh
npm install @jamadd/react-native-template-icons
```

## Usage

```js
import Icon, { IconSize } from "@jamadd/react-native-template-icons";

// Using predefined icon size
<Icon name={"reactnativetemplate"} color={"#7ccf6b"} size={IconSize.S} />;

// Using custom icon size
<Icon name={"reactnativetemplate"} color={"#7ccf6b"} size={24} />;
```

## Predefined Icon Sizes

```ts
export enum IconSize {
  XXS = 12,
  XS = 18,
  S = 24,
  M = 30,
  L = 36,
  XL = 42,
  XXL = 48,
}
```

## Available Icons

TODO

## Demo Applications

TODO

## Credits

This package is created using [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons/blob/master/docs/CREATE_FONT_PACKAGE.md) and [Yeoman generator](https://yeoman.io/learning/).

## License

MIT
