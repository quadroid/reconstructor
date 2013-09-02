/**
 * reconstructor.js
 * 
 * @version 0.2.1-alpha
 * @author  Alex Shvets www.github.com/quadroid
 * @see     www.github.com/quadroid/reconstructor
 * 
 * @this    {Object} Prototype
 * @returns {Object} Clone of Prototype
 */
this.reconstructor = function reconstructor(/** (Object|Function)... */){
    
    if(typeof this === 'object' && this !== window ){
        var _proto = this;
        var _Class = function(){};
        _Class.prototype = _proto;

        _proto.constructor = factory;
//        var args = arguments;
//        _proto.constructor = function(){
//            return factory.apply(this, arguments.concat(args));
//        };
        
//    }else if(typeof this === 'function'){
//        _proto = this.prototype;
//        _Class = this;
//
//        _Class.constructor = factory;
//        //return factory;

    }else{
        _proto = Object.prototype;
        _Class = Object;
    }
    
    //factory.Class = _Class;
    //factory.prototype = _proto;
    var _factories = [], objects = [];
    for(var i=0, count=arguments.length; i<count; i++){
        var arg = arguments[i];
        switch(typeof arg){
            case 'object':
                //for(var key in arg) _proto[key] = arg[key];
                objects.push(arg);
                break;
            case 'function':
                _factories.push(arg);
                break;
        }
    }
    var instance = factory.apply(_proto, objects);
    if(_Class = Object) instance.constructor = factory;
    return instance;

    function factory(/** (Object|Function)... */){
        if(this === _proto){
            var instance = new _Class;
            var allArgs  =  _factories.length ? _factories.concat( Array.prototype.slice.call(arguments) ) : arguments;
            for(var i=0, count=allArgs.length; i<count; i++){
                var arg = allArgs[i];
                switch(typeof arg){
                    case 'object':// properties
                        for(var key in arg) instance[key] = arg[key];
                        break;
                    case 'function':// initialize
                        arg.call(instance, _proto);
                        break;
                }
            }
            return instance;
        } else return reconstructor.apply(this, arguments);
    }
}
