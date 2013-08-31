/**
 * contra.js - The true Prototype-based OOP in JS!
 * 
 * @version 0.1.1
 * @author  Alex Shvets www.github.com/quadroid
 * @see     www.github.com/quadroid/contrajs
 * 
 * @this    {Object} Prototype
 * @returns {Object} Clone of Prototype
 */
Object.prototype.constructor = function cloneThis(/** Object.ObjLiteral */properties){
    function This(properties){
        for(var key in properties) this[key] = properties[key];
    }
    this.constructor = function(properties){
        if(this === this$) return new This(properties);
        else  return  cloneThis.call(this, properties);
    };
    var this$ = This.prototype = this.constructor.prototype = this;
    return new This(properties);
}
/** @example

/// class
var duck$ = {
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

*/
