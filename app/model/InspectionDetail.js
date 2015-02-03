Ext.define('iTenants.model.InspectionDetail', {
	extend: 'Ext.data.Model',
	requires:['Ext.data.Field'],
	config: {
		fields: [{
			name:'Comments'
		},
		{
			name:'Modifier'
		},{
			name:'ModifierTime'
		},{
			name:'Status'
		},{
			name:'ImagePath'
		},{
			name:'Thumbnail'
		},{
			name:'PathArrayString'
		},{
			name:'CheckPoint'
		},{
			name:'CheckPointDes'
		}]
	}
});