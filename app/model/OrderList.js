/*
 * orderList 检查表单 model
 * author : luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.model.OrderList', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'name'
            },
            {
                name: 'date'
            },
            {
                name: 'number'
            },
            {
            	name: 'state'
            }
        ]
    }
});