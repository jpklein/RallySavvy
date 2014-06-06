RallySavvy
==========

This project is both a skeleton for [AngularJS](http://angularjs.org/) web apps
that interact with the
[Rally API](https://rally1.rallydev.com/slm/doc/webservice/?version=v3.0)
and a set of custom views built upon this core. The master branch can be used
to bootstrap your Rally webapp projects, while other branches and tags should
be considered example implementations.

## Getting Started

Following modern front-end development methodology, we use a
[Node.js](http://nodejs.org/)-based taskrunner to scaffold, test, and deploy
code. Specifically, the project is built off of a generator
([slush-angular](https://www.npmjs.org/package/slush-angular))
that implements Google's
[Angular App Structure Recommendations](http://goo.gl/OIAaBl).

### Prerequisites

You need Git to clone the master branch of this repository. Download and
install the latest version for your system from
[http://git-scm.com/](http://git-scm.com/).

You will also need Node.js and its package manager (npm) installed to take
advantage of all the web-dev goodness baked into the project. Follow the
instructions on [http://nodejs.org/](http://nodejs.org/) to get them both.

Finally, we rely on [Bower](http://bower.io/) and [Gulp](http://gulpjs.com/) to
manage dependencies and handle the boring stuff. Install them with npm using:

```bash
sudo npm install -g bower
sudo npm install -g gulp
```

### Clone the Repository

Clone the master branch of this repository using:

```bash
git clone -b master https://github.com/jpklein/RallySavvy.git
```

### Install Dependencies

We get the latest version of required framework code via `bower`, a client-side
code package manager.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```bash
npm install
```

Behind the scenes this will also call `bower install`.  You should find that
you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the
root folder but angular-seed changes this location through the `.bowerrc` file.
Putting it in the app folder makes it easier to serve the files by a webserver.*

## Development

To start developing in the project run:

```bash
gulp serve
```

Then head to `http://localhost:3000` in your browser.

The `serve` tasks starts a static file server, which serves the AngularJS
application, and a watch task which watches all files for changes and lints,
builds and injects them into the index.html accordingly.

## Tests

To run tests run:

```bash
gulp test
```

**Or** first inject all test files into `karma.conf.js` with:

```bash
gulp karma-conf
```

Then you're able to run Karma directly. Example:

```bash
karma start --single-run
```

## Production ready build - a.k.a. dist

To make the app ready for deploy to production run:

```bash
gulp dist
```

Now there's a `./dist` folder with all scripts and stylesheets concatenated and
minified, also third party libraries installed with bower will be concatenated
and minified into `vendors.min.js` and `vendors.min.css` respectively.
