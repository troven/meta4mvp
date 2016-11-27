Simple Views
------------

At it's core, a view simply renders some HTML. A user interface is composed of views that collaborate with your models & business logic to create your unique user experience.

Like everything in meta4, a view is described using nested JSON objects:

    { "id": "views:my_view",
      "widget": "Template",
      "template": "Hello World"
    }

The above snippet creates a unique view "views:my_view" that will be rendered using the
"Template" widget. The widget simply renders the text "Hello World".

The only mandatory element is the "widget" attribute. Most Widget require additional attributes to govern their visuals and any embedded behaviour.

Model Views
-----------

Each view is bound to a data model. By default, a view uses it's own configuration as it's data model.

The "template" parameter allows you to use Moustache {{var}} syntax to render the data represented by the model:

    { "id": "views:my_view_2",
      "widget": "Template",
      "hello": "Hello World",
      "template": "{{hello}}"
    }


Collection Views
----------------

Frequently, you want to render a list of related items. Collection views accept "collection" of models and will (usually) render each one sequentially.

In this example, we'll use the "ActionList" widget. It repeats the "child.template" for each item in the JSON collection.


    {   "id":       "views:my_list",
        "widget":   "ActionList",
        "child": {
            "template": "{{label}}"
        },
        "collection": [
            { "id": "item1", "label": "Item 1",
            { "id": "item2", "label": "Item 2"
        ]
     }


Nested Views
------------

A more complex UI can be composed by nesting views. Navigation widgets such as Home, Tabs, Regions and CRUD support nested views.

The "Regions" widget is the simplest example, it defines three named areas of the UI: "header", "body" & "footer". 

The Regions widget is rendered as HTML placeholders - the widget automatically renders the corresponding named-view into it's related region:

    {   "id":       "views:my_region",
        "widget":   "Regions",
        "views": {
            "header": "views:my_view",
            "body": "views:my_list",
            "footer": "views:my_view_2"
        }
    }


You notice that we re-used our previous definitions by referencing their "id" instead of including the JSON directly. 

In this way, you can define your UI as separate elements and include them dynamically in other parts of your app. Other views can be defined, by they won't be rendered automatically.


Navigation Views
----------------

To demonstrate navigation, we'll use the "Tabs" widget. Each "tab" is defined as a separate view. So we'll re-use the nested "views" syntax.



    {   "id":       "views:my_tabs",
        "widget":   "Tabs",
        "views": {
            "Simple": "views:my_view",
            "Model": "views:my_view_2",
            "Collection": "views:my_list"
        }
    }

By default, the Tabs will be labelled using their 'key'. To rename a tab, the "title" attribute of the view will be preferred, followed by the "label" field.

Similar to the Regions widget, Tabs define named regions. In this case, the 'body' region will be updated with the matching view when you click on a tab.

For small, self contained nested views, you can embed the view definitions inside the JSON "views" object itself, or combine embedded and referenced views in the same definitions. 


Working with Views
------------------

A view 'id' should be unique within the application and may be alphanumeric with basic punctation - but definitely <i>no spaces, no @ symbols, and moustaches }{</i>.

By convention, all of our views are prefixed with 'views:'. It's not strictly necessary, but namespaces may place a bigger role in future versions of meta4.

A views 'id's makes it easy to re-use definitions from one part of the app to be re-used in another. However, it's good practice to define each major view in it's own JSON file.

At runtime the view's "id" is what governs it's identity - not the actual file name. That said, it makes for saner maintenance when matches it matches the path within your project's source folder - for example: views:demo/my_tabs would be stored in ./src/views/demo/my_tabs.json
