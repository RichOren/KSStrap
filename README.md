KSStrap
=================

This is a CSS Design Workflow that was designed to make it easier for UX Designers, UX/UI Developers and Front-End Developers to collaborate on component development in an Agile and Lean UX environment. It will also help individual designers/develolpers to stay organized, work efficiently, and reduce the repitition of many day to day tasks.

KSStrap utilizes a **living styleguide** made from [kss-node](https://github.com/hughsk/kss-node) styleguide.
"kss-node" is a NodeJS implementation of [Knyle Style Sheets](https://github.com/kneath/kss) (KSS).
kss-node enables us to generate a beatiful styleguide for CSS, it also suports LESS, SASS and Stylus. 

[Demo Styleguide](http://richoren.github.io/KSStrap/)

This implementation uses LESS, it's a fully customizable styleguide using the world famous framework [Bootstrap](http://getbootstrap.com/). KSStrap was inspired by this project and I learned alot trying to figure out what these Super Talented people were doing. You guys rule!

Create custom and/or multi-themed Websites & Web Apps.
--------
All you need to do is get familiar with the [variables.less](https://github.com/RichOren/KSStrap/blob/master/content/less/variables.less) file. 

It is currently based on [Bootstrap's 3.2.0 variables.less](https://github.com/twbs/bootstrap/blob/master/less/variables.less) file. It has been modified to create a custom themed bootstrap, and supports the extention of Bootstrap's [Base CSS](http://getbootstrap.com/css/), [Components CSS](http://getbootstrap.com/components/) and [Javascript CSS](http://getbootstrap.com/javascript/).

To get more familiar with these variables you can check out the [Customize Bootstrap](http://getbootstrap.com/customize/).

**Coming Soon** - Adding an example website in addition to the [styleguide example](https://github.com/RichOren/KSStrap/tree/master/styleguide).

Custom Icon Fonts
--------
It is poosible to add and build your own custom icon fonts using the [IcoMoon App](https://icomoon.io/app/). This example is using [FontAwesome 4.2.0](http://fortawesome.github.io/Font-Awesome/) with **IcoMoon's Happy Faces** added as an example of how to customize and mix fonts. 

You can import the [KSStrap.selection JSON file](https://github.com/RichOren/KSStrap/blob/master/content/kss/template/public/fonts/KSStrap.selection.json) into the [IcoMoon App](https://icomoon.io/app/), customize, add your own glyphs and then download your changes. 

I will do a complete tutorial when I get the time on how this is done. It is super easy though to figure out this [TOTALLY AWESOME app](https://icomoon.io/app/). The people over at [IcoMoon](https://icomoon.io/) are super creative and very generous for creating such an awesome tool.



Download
--------
**[KSStrap](https://github.com/RichOren/KSStrap/zipball/master.zip)** [zip] or

```
git clone git://github.com/RichOren/KSStrap.git
```


License
-------
This template is under the [MIT License](https://github.com/htanjo/kss-node-template/blob/master/LICENSE).



Installation
------------
All you have to do is make sure you have [Node JS](http://nodejs.org/), [Grunt CLI](http://gruntjs.com/getting-started) and [Bower](http://bower.io/) installed then run the commands below:

```
npm install
```
This will install the Grunt Dependencies needed to complete the KSStrap workflow tasks. 

```
bower install
```
This will install the Bower Dependencies (Bootstrap - FontAwesome) and source files needed for the KSStrap workflow tasks. 
```
grunt
```
This will run the default Grunt task which will run through the KSStrap workflow and create:

######Style Sheets for your website or web app.

* content/styles/KSStrap.css - Debug
* content/styles/KSStrap.css.map - [Map](https://developer.chrome.com/devtools/docs/css-preprocessors)
* content/styles/KSStrap.min.css - Production

######Styleguide Website for your website or web app.

* styleguide/index.html - Home and overview of the style guide.
* styleguide/section-xxx.html - Each section of the Styleguide.
* styleguide/public/ - Assets for the Styleguide website. 

Formating the TechDoc's
------
kss-node is almost compatible with KSS documentation.
But kss-node can depend on only comment in source code because it has `Markup:` directive for showing the sample markup.

Here is a basic format for kss-node documentation.

```css
/*
Buttons

A majority of buttons in the site are built from the same base class.

:hovered    - Highlight the button when hovered.
:disabled   - Make the button change appearance to reflect it being disabled.
.primary    - Indicate that the button is the primary feature of this form.

Markup:
<a href="#" class="button {$modifiers}">Link Button</a>
<button class="button {$modifiers}">Button Element</button>

Styleguide 1.1
*/
.button {
  ...
}
.button:hover {
  ...
}
.button:disabled {
  ...
}
.button.primary {
  ...
}
```

kss-node also supports CSS preprocessors such as LESS, SASS and Stylus.
You can use the `//` comment section for writing your document.

```less
// Buttons
//
// A majority of buttons in the site are built from the same base class.
//
// :hovered    - Highlight the button when hovered.
// :disabled   - Make the button change appearance to reflect it being disabled.
// .primary    - Indicate that the button is the primary feature of this form.
//
// Markup:
// <a href="#" class="button {$modifiers}">Link Button</a>
// <button class="button {$modifiers}">Button Element</button>
//
// Styleguide 1.1
.button {
  ...
  &:hover {
    ...
  }
  &:disabled {
    ...
  }
  .primary {
    ...
  }
}
```

As you see in the above samples, kss-node comment has some blocks.
From the top,

1. Element's title
2. Element's description
3. List of modifier classes or pseudo-classes
4. HTML markup
5. Reference to the element's position in the styleguide

And each description supports the Markdown writing.


More example code
-----------------
This document is also created by using KSStrap.
