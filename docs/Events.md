Both Views and Models emit and consume events during regular operation. 

By listening to events, your app can respond and adapt appropriately.

Meta4 UX is based on Backbone & Marionette, so all of those events are available as defaults.

On top of that, each Widget will emit it's own specific events.

In most cases, the useful events are called "action" and "navigate".

Widget Logic
------------

A Widget enables interaction by triggering events at useful times.

When the user interacts with your application, you want to perform some custom processing, perform a calculation, make a decision, etc. You want to execute a script in response to some event.

Events are mapped to named scripts using the "when" JSON object.

Furthermore, some Widgets respond directly to 'navigate' and 'action' events.

The <a href="Home">Home</a>, <a href="Regions">Regions</a> and <a href="CRUD">CRUD</a> components can process 'navigate' events. Other Widgets such as <a href="Menus">Menus</a> fire  'navigate' events.

User intentions are carried by 'action' events, perhaps from clicking / selecting some (part of a) view.

It's the responsibility of the widget to ensure that useful actions are fired in response to meaningful user operations.
 
User Actions
------------

So a user's action triggers an events. In most widgets, clicking on something - an icon, button or link - will trigger a corresponding 'action' or 'navigate' event. 

Business logic can be attached to any events, internal, user actions or navigations. This makes it nearly trivial to enrich your apps' functionality and empower a compelling and powerful user experience.

It's worth noting that actions trigger two events - the second event is the action's 'id' prefixed by "action:". In this form, it's easy to act upon user actions and they don't conflict with other internal events.


Custom Logic
------------

By combining and configuring Widgets your app can progress a long way before you any custom logic. 

Inevitably, you'll need to inject your opinions and business rules into the application. 

For this, meta4 allows you to map events to scripts - the basic concept is "event happens" then "do something useful"

The "when" syntax is a JSON object that maps a widget's local event to the application's global script library:
 
	{
		"id": "views:test",
		"template": "<div data-action='hello'>Hello</div>",
		"widget": "Template",
		"when": {
			"action:hello": "scripts:debug.js"
		}
	}

We'll render a simple template, the [data-action] is triggered on a click, therefore 'hello' action event is fired, then ultimately, meta4 will catch the event, lookup then execute the 'debug.js' script.

Model collections also support the "when" syntax, which is useful for computing properties when their dependent values change, when it's stale, or refreshed from the server, etc.

Your scripts have full access to the underlying state and behaviour of your components. When executed, the script runs in the context (this) of the source component. In most cases, that will be the view/model instance that triggered it.

The source of the event will be provided in the 'it' attribute. As usual in Javascript, the 'arguments' property provides an array-like list of all the parameters passed by to the trigger.

	# debug.js
	console.debug("[meta4event] view: %o action: %o args: %o", this, it, arguments)

Of course, carefully written scripts can be re-used in many situations within your application - even when triggered by different events, in different circumstances.

Standard Events
---------------

Both Models and Views are capable of emitting events, and they frequently do so.

**Views**: 
	initialize, before:render, render, show, destroy

**Models**:
	initialize, change, sync, add, delete, valid, invalid, destroy

By binding to events using the "when" syntax, your app can take an appropriate course of action.

A special "all" event is available for debugging, you can easily watch all events for a components by including the following snippet:

	"when": {
		"all": "console.debug('%o %s %o', this, it, arguments)"
	}

Yes, you can also include raw Javascript as the script, but it's rarely a good idea for anything more a one or two liner. Better to catalog all of your scripts inside a meaningful folder structure, the same as your models & views, then simply refer to them by their 'id'.