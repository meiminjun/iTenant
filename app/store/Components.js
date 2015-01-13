Ext.define('iTenants.store.Components', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'iTenants.model.Components'
    ],

    config: {
        defaultRootProperty: 'items',
        model: 'iTenants.model.Components',

        // XXX: AccordionList Now show data from JSON
        proxy: {
            type: 'ajax',
            url: 'resources/data/componentsData.json'
        }
    }

});
