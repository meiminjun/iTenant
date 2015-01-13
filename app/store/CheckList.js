/*
 * checkList 检查表单 store
 * author : luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.store.CheckList', {
    extend: 'Ext.data.Store',
    storeId: "checkList",
    config: {
	    model: 'iTenants.model.CheckList',

	    data:[
      		{
    			state: 0,
    			name:'asdfgdfgas'
    		},
    		{
    			state: 0,
    			name:'asdfgddfdfgas'
    		},
    		{
    			state: 0,
    			name:'asdfgdfgas'
    		}
	    ]
    }
});