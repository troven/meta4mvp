Most applications need to create, read, update & delete (CRUD) data. Meta4 includes a CRUD widget that provides the necessary plumbing to make wire-framing simple.

The CRUD view is fairly complex, and uses Nested Views to build out the user interface.

It incorporates the Region widget behaviour - so it may have a 'header', 'body' and 'footer' sub-view.

The 'read' view is used as the 'body' when no explicit body view is defined.

CRUD View
---------

A CRUD view introduces a number of new capabilities. The first, Nested Views, 

    { "id": "views:my_view_2",
      "widget": "CRUD",
      "collection": "models:my_list",
      "views" {
        "create": "views:my_view_2/edit",
        "read": "views:my_view_2/read",
        "update": "views:my_view_2/edit"
     }
    }

The sub-views are rendered when the related action is triggered. You'll note that the "views" and the "collection" are resolved automatically.

Embedded Views
--------------

We've re-used the "views:my_view_2/edit" for both the Create and Update parts of the CRUD user interface. They're both imagined to render a <a href="Form">Form</a> definition that is capable of editing the underlying model.

The "read" sub-view is rendered first. The "collection" from the CRUD is passed into the 'read' view definition.
The "create" and "update" views are triggered by 'action' events. 

Clicking on a model within the 'read' view will trigger the 'update' action event. The CRUD view will replace the CRUD's 'body' region with the associated view.

Using the reference approach it's possible to build modular applications, re-use views and collections in multiple places.


