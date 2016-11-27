meta4 employs a declarative approach to constructing interactive software. You describe what you want to achieve, and let meta4 worry about the 'how'.

With meta4 you can build rich client Javascript apps armed with nothing more than a text editor and some guy called JSON.

You can find out more by reading <a href="UX---User-Experience">User Experience</a>. 

Why does meta4 exist?
---------------------

We wanted a quick way to sketch user interfaces. We wanted our clients to be able to experiment with UI ideas whilst we worked on deeper problems. 

Our goal was to assist development teams to expose ideas to stakeholders quickly, by providing a rapid prototyping framework that did not require any/much custom coding.

Our hypothesis was that JSON was expressive enough to represent quite complex applications as a wireframe - but it would need a little help to become interactive.

Of course it had to be a single-page application, it needed to be fluid & responsive. It needed to work via the browser or on a mobile/tablet via Cordova. Any data that it captures should be retained. Perhaps, even the user's click stream should be recorded and analysed.

Whilst inevitably some opinions and conventions had to be baked-in, our goal was to minimise them, provide a clean declarative syntax and reserve tons of flexibility.

Once you've achieved your market fit / minimal valuable product (MVP) - your technical budget and strategy may likely evolve away from meta4.

When you do, we want your investment in business logic to be easily ported.

But, right now ... it's all about <a href="time to value">time to value</a>. 


Executable Wireframes
---------------------

We label our applications as 'wireframes' because they are amazingly helpful tools to communicate between stakeholders & demonstrate progress during the formative stages of a new project. 

With meta4, you can have something substantial working after only a hour or two of tinkering. 

From there, your wireframes can evolve rapidly taking shape with each use case, user journey and stakeholder requirement.


To MVP and Beyond
-----------------

Your wireframes will quickly grow into a useable prototype, all the while your "source" is simply a set of JSON files that can be easily read and understand by business analysts, power users, UX designers, and other knowledge worker in your team.

We quickly realised that we could inject behaviour at runtime, and create executable wireframes. With a little styling, we found we could build sophisticated applications just using our JSON syntax - with very little coding.

However, unlike traditional wireframes meta4 apps can create standalone, usable and valuable tools or even products in themselves.

As a bonus, we wanted to be able to store our JSON (and therefore our application) in a database, index it with a search engine, and (re)generate it in batch or interactively - perhaps by interrogating the schema of a legacy SQL database.

Related Packages
----------------
**meta4ux** is the client-side engine that renders the app's User Experience.

**meta4node** is the NodeJS engine that powers a light-weight web-based API server.

**meta4beta** combines the client & server with examples & demonstrations.

To get started, download <a href="https://github.com/troven/meta4beta">meta4beta</a> and follow the simple instructions.

Dependencies & Libraries
------------------------

**Backbone**    A light weight data modelling library. 

**Marionette**  A Backbone based view and user interaction library. 

**Underscore**  A light weight swiss army knife, great collection handling tools.

**jQuery**      So ubiquitous, it's nearly as common as Javascript. 

Special thanks to: Jeremy Ashkenas, Derek Bailey, John Resig. we're not worthy.