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