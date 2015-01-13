Ext.define('iTenants.store.Grouped', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'iTenants.model.Task'
    ],

    config: {
        defaultRootProperty: 'items',
        model: 'iTenants.model.Task',

        grouper: {
            groupFn: function(item) {
                return item.get('text')[0];
            }
        },

        folderSort: true,

        proxy: {
            type: 'ajax',
            url: 'resources/data/groupedData.json'
        }
    },

    //@Override
    updateFolderSort: function(folderSort) {
        return;
    }

});
