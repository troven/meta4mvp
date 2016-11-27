The "Form" widget is another major component that encapsulates a lot of behaviour. It's job is to render a web form containing multiple fields, apply validate and display appropriate prompts to the user.

    {
        "id": "views:my_view_2/edit",
        "widget": "Form",
        "schema": {
            "label": {
                "id": "label",
                "editor": "Text",
                "label": "Model Label",
                "required": true
            }
        }
    }

The Form widget requires a "schema" definition to function. It follows a similar structure used to define a <a href="Models">Model's</a> schema.

The field's "id" is optional, if ommited it will use it's key.
The "editor" field references a set of form field widgets.
The "widget" property can also be used to declare a read-only view

The form will fire "change" events when any attribute is updated, and specific "change:{{schema.id}}" events for each field ("change:label", in the above example). 

The "required" property makes the property mandatory. It's a short cut for the explicit validation.

Form Field Widgets
------------------

There are many types of Field editors available, including:

    "Text"      - a simple text box
    "LongText"  - a longer text box
    "TextArea"  - a text area
    "Date"      - a simple date picker
    "Password"  - a password text box
    "Number"     - a text box with Numeric validation
    "Currency"   - a text box with Currency validation
    "URL"       - a text box with URL validation
    "Email"     - a text box with Email validation
    "HTML"      - a rich HTML editor
    "Boolean"   - a Boolean drop down
    "Button"    - a Button that triggers an Action declared by it's 'id'
    "Select"    - a drop down based on a "collection"
    "Tags"      - a text box based on a "collection"
    "Upload"    - a file upload box with automatic uploading


Validation
----------

Field definitions can have a "validators" object that defines more sophisticated validation.

    "timeOfDay": {
        "label": "timeOfDay",
        "editor": "Text",
        "validators": ["required", "time"]
    }

In the above example, we've defined a field that is represented by a simple "Text" editor.

However, we have enriched it with two validators - enforcing a mandatory time in the format: "hh:mm" or "hh:mm:ss".

Custom Validation
-----------------

A custom event could also be attached using the "when" syntax, then custom logic can be triggered. If you implement custom validation logic, you should trigger a "valid" or "invalid" event.

    "timeOfDay": {
        "label": "timeOfDay",
        "editor": "Text",
        "validators": ["required", "time"],
        "when": {
            "change": "scripts:validate/custom.js"
        }
    }

The "./scripts/validate/custom.js" file might look something like this:

    var value = this.model.get(this.options.id)
    if (value=="oops") this.trigger("invalid", { message: "oops" })
    



