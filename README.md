# Getting started

not yet

## Developing

To start the developing run :

```
> npm run dev
```

This will build, run the watcher and also run the Styleguide.
To open the Styleguide manualy open your Browser and navigate to [http://localhost:6060](http://localhost:6060).
Start developing your components in `src/lib/components` folder and update the `src/lib/index.js` file acordingly.
Always provide an `SynNote.examples.md` file, so your component will show up in the Styleguide.

### Proposals (Babel)

For smoother development some Babel plugin are included

- [class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties)
- [object-rest-spread](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-object-rest-spread)
- [optional-chaining](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-optional-chaining)

## Styling components

`SCSS` and `CSS` are supported out of the box just import styles into component like you normaly would do.
For the use of `CSS Modules` refere to [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss)

## Testing

Testing is done with [Jest](https://facebook.github.io/jest/), [Enzyme](http://airbnb.io/enzyme/) and [Jasmine Matchers](https://github.com/JamieMason/Jasmine-Matchers)
You can refer to `SynNote.test.js`.

```
> npm run test
```

or (for getting coverage)

```
> npm run test:coverage
```

## Linting

```
> npm run lint
```

or (for for automatic fixing if possible)

```
> npm run lint:fix
```

## Scripts

- `npm run dev` : Executes the develop mode, running watcher and the Stylguide, rebuilding library on every change.
- `npm run start` : Only serves the Styleguide.
- `npm run build` : Builds library (build can be faound in `dist` folder).
- `npm run styleguide:build` : Builds the static Styleguide.
- `npm run test` : Runs the tests.
- `npm run test:coverage`: Runs the test and shows the coverage.
- `npm run lint` : Runs the linter.
- `npm run lint:fix` : Runs the linter and fixes automatic fixable issues.
- `npm run release` : Publishes Library on NPM or private Registry (depending on config in `.npmrc` file).
- `npm run deploy`: Deploys the Styleguide to GitHub Pages.

## Resources

### Bundler

- [Rollup.js](https://rollupjs.org/guide/en)

### Styleguide

- [React Styleguidist](https://react-styleguidist.js.org/)

### Testing

- [Jasmine Matchers](https://github.com/JamieMason/Jasmine-Matchers)
- [Enzyme](http://airbnb.io/enzyme/)
- [Jest](https://facebook.github.io/jest/)

### Linting

- [ESLint](https://eslint.org/)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

### Compiler

- [Babel 7](https://babeljs.io/)

--

this library boilerplated with [react-rollup-boilerplate](https://github.com/KaiHotz/react-rollup-boilerplate)
