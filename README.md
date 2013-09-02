ContraJS
========

### Try the true prototype-based OOP

With this framework you can easilly create and manipulate objects without custom constructors, instead of classic js way,
where you should define a constructor for every object (that you want to use as prototype), even if you didn't need it.
It's possible to build and maintain extremely **large numbers of "classes" with comparatively little code**.

**It's trivial to create new "classes"** - just clone (construct) the object and change a couple of properties and voila... new "class".

**It's really class-free**: ConraJS produces objects (prototypes), not function-constructors, unlike all other class-producing tools (`Ext.define`, `dojo.declare` etc).

Read more:

- [Advantages of prototype-based OOP⠙](http://programmers.stackexchange.com/questions/110936/what-are-the-advantages-of-prototype-based-oop-over-class-based-oop#answers-header)
by Mike Anderson
- [Does JavaScript need classes? (in russian)⠙](http://habrahabr.ru/post/175029/) [(robot translation)⠙](http://translate.google.com/translate?hl=&sl=ru&tl=en&u=http%3A%2F%2Fhabrahabr.ru%2Fpost%2F175029%2F)
by Me (Alexander Shvets)
- [Myth: JavaScript needs classes⠙](http://www.2ality.com/2011/11/javascript-classes.html)
by [Dr. Axel Rauschmayer (University of Munich)⠙](http://rauschma.de)
- [JS Objects: De”construct”ion⠙](http://davidwalsh.name/javascript-objects-deconstruction)
by Kyle Simpson
- [Stop Using Constructor Functions In JavaScript⠙](http://ericleads.com/2012/09/stop-using-constructor-functions-in-javascript/)
by [Eric Elliott (Adobe)⠙](http://ericleads.com/about/)
- [Constructors Are Bad For JavaScript⠙](http://tareksherif.ca/blog/2013/08/constructors-are-bad-for-javascript/)
by Tarek Sherif

### How to use

```javascript
    /// class
    var duck$ = {
        constructor: reconstructor,
        name: "Duck",
        quack: function(){return "Quack!"}
    };
    
    /// inheritance
    var talkingDuck$ = duck$.constructor({
        quack: function(){
            return duck$.quack.call(this) + " My name is " + this.name + "!";
        }
    });
    
    /// instantiation, forget about the `new` operator
    var donald = talkingDuck$.constructor({name: "Donald"});
    ///
    donald.quack() +" "+ duck$.isPrototypeOf(donald);
```

----
If you like the idea, plese look at the extended version of this framework www.github.com/quadroid/clonejs
