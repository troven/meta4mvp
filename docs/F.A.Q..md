**Who is Meta4 aimed at?**

Our goal is to help people create useful apps without having to resort to low-level programming. 

If you know a little HTML - then you can build an app. Just learn the basic JSON syntax and play with the examples.

**Aren't they other tools that do this?**

We believe there is a sweet-spot between a static (or HTML) wireframe and building an app using lower level tools such as NodeJS, Python or Ruby. 

There are some commercial services that provide drag-n-drop app building (coming soon to meta4 :-) but they don't let you go native if you need to. They are usually lock you into that platform.

**Does meta4 impose a limit on my ambitions?**

Hopefully not, the basic structure of models, views and business logic is a proven pattern. 

The recursive and referential nature of the UX JSON objects is a powerful shift. Combined with event-based and action-based scripting, pretty much anything is possible.

And of course, you can also create (or contract someone) to create your own plugins, storage adapters, widgets or APIs. You just need a little Javascript / NodeJS knowledge - and some patience.

**What about APIs?**

Integrating with APIs is increasingly where an sophisticated, modern app derives it's power. Meta4 makes it easy to integrate Node Machine plugins or build your own with a few lines of Javascript.

**Can I build my own Widgets?**

Please do. It's fairly straightforward, take at look at meta4ux/src/static/js/ux/Views/Template.js for inspiration. 

**Why Backbone & Marionette?**

Both libraries are light weight and strive to be un-opinionated. We also knew and trusted them. 

**Why not use [insert your pet library] ...?**

We have no axe to grind, and will actively integrate other technologies as time permits.

In fact, the basic meta4 architecture allows many components, including Views & Models, etc to be mixed & matched, ripped & replaced.
 
