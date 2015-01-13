Ext.define('iTenants.store.MarketListStore',{
	extend:'Ext.data.Store',
	requires:[
		'Ext.data.proxy.Ajax',
		'Ext.data.reader.Json',
		'iTenants.model.MarketList'
	],
	config: {
		storeId:'MarketListStore',
		autoLoad: true,
		model:'iTenants.model.MarketList',
		proxy: {			
			type:'ajax',
			url:'resources/data/GetProjectList.json',
			reader: {
				type:'json',
				rootProperty:'rows'
			}
		},
		listeners:[{
			fn:'loadData',
			event:'load'
		}]
	},
	loadData:function(store,records,successful,operation,eOpts) {
//		console.log(records);
	}
});
