const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Matt Wise',
  authorAddress: 'wise@wiredgeek.net',
  authorName: 'Matt Wise',
  cdkVersion: '2.50.0',
  defaultReleaseBranch: 'main',
  name: 'coremodule',
  repositoryUrl: 'https://github.com/diranged/JSII3000-coremodule-example.git',

  npmDistTag: 'latest',
  npmRegistryUrl: 'https://npm.pkg.github.com',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
