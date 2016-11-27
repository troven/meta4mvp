Collections represent your data. They are collective nouns - products, people, places. This is your problem domain's data model. Your database, if you prefer.

We talk about Collections of Models. A Model is an instance of a collection's data - an individual person, place or product.

Each collection is described by some meta-data and populated with zero or many instances. Some meta-data applies to the collection, and some to each instance of the model.

An optional "schema" gives your data some structure. It describes the fields in more detail. Meta4 favours schema-free databases AKA NoSQL.

Persistence
-----------

Often, collections are persisted to a storage system but can also be declared with hard-coded data.

Collections are flexible in their choice of storage technologies. By default, meta4 includes a MongoDB-like database called <a href="http://lokijs.org/">LokiJS</a>. Internally, they are called "Adapters".

The internal LokiJS database is suitable for thousands of models. It's great for small teams or during development. Switching between data stores is relatively painless.

** Local - client-side local data (menus, actions, dropdowns)

** Default - remote data using LokiJS (your domain data)

** Mongo - remote data using MongoDB Adapter on the server

** Others - if you need other stores such as OrientDB, CouchDB, SQL or ElasticSearch  - just ask nicely.

Schema 
------

Remember, you can omit model-level schema and it will be inferred from the View schema. For prototyping this is probably the best idea. It's easy to retrofit the model-level validation once your creation is working.

Any validation included in the schema is enforced by the client (and soon, the server) regardless of how it is modified.

Take care that any Widgets (e.g. Form) editing the data also share the same validation rules. If not your models may be invalid - and therefore not save, but the Form will not notify the user (yet).

Static Data
------------

Most applications have relatively static data such as menu lists, drop down options or action lists.

In the early stages your instance data can be declared as a "collection" Array inside the view defintion itself.

As your application grows, you might need to re-use the same data elsewhere. Then you'd move your static data into the model definition itself.

Client Events
-------------

On the UX client, they are implemented as <a href="http://backbonejs.org/">Backbone Collections</a>, inheriting their basic behaviours and triggering from standard Backbone events.

You can use the [[Events]] "when" syntax to hook-up your own logic when data changes, or is reloaded from the server. 

		"when": {
			"change:qty": "scripts:cart/updateTotals.js"
		}

The Collection itself and each schema field honour the "when" syntax to bind custom business logic to your data at the appropriate level of granularity.

You can hook into specific fields, such as "change:qty" to trigger a re-calculation of an order's total.

Server Events
-------------

Coming soon

An Example
----------

Of course, they are declared using JSON objects. This example represents a static "data" model. 

NOTE: Because of the "data" array changes will not be persisted even if you change the "type" from "Local" to a remote persistance adapter such as "Default".

A custom script is triggered when any field value changes. It also includes validation including a short-hand for mandatory/optional fields.


	{ 
        "id": "things",
		"type": "Local",
		"isClient": true,
		"isServer": false,
		"when": {
			"change": "scripts:things/change.js"
		},
		"schema": {
            "label": {
                "label": "Label",
			     "type": "string",
				 "validation": ["required"]
		    },
            "comment": {
                "label": "Comment",
			     "type": "string",
				 "required": false
		    }
		},
		"data": [
			{ "id": "t1", "label": "Thing One", "comment": "Comment One" },
			{ "id": "t2", "label": "Thing Two", "comment": "Comment Two" }
		]
	} 

** NOTE: Collection IDs do not use the models: namespace, as with views:, templates: and scripts: - this won't change. It makes business logic code so much cleaner.

