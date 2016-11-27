Almost application requires some structured navigation. These are captured by the MenuButton and MenuList widgets. It should be no surprise, that Menu widgets are specialised Collection widgets.

    {
        "id": "views:btn_test",
        "widget": "MenuButton",
        "collection": [
            { "id": "views:my_view", "label": "View 1" },
            { "id": "views:my_view_2", "label": "View 2" }
        ]
    }

Menu Models
-----------

In this example, we have inlined the definitions. The list of items rendered by the Menu widgets are declared in a "collection" array. 

In production, you may wish to define a Model. You can then use it by referencing the Collection that represents your menu.

        "collection": "menu_main"

Menu Events
-----------

All Menu widgets fire "select", "action" and "navigate" events whenever an option is chosen. 

They **do not** invoke the actual navigation process directly.

Instead, navigation-aware widgets like <a href="Home">Home</a> and <a href="Regions">Regions</a> listen to their sub-views for those events and invoke the corresponding view.

Given that events bubble up through the view hierarchy, that means our two collaborating widgets - the trigger source (menu) and the listener (navigator), must share a common ancestor.

Since in practice, this should happen auto-magically. All of our application views are children of the 'views:home' view, and that is rendered by the <a href="Home">Home</a> widget, which handles navigation events and displays the related view.

To distinguish one 'action' or 'navigate' from another, a second parameter is passed that gives the action a unique name.

Menu Action
-----------

As with all action events, a secondary event is fired that is named after the original action prefixed by 'action:'. 

E.g. A 'download' action would trigger an 'action:download' event as well as an 'action' event. 

This makes actions easier to process using the "when" syntax.

        "when": {
            "action:views:my_view": "scripts:debug.js",
            "action:views:my_view_2": "scripts:debug.js"
        }
