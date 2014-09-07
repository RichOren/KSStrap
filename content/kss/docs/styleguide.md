KSStrap
=================

This is a **living styleguide** made from [kss-node](https://github.com/hughsk/kss-node) styleguide.
"kss-node" is a NodeJS implementation of [Knyle Style Sheets](https://github.com/kneath/kss) (KSS).
kss-node enables us to generate a beatiful styleguide for CSS, of course that suports LESS, SASS and Stylus. 

This implementation uses LESS and you are able to Fully Theme the styleguide using the famous framework [Bootstrap](http://getbootstrap.com/). 

It is poosible to add and build your own custom icon fonts using the [IcoMoon App](https://icomoon.io/app/). This example is using [FontAwesome 4.2.0](http://fortawesome.github.io/Font-Awesome/) with **IcoMoon's Happy Faces** added as an example of how to customize and mix fonts. You use the 




Download
--------
**[kss-node-template](https://github.com/htanjo/kss-node-template/archive/master.zip)** [zip] or

```
git clone git://github.com/htanjo/kss-node-template.git
```

**Note:** This package contains only template files.
You have to install kss-node at first.


How to apply this template
--------------------------
Description


License
-------
This template is under the [MIT License](https://github.com/htanjo/kss-node-template/blob/master/LICENSE).



Installation
------------
As kss-node is provided as a npm package, you can install by just typing `npm install kss`.
If you want to use the command line interface, install it globally.

```
npm install
```
```
bower install
```

```
grunt
```
Format
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
This document is also created by using kss-node.
You can see the source code in the [demo directory](https://github.com/htanjo/kss-node-template/tree/master/demo/src).