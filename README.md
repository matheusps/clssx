# clssx

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![CircleCI](https://circleci.com/gh/matheusps/clssx.svg?style=svg)](https://circleci.com/gh/matheusps/clssx)

I just got tired of copying these functions throughout my projects and decided to turn then into a simple library.

### Installing from npm

`yarn add clssx` or `npm install clssx`

### Usage

Import `csx` or `ssx` from the library

```javascript
import { csx, ssx } from 'clssx'
```

**Example using react:** https://codesandbox.io/s/vigorous-voice-ef38p

#### csx

It receives any amount of `strings`, `numbers` or `conditional objects` and returns a single `string` containing the allowed rulesets.

`type csx = (...rulesets: Array<string | number | [key:string]: boolean>) => string`

Ex:

```javascript
csx('') // => ''
csx('flex padding-ns') // => 'flex padding-ns'
csx('flex padding-ns', 't-bold') // => 'flex padding-ns t-bold'

csx(0) // => '0'
csx(1, 2, 3) // => '1 2 3'
csx(1, 't-bold') // => '1 t-bold'

csx({ 'flex padding-ns': false, grow: true }) // => 'grow'
csx({ 'flex padding-ns': false, grow: false }) // => ''
csx({ 'flex padding-ns': true, grow: true }) // => 'flex padding-ns grow'

csx(1, { 'flex padding-ns': true }, { grow: true }, 'margin-xl') // => '1 flex padding-ns grow margin-xl'
```

#### ssx

It receives any amount of `objects` or `arrays with lenght 2` and returns a single `object` containing the allowed rulesets.

`type ssx = (...rulesets: Array<Object, boolean>) => Object`

Ex:

```javascript
ssx({}) // => {}
ssx({ padding: 1 }) // => {padding: 1}
ssx({ padding: 1 }, { display: 'flex' }) // => {padding: 1, display='flex'}
ssx({ padding: 1 }, [{ display: 'flex' }: false]) // => {padding: 1}
ssx({ padding: 1 }, [{ display: 'flex' }: false], [{ display: 'inline' }: true]) // => {padding: 1, display: 'inline'}
```

### Scripts cheatset

- `yarn start`: Run `yarn build` in watch mode
- `yarn test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `yarn test:prod`: Run linting
- `yarn build`: Generate bundles and typings, create docs
- `yarn lint`: Lints code
- `yarn release`: Publishes the package
