
function defer() {
    var deferred = {};
    var promise = new Promise(function(resolve, reject) {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });
    deferred.promise = promise;
    return deferred;
}

class Mtop{
    constructor(options){
        this.options = options;
        this.middleware = []
    }

    use(mid){
        this.middleware.push(mid)
    }
    __processRequestMethod(next){
        console.log('__processRequestMethod');
        next()
    }
    __processRequestType(next){
        console.log('__processRequestType')
    }
    __processToken(next){
        console.log('__processToken')
        next()
    }
    __processRequestUrl(){
        console.log('__processRequestUrl')
        next()
    }
    __requestJSONP(){
        console.log('__requestJSONP','curl===>','http://www.tb.test.com?name=joy&age=18&data=')
        const script = document.createElement('script')
        script.src = curl;
        script.async = true;
    }
    __sequence(fnArray){
        var preProcessor = [];
        var postProcessor = [];
    
        function add(fn) {
            if (fn instanceof Array) {
                fn.forEach(add);
            } else {
                var pre = defer();
                var post = defer();
                var next;
    
                preProcessor.push(function () {
                    pre = defer();
    
                    next = fn.call(that, function (result) {
                        pre.resolve(result);
                        return post.promise;
                    }, function(errMsg) {
                        pre.reject(errMsg);
                        return post.promise;
                    });
    
                    if (next) {
                        next = next['catch'](function(e) {
                            pre.reject(e);
                        });
                    }
    
                    return pre.promise;
                });
    
                postProcessor.push(function (result) {
                    post.resolve(result);
                    return next;
                });
            }
        }
    
        fnArray.forEach(add);
    
        var promise = ready;
        var processor;
    
        while (!!(processor = preProcessor.shift())) {
            promise = promise.then(processor);
        }
    
        while (!!(processor = postProcessor.pop())) {
            promise = promise.then(processor);
        }
    
        return promise;

    }
    request(){
        console.log('开始发请求===>request');
        this.__processRequestMethod()
        this.__processRequestType()
        this.__processToken()
        this.__requestJSONP()
        // this.__sequence([
        //     this.__processRequestMethod,
        //     this.__processRequestType,
        //     this.__processToken,
        //     this.__requestJSONP,
        // ])
    }

}

const mtop = new Mtop()
mtop.request()