Every meta4 application starts with a Home view. By convention, this is given the 'id' of "views:home".

The Home view is rendered as soon as meta4 is loaded by the client - whether web browser, phone gap or Cordova.

The 'Home' widget provides common scaffolding for most UI use cases, including headers, footers and navigation.

Home Widget
-----------

The Home widget is a navigation view, so it expects to have a nested "views" definition.


	{
		"id": "views:home",
		"widget": "Home",
		"views": {
			"header": {
				"template": "Welcome to meta4"
			},
			"body": {
				"css": "jumbotron",
				"template": "<h1>Hello World</h1>"
			},
			"footer": {
				"template": "Powered by Meta4"
			}
		}
	}

<a href="Regions.md">Regions</a>
-------

The Home widget will automatically render the header, body & footer. See <a href="Regions.md">Regions</a> for more information.

<a href="Events.md">Events</a>
------

The Home widget also listens for 'navigate' events emitted by the nested views. 

If that event targets a known view, it will be de-referenced and rendered in the 'body' region.

<a href="Navigation.md">Navigation</a>
----------

In this way, you could include a 'MenuButton' or 'MenuList' widget in the header, and it will refresh the body with the appropriate view.

Using nested views and navigate events allows you to compose sophisticated applications containing dozens or hundreds of discrete views.

