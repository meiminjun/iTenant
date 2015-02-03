Ext.define('iTenants.store.InspectionDetailStore', {
	extend: 'Ext.data.Store',
	requires: [
		'Ext.data.proxy.Ajax',
		'Ext.data.reader.Json',
		'iTenants.model.InspectionDetail'
	],
	config: {
		storeId: 'inspectionDetailStore',
//		autoLoad: true,
		model: 'iTenants.model.InspectionDetail',
		proxy: {
			type: 'ajax',
			url: 'resources/data/GetProjectList.json',
			reader: {
				type: 'json',
				rootProperty: 'rows'
			}
		},
		listeners: [{
			fn: 'loadData',
			event: 'load'
		}]
	},
	loadData: function(store, records, successful, operation, eOpts) {
//		console.log("asdf" + records);
	}
});