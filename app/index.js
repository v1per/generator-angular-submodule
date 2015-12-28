"use strict";

var generator = require("yeoman-generator"),
  yosay = require("yosay"),
  chalk = require("chalk"),
  path = require("path");


module.exports = generator.Base.extend({
  constructor: function () {
    generator.Base.apply(this, arguments);
  },
  initializing: function () {
    this.log(yosay('Welcome to ' + chalk.red('angular-submodule') + ' generator'));
  },
  prompting: function () {
    var done = this.async();

    this.prompt([{
      type: 'input',
      name: 'name',
      message: 'What is your Angular submodule name?',
      default: path.basename(path.resolve('./'))
    }, {
      type: 'input',
      name: 'description',
      message: 'How would you describe your Angular submodule',
      default: ''
    }, {
      type: 'input',
      name: 'author',
      message: 'What is your name?',
      store: true
    }], function (answers) {
      this.name = answers.name;
      this.description = answers.description;
      this.author = answers.author;
      done();
    }.bind(this));
  },
  configuring: function () {

  },
  writing: function () {
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
    this.copy('_karma.conf.js', 'karma.conf.js');
    this.copy('travis.yml', '.travis.xml');
    this.fs.copyTpl(
      this.templatePath('_index.js'),
      this.destinationPath('index.js'),
      {
        name: this.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_index.test.js'),
      this.destinationPath('index.test.js'),
      {
        name: this.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        name: this.name,
        description: this.description,
        author: this.author,
        repo: this.repo
      }
    );
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      {
        name: this.name,
        description: this.description
      }
    );
  },
  conflicts: function () {

  },
  install: function () {
    this.npmInstall();
  },
  end: function () {

  }
});

