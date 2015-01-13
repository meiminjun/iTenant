Ext.define('iTenants.store.PL', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'iTenants.model.PL'
    ],

    config: {
        defaultRootProperty: 'items',
        model: 'iTenants.model.PL',

        // XXX: AccordionList Now show data from JSON
        proxy: {
            type: 'ajax',
            url: 'resources/data/plData.json'
        }
    }
});
