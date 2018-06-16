[fuse-box]: https://fuse-box.org
[Vuetify]: https://vuetifyjs.com
[Vue]: https://vuejs.org

# [Vue]-UWP
Well It turned out that this was the easier between all the other templates I've done so far
However I'm almost sure it is because of the coolness of [fuse-box], you should check them out.

## Structure
![Structure](https://i.imgur.com/2WJUWk9.png)

this structure template is somewhat similar to the vue-cli templates, so you should be familiar with it
it includes vuex and vue-router by default, as well as [Vuetify], I'm sorry if I dissapoint someone but those sweet dark themes 
fit too great in the dark mode windows has! so Sorry I'm not even close to be sorry,


## Fuse.js
This similar to the [Aurelia UWP] Sample I did, since this (as well as the other) uses a bundler, 
you need to keep the build running in the background, and thanks to the [fuse-box] guys, this is quite easy

`node fuse.js`

and for production builds just run `node fuse.js prod` if for some reason you want to develop it on the browser and just
eventually ovserve that looks nice in your app `node fuse.js serve`


## Development
Clone this repository, open a console and cd into the `App` directory, and run `node fuse.js`, after that your bundle will be recompiled on source changes, then just press F5 and that's it the app wil load and start
