# noDectionary
A simple Node.js app to make a Dictionary-like app using command line only .

## Breif
* No npm modules used 
* Modular Code 
* Using Node core Modules [FileSystem](https://nodejs.org/api/fs.html) & [Utilities](https://nodejs.org/api/util.html)


### Store Commands

`$ node store.js add mykey myvalue`

`$ node store.js list`

`$ node store.js get mykey`

`$ node store.js remove mykey`

`$ node store.js clear`

### Docker Support 
* This Project supports docker conatainerization .
* for building a new docker image to this project , simply run: 
``` 
docker build --rm -f Dockerfile -t nodectionary:latest .
```
