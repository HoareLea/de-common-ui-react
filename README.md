# DE Common Web UI Library


## Features:

- [Storybook](https://storybook.js.org/) Component catalog
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library)


## Dependencies:

- [Rollup](https://github.com/rollup/rollup)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Installation
```
npm i --save @HoareLea/de-common-ui-react
OR
npm i --save @HoareLea/de-common-ui-react@<version>
```

## Development

### Testing

```
npm run test
```

### Building

```
npm run build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

To export your Storybook as static files:

```
npm run storybook:export
```

You can then serve the files under `storybook-static` using S3, GitHub pages, Express etc. I've hosted this library at: https://www.harveydelaney.com/de-common-ui-react

### Generating New Components

Use the NodeJS util `util` called `create-component.js`. Instead of copy pasting components to create a new component, you can instead run this command to generate all the files you need to start building out a new component. To use it:

```
npm run generate YourComponentName
```

This will generate:

```
/src
  /YourComponentName
    YourComponentName.tsx
    YourComponentName.stories.tsx
    YourComponentName.test.tsx
    YourComponentName.types.ts
    YourComponentName.scss
```

The default templates for each file can be modified under `util/templates`.

Don't forget to add the component to your `index.ts` exports if you want the library to export the component!

### Installing Component Library Locally

Let's say you have another project (`test-app`) on your machine that you want to try installing the component library into without having to first publish the component library. In the `test-app` directory, you can run:

```
npm i --save ../de-common-ui-react
```

which will install the local component library as a dependency in `test-app`. It'll then appear as a dependency in `package.json` like:

```JSON
  ...
  "dependencies": {
    ...
    "de-common-ui-react": "file:../de-common-ui-react",
    ...
  },
  ...
```

Your components can then be imported and used in that project.

## Publishing as a private package on Github

### npm package scoping to @HoareLea


```
nvm use 14
npm i
npm run build
npm init --scope=HoareLea
npm login --registry=https://npm.pkg.github.com
npm publish --access=private
```

The `"prepublishOnly": "npm run build"` script in `package.json` will execute before publish occurs, ensuring the `lib/` directory and the compiled component library exist.

### Hosting via GitHub

I recommend you host the component library using NPM. However, if you don't want to use NPM, you can use GitHub to host it instead.

You'll need to remove `lib/` from `.gitignore`, build the component library (`npm run build`), add, commit and push the contents of `lib`.

You can then install your library into other projects by running:

```
npm i --save @HoareLea/de-common-ui-react

or 

npm i --save @HoareLea/de-common-ui-react@<version>
```

### Dist tags
Distribution tags (dist-tags) are human-readable labels that you can use to organize and label different versions of packages you publish. dist-tags supplement semantic versioning. In addition to being more human-readable than semantic version numbering, tags allow publishers to distribute their packages more effectively.


```
ADD TAG
npm dist-tag add @HoareLea/de-common-ui-react@1.0.1 beta

REMOVE TAG
npm dist-tag rm @HoareLea/de-common-ui-react@1.0.1 beta
```

https://docs.npmjs.com/cli/v6/commands/npm-dist-tag

## Usage

Usage of the component (after the library installed as a dependency into another project) will be:

```TSX
import React from "react";
import { SomeUIComponent } from "de-common-ui-react";

const App = () => (
  <div className="app-container">
    <h1>Hello I'm consuming the component library</h1>
    <SomeUIComponent theme="primary" />
  </div>
);

export default App;
```

Licence
[MIT](https://opensource.org/licenses/MIT)

Credit:
[Based on the blog post "Creating a React Component Library using Rollup, Typescript, Sass and Storybook" from Harvey Delaney](https://blog.harveydelaney.com)
