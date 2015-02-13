/*
 * checkList 检查表单 model
 * author : luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.model.PreInspectionList', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
	        {
	        	name : 'groupID',
	        	type : 'auto'
	        },
	        {
	        	name : 'groupName',
	        	type : 'auto'
	        },
            {
                name: 'CheckPoint'
            },
            {
                name: 'CheckPointDes'
            },
            {
            	name: 'Status'
            },
            {
            	name: 'CheckItemID'
            },
            {
            	name: 'CheckPointID'
            },
            {
            	name: 'imgs'
            },
            {
            	name: 'imgs_s'
            }
        ]
    }
});