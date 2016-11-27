Regions are named areas of the UI - for example, 'header', 'body' and 'footer'.

They automatically render any nested views with a matching name. When combined with 'action' and 'navigate' events, they allow a rich UI to be composed with minimal effort.

Nested Views
------------

Using named views, we can map a local name to a global view. For example, the CRUD widget maps user actions to the appropriate view - actions that correspond with local views are rendered into the 'body' region.

Reusing Views
-------------
For example, we might start out by sharing the 'edit' view between the 'create' and 'update' CRUD views. 

    {
        "id": "views:crud_1",
        "widget": "CRUD",
        "views": {
           "create": "update",
           "read": "views:crud_1/read",
           "update": "views:crud_1/edit"
        }
    }

Equally, we may start out with a simple embedded view definition and later re-factor it it's own JSON file as it grows in complexity. 

    {
        "id": "views:crud_1",
        "widget": "CRUD",
        "views": {
           "create": "views:crud_1/create",
           "read": "views:crud_1/read",
           "update": "views:crud_1/update"
        }
    }

All of the logic that depends on 'create' and 'update' views should continue to work too.

Navigation Views
----------------

Regions provide way to swap out one user experience for another, as the user navigates around.

The actual names themselves are specified by each widget's - for example: the Home, Regions and CRUD all support the standard header/body/footer named regions. 

In some widgets, like the Menus, clicking an item invokes a navigate event, where the 'id' attribute of the menu model is used as a view.

In this way a region acts as a view switcher, allowing models within a collection to represent views.

