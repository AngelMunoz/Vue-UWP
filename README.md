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

## About this demo
We as Javascript developers, wanted ways to create desktop applications using what we know, it's not like C# is bad nor C++ or other solutions out there, but we feel like we should be able to do it within javascript right? well Electron came out and while many praise it (I'm a fan actually) some other hate it, because of security reasons, because performance problems, because chromium, etc.

Well Here you go, you don't need any of electron stuff to compile a desktop application for windows (I know there is no cross compile to Mac or Linux, exe, but that's another topic), you have full CSP by default, and all the security locks in place you need, Also take in mind that this is not new stuff, this has been around since Windows 8, while in those days we didn't have tools like webpack 4.0 or fuse-box (in this case which you can completely replace if you want to) which made this javascript/~~metro~~ ~~modern~~ Universal Apps setup quite weird I've been experimenting myself with WinJS in other repos and I can see why many people chose not to use it, It's just too raw for a web developer (too much DOM stuff) when you already had stuff like angularjs even early stages of react and vue.


## Screenshots
So if you are still unsure let me show you some screen shots of what I mean

This is on a Long dead Windows Phone (emulator in this case but I did test in one I had dusting around)
![Phone emulator :sadface:](https://github.com/AngelMunoz/Vue-UWP/blob/master/App/images/emulator.png)

The rest are on a Laptop, but basically apply to ano other form factor of Windows targets (Tablets, Desktops, Laptops, I think even XBOX and Holo lens stuff, Surface Hub, you know windows stuff)

![The App Just Being the App](https://github.com/AngelMunoz/Vue-UWP/blob/master/App/images/pc.PNG)
![File Picker](https://github.com/AngelMunoz/Vue-UWP/blob/master/App/images/pc2.PNG)
![Native Volume Controls](https://github.com/AngelMunoz/Vue-UWP/blob/master/App/images/pc3.PNG)



## Fuse.js
This similar to the [Aurelia UWP] Sample I did, since this (as well as the other) uses a bundler, 
you need to keep the build running in the background, and thanks to the [fuse-box] guys, this is quite easy

`node fuse.js`

and for production builds just run `node fuse.js prod` if for some reason you want to develop it on the browser and just
eventually ovserve that looks nice in your app `node fuse.js serve`


## Development
Clone this repository, open a console and cd into the `App` directory, and run `node fuse.js`, after that your bundle will be recompiled on source changes, then just press F5 and that's it the app wil load and start
