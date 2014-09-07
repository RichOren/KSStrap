KSStrap
=================

This is a CSS Design Workflow that can make it easier for UX Designers, UX/UI Developers and Front-End Developers can use to collaborate on component development in a Agile and Lean UX environment.

KSStrap utilizes a **living styleguide** made from [kss-node](https://github.com/hughsk/kss-node) styleguide.
"kss-node" is a NodeJS implementation of [Knyle Style Sheets](https://github.com/kneath/kss) (KSS).
kss-node enables us to generate a beatiful styleguide for CSS, it also suports LESS, SASS and Stylus. 

This implementation uses LESS and is a fully customizable styleguide using the world famous framework [Bootstrap](http://getbootstrap.com/).

It is poosible to add and build your own custom icon fonts using the [IcoMoon App](https://icomoon.io/app/). This example is using [FontAwesome 4.2.0](http://fortawesome.github.io/Font-Awesome/) with **IcoMoon's Happy Faces** added as an example of how to customize and mix fonts. You use the 




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
All you have to do is make sure you have Node JS installed, Grunt CLI and Bower the run the command below:

```
npm install
```
```
bower install
```

```
grunt
```
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
