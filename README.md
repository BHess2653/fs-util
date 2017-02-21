# Install
## [ ![Codeship Status for DPCobb/fs-utilTool](https://app.codeship.com/projects/a212a0b0-d9fa-0134-a3d0-5af04d25d964/status?branch=log-enhance)](https://app.codeship.com/projects/203546)
```
npm install utiltool
npm install
```
## Using utilTool
utilTool takes to parameters: the message and the type. The available types are error, log, and warn.
The different types will print out in different colors in the console for easy recognition.
Example assuming you require utilTool as the variable con:
```
con.msg('hello world', 'log')
```
Will output the following in the console:
```
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
~~~~~~~~ LOG Event ~~~~~~~~
hello world
Mon Feb 20 2017 19:13:26 GMT-0500 (EST)
```
