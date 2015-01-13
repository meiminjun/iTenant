Ext.define('iTenants.model.InspectionDetail', {
	extend: 'Ext.data.Model',
	requires:['Ext.data.Field'],
	config: {
		fields: [{
			name:'ProjectStatus'
		},
		{
			name:'Description'
		},{
			name:'LastCheckUserName'
		},{
			name:'time'
		},{
			name:'ProjectImage'
		}]
	}
});