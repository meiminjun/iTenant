/*
 * checkList 检查表单 model
 * author : luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.model.CheckList', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'name'
            },
            {
            	name: 'state'
            }
        ]
    }
});