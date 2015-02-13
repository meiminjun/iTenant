/*
 * checkList 检查表单 store
 * author : luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.store.CheckList', {
    extend: 'Ext.data.Store',
    config: {
	    model: 'iTenants.model.CheckList',
	    storeId: "checkList",
		autoLoad : false,
		grouper: {
		    groupFn: function(record) {
				return record.get('groupName');
		    },
		    sortProperty : 'groupID'
		},	
		sorters :[{
	    	property : "CheckPointID",
	    	direction: "ASC"
	    }],
		proxy : {
			type : 'ajax',
			url : 'resources/data/GetCheckPointList.json',
			timeout : 50000,
			reader : {
				type : 'json',
				rootProperty : 'rows'
			}
		},
    }
});