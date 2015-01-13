/*
 * OrderListEnter 工单列表 传入store
 * author : luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.store.OrderListEnter', {
    extend: 'Ext.data.Store',
    config: {
	    model: 'iTenants.model.OrderList',

	    data:[
	    {
	    	name: 'aaa',
	    	date: '2014-12-12',
	    	number: '1-1',
	    	state: 0
	    },
	    {
	    	name: 'aaa',
	    	date: '2014-12-12',
	    	number: '1-1',
	    	state: 0
	    },
	    {
	    	name: 'aaa',
	    	date: '2014-12-12',
	    	number: '1-1',
	    	state: 0
	    }
	    ]
    }
});