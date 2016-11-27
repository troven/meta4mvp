Most meta4 widgets have minimal styling by default. The convention is to use bootstrap classes to markup the generated HTML. 

Bootstrap Themes
----------------

Bootstrap provides a well supported, semantic (and sane) naming convention for the common parts of modern UIs. 

It's simple to style a meta4 application, simply drop your favourite Bootstrap-compatible theme into the ./src/theme/ directory and adjust your ./src/index.html file as needed.


CSS Styles
----------

The "css" attribute is used for custom styling. The string of CSS classes are appended to those defined by the widget itself. The CSS attribute be added to any view definition. 

A good practice is to add a semantic CSS class to each widget, that identifies the type of entity that it represents. For example, 'projects' in the various screens that display project related views.

In this way, you can over-ride the global Bootstrap CSS styles for each section of your applications.


Backbone Support
----------------

Those familiar with Backbone views will understand what the "tagName" and "className" attributes represent. Widgets define their preferred tagName and className.

For the uninitiated, the "tagName" (often a &lt;div&gt;) is used as the root element of the widget's HTML. The "className" defines the CSS class(es) that will applied to that element. 

The actual dynamic part of a view will be rendered inside that root element. In most cases, it probably wise to leave them alone.