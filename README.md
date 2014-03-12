Reconstructor
========

In this framework classic JS constructor used in different way. Now it is [factory function⠙][1].  
See [Fluent JavaScript – Three Different Kinds Of Prototypal OO⠙][2]
<iframe src="//player.vimeo.com/video/69255635" width="500" height="281" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

[1]: http://ericleads.com/2013/01/javascript-constructor-functions-vs-factory-functions/
[2]: http://ericleads.com/2013/02/fluent-javascript-three-different-kinds-of-prototypal-oo/

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
    var duck = {
        constructor: reconstructor,
        name: "Duck",
        quack: function(){return "Quack!"}
    };
    
    /// inheritance
    var talkingDuck = duck.constructor({
        quack: function(){
            return duck.quack.call(this) + " My name is " + this.name + "!";
        }
    });
    
    /// multiple inheritance 
    var flyable = {fly: Function()},
        teleportable = {teleport: Function()};
    //  by mixin
    var superDuck = talkingDuck.constructor(flyable, teleportable, {
        name: "Super Duck"
    });
    //  by prototype chain
    var superDuck = talkingDuck
        .constructor(flyable)
        .constructor(teleportable)
        .constructor({
            name: "Super Duck"
        });
    
    /// private
    function makeFlyable(){
        var action = "Flying...";
        this.fly = function(){return this.name +": "+ action};
    }
    function makeTeleportable(){
        var action = "Teleporting...";
        this.teleport = function(){return this.name +": "+ action};
    }
    var superDuck = talkingDuck.constructor(makeFlyable, makeTeleportable, {
        name: "Super Duck"
    });
    
    /// instantiation, forget about the `new` operator
    var donald = talkingDuck.constructor({name: "Donald"});
    ///
    donald.quack() +" "+ duck.isPrototypeOf(donald);
```

----
