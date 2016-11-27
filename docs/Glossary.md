Meta4 introduce new terms and re-uses common terms, in a nuanced way. Let's get some clarity on what we mean:

* **Widget** - a User Interface component - packaged or custom. e.g. <a href="Form">Form</a> or <a href="CRUD">CRUD</a>. It corresponds to a Backbone view.
* **View** - an instance of a widget with corresponding meta-data. Also, a unique instance of a Backbone view.
* **Model** - meta-data that describes some data, it's schema plus connection information to databases & APIs if necessary.
* **Event** - a notification from a component that may be acted upon
* **Action** - a special event that reflects a user intentions - such as clicking a button.
* **Navigate** - a special event that reflect the user's desire to change views
* **Render** - to produce an HTML representation of a view
* **Show** - implies a render, then attach HTML to the browser's DOM.
* **Region** - area of the screen that can 'show' views auto-magically. Often used to render 'header', 'body', 'footer' blocks.
* **Home** - a special widget responsible for top-level navigation.
* **UX** - a definition of models, views, templates and scripts that comprise a modular part of your application.
* **meta4** - a JSON-based framework for prototyping, deploying and running mobile, desktop and cloud applications.




