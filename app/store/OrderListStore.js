/*
 * OrderListEnter 工单列表 传入store
 * author : luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.store.OrderListStore', {
    extend: 'Ext.data.Store',
    config: {
    	model: 'iTenants.model.OrderList',
    	storeId: 'orderListStore',
		autoLoad : false,
		pageSize : 10,
		proxy : {
			type : 'ajax',
			url : 'resources/data/GetMarketWorkOrder.json',
			startParam : false,
			limitParam : 'PageSize',
			pageParam : 'currentPage',
			timeout : 50000,
			reader : {
				type : 'json',
				rootProperty : 'rows',
				totalProperty : 'totalCount'
			}
		},
    }
});