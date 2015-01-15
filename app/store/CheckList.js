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
	    data:[
      		{
    			state: 0,
    			name:'Type & Cat: (TBA by Project)'
    		},
    		{
    			state: 0,
    			name:'Dimension and specification: (TBA by Project)'
    		},
    		{
    			state: 0,
    			name:'Section diagram for a typical dry partition: (TBA by Project) <br /> Layer of coating:(TBA by Project) <br /> Color Code: (TBA by Project)'
    		}
	    ]
    }
});