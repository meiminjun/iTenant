Ext.define('iTenants.store.BigTask', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'iTenants.model.Task',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        defaultRootProperty: 'items',
        model: 'iTenants.model.Task',

        proxy: {
            type: 'jsonp',
            url: 'http://kawanoshinobu-api.herokuapp.com/task',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
    }

});
