In meta4, a UX is actually a JSON definition of an application - encapsulating the views, models, templates and scripts.

The UX JSON definitions is typically served to the browser client from the meta4apis back-end. 

On your disk, an application is just a bunch of .json, .js and .html files that get packaged up together.

Defining a User Experience
--------------------------

In meta4, JSON is king. To define a working application, we need nothing more than a few JSON files.

It is definitely possible to build a useful CRUD-based business application with nothing more than a handful of JSON files. 

Throw in a few custom scripts, call out to a few micro-services - and you have a richly functional application with very little code.

<a href="Views.md">Views & Templates</a>
------------------

At it's simplest, a view displays some HTML. Usually, by rendering an HTML template. A view is defined by a simple JSON object. 

meta4 widgets act upon these view definitions to create a responsive, interactive user interface. 

When the meta4 begins, the <a href="Home-View.md">Home View</a> is rendered first. It's the responsibility of the Home View to take care of the user.


<a href="Models.md">Models & Collections</a>
--------------------

Models are usually gathered into Collections. They represent the entities, or data records of your problem domain. Models may be used without any formal schema.

A Model definition describes the data schema, fields, validation rules and any properties needed to configure the underlying storage engine.

<a href="Events.md">Events & Scripts</a>
----------------

Both Views and Models emit and consume events. These events drive the interaction between the components.

User actions can also trigger events, specifically the 'action' and 'navigate' events are most useful.
Business logic can be attached to events to provide your apps functionality and power your user experience.


UX Lifecycle
------------

It all starts with a web page, we'll call it "index.html". That page defines stylesheets, and any static HTML layout. 

Then it loads a Javascript file called "index.js" - which is used to boot-up the meta4 UX single-page application (SPA).

Once the meta4 UX scripts have loaded, it requests a UX definition from the server. 

This JSON file contains the Views, Models, Templates & Scripts that represent your application. 

Based on that definition, meta4 downloads any plugins needed by the views, or the models.

To improve performance, view definitions, templates and scripts are pre-compiled.

Next, any data models that need to be "prefetch"ed are downloaded. Now, the application is ready for use. Typically, all of this takes place within a few seconds. 

Finally, the 'home' view is rendered. This initial view is the entry point for your user experience.

