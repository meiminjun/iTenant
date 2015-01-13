/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

//Ext.Loader.setPath({
//    'Ext': 'touch/src',
//    'Ext.ux': 'app/ux'
//});

Ext.require('iTenants.util.PubOperation');

Ext.require('iTenants.ux.Manager');
Ext.require('iTenants.ux.CustomLoading');
Ext.require('iTenants.ux.ImageViewer');
Ext.require('iTenants.ux.TimePicker');
Ext.require('iTenants.ux.Timefield');

Ext.require('iTenants.ux.override.Component');
Ext.require('iTenants.ux.override.Button');
Ext.require('iTenants.ux.override.Container');
Ext.require('iTenants.ux.override.TitleBar');
Ext.require('iTenants.ux.override.Toolbar');
Ext.require('iTenants.ux.override.field.Field');
Ext.require('iTenants.ux.override.field.DatePicker');
Ext.require('iTenants.ux.override.form.FieldSet');
Ext.require('iTenants.ux.override.navigation.Bar');
Ext.require('iTenants.ux.override.navigation.View');
Ext.require('iTenants.ux.override.picker.Picker');
Ext.require('iTenants.ux.override.picker.Date');
Ext.require('iTenants.ux.override.plugin.ListPaging');
Ext.require('iTenants.ux.override.plugin.PullRefresh');


if(this.isGoogleChrome()){
	initFn();
}else{
	// 加载phonegap device
	document.addEventListener("deviceready", function(){
		document.addEventListener("backbutton", onBackKeyDown, false);
		Cordova.exec(function(result){
			Global.userAccount = result.userName;
			Global.userToken = result.userToken;
			Global.userPwd = result.userPassword;
			Global.appID = result.appID;
			Global.deviceType = result.device;
			Global.longitude = result.longitude;
			Global.latitude = result.latitude;
//			Global.width = result.width;
//			Global.height = result.height;
//			Global.CMAAIOKey = result.CMAAIO;
			Global.pushFlag = result.pushFlag;
			Global.language = result.language == "中文" ? "zh-cn" : "en-us";
			initFn();
		}, null, "UserInfo", "GetUserInfo", []);
	}, false);
}
function initFn(){
	Ext.application({
	    name: 'iTenants',

	    requires: [
            'Ext.MessageBox',
            'iTenants.store.Task',
            'iTenants.store.PL',
            'iTenants.store.BigTask',
            'iTenants.store.Components',
            'iTenants.store.Grouped'
        ],	            
        stores : [
          'Bands',
          'MarketListStore',
          'OrderListEnter',
          'CheckList',
          'InspectionDetailStore'
        ],

	    models: [
			'Task',
			'PL',
			'Components',
			'Band',
			'MarketList',
			'OrderList',
			'CheckList',
			'InspectionDetail'
	    ],
	    views: [
			'Main',
			'ListItem',
			'BandList',
			'BandIndex',
			'BandDetail',
			'MarketList',
			'OrderIndex',
			'OrderList',
			'HandingOver',
			'CheckListPicker',
			'InspectionDetail',
			'DefectView',
			'ModifyView',
			'WorkOrderDetails',
			'WorkOrderDetailsChild',
			'SignatureView',
			'PhotoActionSheet',
			'PostilImgList',
	    ],
	    controllers: [
	        'Main',
	        'OrderIndex',
	        'HandingOver',
	        'NavController',
	        'FileUploadCtr'
	    ],
	    isIconPrecomposed: true,
	    launch: function() {
	    	navCtr = this.getApplication().getController('NavController');
	    	mainCtr = this.getApplication().getController('Main');
	    	orderIndexCtr = this.getApplication().getController('OrderIndex');
	    	handingOverCtr = this.getApplication().getController('HandingOver');
	    	fileUploadCtr = this.getApplication().getController('FileUploadCtr');
	    }
	});
}

function isGoogleChrome() {
	// ios
	if (Ext.os.is.iOS) {
		return false;
		// android
	} else if (Ext.os.is.Android) {
		return false;
	} else {
		return true;
	}
}
