class vConsole{
    constructor(opt){
        if (!!VConsole.instance && VConsole.instance instanceof VConsole) {
            console.debug('[vConsole] vConsole is already exists.');
            return VConsole.instance;
        }
        VConsole.instance = this;
        this.option = {
            defaultPlugins: ['system', 'network', 'element', 'storage'],
            log: {},
            network: {},
            storage: {},
        };

        this._addBuiltInPlugins();
    }

    _addBuiltInPlugins(){
        this.addPlugin(new VConsoleDefaultPlugin('default', 'Log'));
    }
    addPlugin(){
        
    }
}