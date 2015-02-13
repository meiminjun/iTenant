/*
 * checkList 检查表单 model
 * author : luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.model.Appendix', {
	 extend: 'Ext.data.Model',
     config: {
         fields: [{
             name: 'tableName',
             type: 'string'
         },{
      	   name : 'column1',
      	   type : 'string'
         },
         {
      	   name : 'column2',
      	   type : 'string'
         },
         {
      	   name : 'column3',
      	   type : 'string'
         },
         {
      	   name : 'title',
      	   type : 'string'
         },
         {
      	   name : 'num',
      	   type : 'string'
         },
         {
      	   name : 'name',
      	   type : 'string'
         },
         {
      	   name : 'imgUrls',
      	   type : 'auto'
         },
         {
      	   name : 'imgUrl',
      	   type : 'string'
         },
         {
      	   name : 'type',
      	   type : 'string'
         },
         {
      	   name: 'history',
      	   type: 'string'
         },
         {
        	name : 'group',
        	type : 'auto'
         },
         {
         	name : 'columnID',
         	type : 'auto'
         },
         {
          	name : 'columnTitle',
          	type : 'auto'
         }]
         
     }
});