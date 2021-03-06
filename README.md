React Project
===

## Requirements
- [Node.js](https://nodejs.org/en/download/)

### Recommended
We also recommend you to install the following:
- [EsLint](https://eslint.org/) used for linting our JS and JSX files.
- [Prettier](http://prettier.io/) used for linting and formatting our JS and JSX files.
- [StyleLint](https://stylelint.io/) used for linting our CSS files.

For text editing we recommend [VS Code](https://code.visualstudio.com/), and installing the aforementioned extensions. Links for the extensions for VS Code are listed below.
- [EsLint - VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 
- [Prettier - VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [StyleLint - VSCode](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)

These extensions are also available in some other text editors, and their use are not mandatory, but they are highly recommended, since they detect and fix some problems with styling and some of the project's standards.

For enabling formatting on save, in VS Code, just follow these steps:
1. Press ```CMD``` + ```SHIFT``` + ```P``` on OsX or  ```CTRL``` + ```SHIFT``` + ```P``` on Windows;
2. Type ```>Preferences: Open Settings (JSON)```;
3. Append the following properties to your Settings:    
  ```
  "[javascript]": {
      "editor.formatOnSave": true
  },
  "[css]": {
      "editor.formatOnSave": true
  }
  ```

## Instalation
To install the dependencies, open the terminal in the project's folder, enter the following line then press `enter`:

```
$ npm install
```

This will create a `node_modules` folder in the root which contains all your dependencies.

## Run the application
To start the application, open the terminal in the project's folder, enter the following line then press `enter`:

```
$ npm start
```
## Loading environment variables
Create a file called “.env” in the root of your repository.
Set up your variables with the format key=value, delimited by line breaks:
```
REACT_APP_API_KEY="yourAPIKeyHere"
REACT_APP_API_URI="http://localhost:3000/"
```

## Conventions

### CSS Variables

For the variables we have the following files:
1. variables-colors.css (for all colors)
2. variables-gradients.css (for all gradients)
3. variables-modifiers.css (for rgba and shadows)
4. theming.css (this will be explained in the next question)

#### Colors
When creating a css Variable for the **colors** file, choose a base color and go three scales up or down in accord to the color being used, adding a suffix, like this:
-darkest
-darker
-dark
-light
-lighter
-lightest

For instance, if we were to create a new color, named `brick`, and after we were to put some variances of `brick`, the result would be like this:

`--brick-darkest`
`--brick-darker`
`--brick-dark`
`--brick`
`--brick-light`
`--brick-lighter`
`--brick-lightest`

#### Gradients
They should be all named with the main colors of the gradient and eventually their modifiers (e.g.: `--carousel-black-gradient` and `--red-yellow-gradient-76deg`).

#### Modifiers

Here the convention is for rgba and shadows (and some other specific properties that will be used only once), so everything that goes here should have as prefix the BEM of the css class calling the variable, and the property (shadow, for instance).

## Theming
There are two main themes, `default` and `night-mode`, that are basically a bright mode and a dark mode respectively. Two create a new theme, change a theme, or create a component that is sensitive to the theme, add and use all related properties in the `theming.css` file. Each class is a theme (e.g.: `.night-mode` and `.default`), each class has the same variables, but with different content for each. For instance, the `--theme-page-bg` has the variable `--black-lighter` in the dark mode and `--white` in the default mode.

* Titles, Subtitles and some dividers are usually the same acrros the application, so they share the same attributes: `theme-text-title`, `theme-text-subtitle`, `theme-divider` respectively.

* If you are about to add a new variable in a theme, don't forget to add in all available themes, and to also include the prefix `--theme-`, so there is a way to differentiate between regular variables and theming variables.

* Don't reuse variables unless you are certain they are to be the same in different components. They may share the same color, gradient, box shadow in the moment, but can eventually grow apart and become different, that will cause a change in a component an unexpected change in another. 

## Error Handler
To add the error handler to a request on the API, use:
```
.catch((error) => {
    this.setState({ error: serverError(error) });
});
```
To a new error create a new case in the error handler.
