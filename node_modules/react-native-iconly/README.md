# 🌈  React Native Iconly Icons

[![NPM](https://img.shields.io/npm/v/react-native-iconly.svg)](https://www.npmjs.com/package/react-native-iconly)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm downloads](https://img.shields.io/npm/dm/react-native-iconly.svg?style=flat-round)](https://www.npmjs.com/package/react-native-iconly)


**react-native-iconly** is a fork of [react-iconly](https://www.npmjs.com/package/react-iconly) that is very half-assedly put together and rushed to completion using some very manual scripts. It uses [react-native-svg](https://www.npmjs.com/package/react-native-svg) as a substitute for the original html svg backend. It also uses typescript instead of javascript.

## READ THIS
This was very quickly put together. Some things may not work. I may update this in the future. Use at your own discretion.

## Based on Iconly Essential Icons [Iconly v2](https://ui8.net/piqodesign/products/iconly-essential-icons)

🌐 [Website](https://react-native-iconly.jrgarciadev.com/)

### Sets
- Bold
- Bulk
- Light Border
- Broken
- Two Tone
- Curved (New)

### Installation
    yarn add react-native-iconly

  or

    npm i react-native-iconly

### Usage

```jsx
import React from 'react';
import { Home } from 'react-native-iconly';

const App = () => {
  return <Home color="#A1D808" />
};

export default App;
```

You can also wrap your app inside a `IconlyProvider` component, this will make all the icons that are within the context Use the Provider properties

If you set specific props for each Icon the Provider properties will be overwritten

```jsx
import React from 'react';
import { IconlyProvider, Home, Notification } from 'react-native-iconly';

const App = () => {
  return (
    <IconlyProvider set="bulk" primaryColor="blueviolet" secondaryColor="blue" stroke="bold" size="xlarge">
      <Home />
      <Notification primaryColor="yellow" />
    </IconlyProvider>
  )
};

export default App;
```

Icons can be configured with inLine props:
```jsx
<Home set="curved" primaryColor="blueviolet" secondaryColor="blue" stroke="bold" size="xlarge"/>
```
You can also include the whole icon pack:

```jsx
import React from 'react';
import * as IconlyPack from 'react-native-iconly';

const App = () => {
  return <IconlyPack.Home set="bulk" primaryColor="blueviolet" secondaryColor="blue" stroke="bold" size="xlarge"/>
};

export default App;
```

Custom style example

```jsx
import React from 'react';
import { Send } from 'react-native-iconly';

const App = () => {
  return <Send style={{ transform: 'rotate(45deg)' }} primaryColor="red" stroke="bold" size="xlarge"/>
};

export default App;

```
## Props

| Prop | Type | Default | Note |
|---|---|---|---|
| `label` | `string` |  | String to Use as the aria-label for the icon. Use an empty string when you already have readable Text around the icon,like Text inside a button.
| `filled` | `boolean` | `false` | Set de icons sets to 'bold'.
| `primaryColor` | `string` | `currentColor` | Primary colour for icons.
| `secondaryColor` | `string` | `currentColor` | Secondary colour for **two-tone** and **bulk** icons set.
| `size` | `number` | `small` `medium` `large` `xlarge` | `medium` | Control the size of the icon, you can set a custom **number** size
| `set` | `light` `bold` `two-tone` `bulk`  `broken` `curved`  | `light` | Iconly set option.
| `stroke` | `light` `regular` `bold` | `regular` | Sets the Line stroke for **light** and **two-tone** icons set.
| `style` | `object` |  | Custom styles property.

-----

## License

MIT [jrgarciadev](https://github.com/jrgarciadev) and [otaviomad](https://github.com/otaviomad)
