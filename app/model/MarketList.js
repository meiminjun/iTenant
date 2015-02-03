Ext.define('iTenants.model.MarketList', {
	extend: 'Ext.data.Model',
	requires: ['Ext.data.Field'],
	config: {
		fields: [{
			name: 'MarketShortName'
		}, {
			name: 'Address'
		}, {
			name: 'TasksCount'
		}, {
			name: 'Image'
		},{
			name:'BusinessManagerTEL'
		},{
			name:'MallCode'
		},{
			name:'ID'
		}]
	}
});

//Address: "Cheng Du No 388",
//City: "Cheng Du",
//MarketName: "Tian Fu",
//MarketShortName: "Tian Fu",
//dDistance: 9827.623449353572,
//TasksCount: 3,
//ModifierTime: "2015-01-20",
//Modifier: "huangcheng1",
//CreateTime: "2015-01-16",
//Creator: "huangcheng1",
//BusinessManagerTEL: "13900000000",
//Image: "http://192.168.23.1:777/\upload\image\2015_1\e44a494a-af89-438a-bc39-04f81e7cf7bb.jpg",
//Status: 1,
//Longitude: 104.0701,
//Latitude: 30.60225,
//ID: 1,
//MallCode: "9901",
//UDSID: "333"