Ext.define('iTenants.store.Task', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'iTenants.model.Task'
    ],

    config: {
        defaultRootProperty: 'items',
        model: 'iTenants.model.Task',

        // XXX: AccordionList Now show data from JSON
        proxy: {
            type: 'ajax',
            url: 'resources/data/testData.json'
        }
    }

});
