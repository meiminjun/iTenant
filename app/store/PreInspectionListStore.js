/**
 * 内检历史汇总store
 * @class iTenants.store.PostilImgList
 * @author duwei
 * @date 2014-12-30
 */
Ext.define('iTenants.store.PreInspectionListStore', {

    extend: 'Ext.data.Store',

    config: {
    	model: 'iTenants.model.PreInspectionList',
	    storeId: "preInspectionListStore",
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
			url : 'resources/data/PreInspectionList.json',
			timeout : 50000,
			reader : {
				type : 'json',
				rootProperty : 'rows',
				totalProperty : 'totalCount'
			}
		},
    }
});