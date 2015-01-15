Ext.define('iTenants.model.MarketList', {
	extend: 'Ext.data.Model',
	requires:['Ext.data.Field'],
	config: {
		fields: [{
			name:'ProjectCode'
		},
		{
			name:'ProjectName'
		},
		{
			name:'Description'
		},{
			name:'PassedPercent'
		},{
			name:'ProjectImage'
		},{
			name:'num'
		}]
	}
});