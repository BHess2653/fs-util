# Install
##[ ![Codeship Status for DPCobb/fs-utilTool](https://app.codeship.com/projects/a212a0b0-d9fa-0134-a3d0-5af04d25d964/status?branch=version-updater)](https://app.codeship.com/projects/203546)
```
npm install utiltool
```
## utiltool uses colors
```
colors.setTheme({
  create: 'green',
  read: 'yellow',
  update: 'magenta',
  delete: 'red',
  error: 'red',
});
```

## output
```
utiltool.debug('Example'.create);

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
it will print Example in Green
Sun Feb 19 2017 15:27:09 GMT-0500 (EST)
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
```
# Version Updater

The version updater has two different methods: updateManual and updateAuto. The class is exported as update.

## updateManual(ver, rel)
This method takes two parameters: the current version and the type of release. The available release types are major, minor, patch, and test. Test should only be used for testing and not for anything else. The updateManual method will just return the value for the new current version based on your inputs. The following examples assume you have required the file with the variable v:
```
For Manual updates:
v.update.updateManual('1.0.1', major) returns: 2.0.0
v.update.updateManual('1.0.1', minor) returns: 1.1.1
v.update.updateManual('1.0.1', patch) returns: 1.0.2
v.update.updateManual('1.0.1', test) returns: 1.0.1
```
## updateAuto(rel)
This method accepts on parameter for the release type: major, minor, patch, or test. Again, test should only be used for testing. This method will pull the current release number from the package.json file and make the appropriate changes to the version based on the release parameter given. The following examples assume you have required the file with the variable v:
```
For Auto updates:
v.update.updateAuto('major') automatically updates the major release in package.json and resets minor and patch to zero
v.update.updateAuto('minor') automatically updates the minor release in package.json
v.update.updateAuto('patch') automatically updates the patch release in package.json
v.update.updateAuto('test') returns the current version
```
updateAuto will also return a status of 'package.json updated'.
