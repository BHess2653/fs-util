# Install
```
npm install utiltool
npm install
```
utilTool takes to parameters: the message and the type. The available types are error, log, and warn.
The different types will print out in different colors in the console for easy recognition.
Examples assuming you require utilTool as the variable con:
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
