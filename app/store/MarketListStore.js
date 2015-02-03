Ext.define('iTenants.store.MarketListStore',{
	extend:'Ext.data.Store',
	requires:[
		'Ext.data.proxy.Ajax',
		'Ext.data.reader.Json',
		'iTenants.model.MarketList'
	],
	config: {
		storeId:'marketListStore',
		autoLoad: false,
		model:'iTenants.model.MarketList',
		proxy: {			
			type:'ajax',
//			extraParams: {
//              ADAccount: Global.userAccount,
//              Token: Global.userToken,
//              GPSLongitude: Global.longitude,
//              GPSLatitude:Global.latitude,
//              language:Global.language
//          },
			url:'resources/data/GetMarketList.json',
//			url:Global.domain+'/api/GetMarketList.ashx',
			timeout : 50000,
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
//		console.log("-------------------------------------"+records+"---------"+eOpts);
		if (successful && operation.getResponse()) {
			iTenants.util.PubOperation.onlineLoad("marketList",operation.getResponse());
		}
	}
});
