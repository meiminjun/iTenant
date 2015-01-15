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
	    	name: 'Adidas',
	    	date: '2014-11-10',
	    	number: '01-01',
	    	state: 0
	    },
	    {
	    	name: 'Nike',
	    	date: '2014-11-09',
	    	number: '02-02',
	    	state: 0
	    },
	    {
	    	name: 'Macdonalds',
	    	date: '2014-11-08',
	    	number: '03-03',
	    	state: 0
	    },
	    {
	    	name: 'Burger King',
	    	date: '2014-11-07',
	    	number: '04-04',
	    	state: 0
	    }
	    ]
    }
});