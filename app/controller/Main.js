/**
 * main控制器
 * @author duwei/luyifan
 * @date 20141115
 */
Ext.define('iTenants.controller.Main', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			main : 'main',
			marketlist:'marketList[itemId=marketList]'
		},
		control: {
			'main':{
				show:'showFun'
			},
			'accordionlist[itemId=basic]': {
				leafitemtap: 'onLeafItemTap'
			},
			'accordionlist[itemId=decorate]': {
				leafitemtap: 'onLeafItemTap'
			},
			'accordionlist[itemId=paging]': {
				leafitemtap: 'onLeafItemTap'
			},
			'bandList[itemId=bandList]': {
				itemtap: 'bandListItemTap'
			},
			'marketList[itemId=marketList]': {
				itemsingletap: 'jumpToOrderIndex'
			}
		}
	},
	/**
	 * 初始化
	 */
	init: function() {
		// 获取用户选择的语言缓存信息
		iTenants.util.PubOperation.initLanguage();
	},
	showFun:function(obj,e,eOpts) {
		var main = this.getMain(),marketList = this.getMarketlist(),store = Ext.getStore('marketListStore');
		// ajax or set store
		var param = {
			ADAccount: Global.userAccount,
            Token: Global.userToken,
            GPSLongitude: Global.longitude,
            GPSLatitude:Global.latitude,
            language:Global.language
		};
		// set Global param
//			Global.proListPm = param;
		
		iTenants.util.PubOperation.pubListLoad(store, param, true, true, 'marketList',function(){
//				console.log("---------回调----"+rows);
		});
	},
	/**
	 * 首页返回至AIO
	 *
	 * @param obj
	 * @param e
	 * @param eOpts
	 */
	mainBackBtnTapFun: function(obj, e, eOpts) {
		if (iTenants.util.PubOperation.isGoogleChrome()) {
			Ext.Msg.alert('homeBack');
		} else {
			PhoneGapAPI.exit();
		}
	},
	/**
	 * index list item tap event
	 * @param obj
	 * @param index
	 * @param target
	 * @param record
	 * @param e
	 * @param eOpts
	 */
	jumpToOrderIndex: function(obj, index, target, record, e, eOpts) {
		var me = this,
			className = e.target.className;
		
		//TODO:已经移除详情
		if(className == 'detailImg'){
			navCtr.pushToNext('iTenants.view.ProjectDetail', function(view) {
				iTenants.util.PubOperation.showLoadMask();
				view.down('titlebar').setTitle(record.get('MarketShortName'));
				
				if(!view.getComponent('projectDetailChild')){
					view.add([{
						xtype : 'container',
						scrollable: {
					        directionLock: true,
					        direction: 'vertical'
					    },
						flex : 9,
						itemId : 'projectDetailChild',
						items : [{
							xtype : 'container',
							layout : 'hbox',
							height : 90,
							items : [ {
								xtype : 'container',
								name:'picPanel',
								flex : 3,
								style : 'text-align:center;padding-top:12px;',
								tpl : '<img width="66" height="66" src="{Image}" />'
							}, {
								xtype : 'container',
								flex : 7,
								name:'conPanel',
								style : 'padding-top:12px;',
			//					data : {MallName : 'Tampines Mall',Address : '4 Tampines Central 5  Singapore 529510'},
								tpl : '<div style="color:#1c4603;font-size:17px;">{MarketShortName}</div>' +
									  '<div style="color:#878787;font-size:15px;margin-top:5px;">{Address}</div>'
							} ]
						},{
							xtype : 'container',
							height : 100,
							items : [{
								xtype : 'button',
								width:'140px',
								centered : true,
					        	ui : 'customBtn',
					        	style : 'margin-top:36px;',
								locales : {
									text : 'projectDetail.contactMallBtnText'
								},
								handler: function(){
									me.makingCallFn(record.get('BusinessManagerTEL'));
								}
							}]
						}]
					}]);
					view.down('container[name=picPanel]').setData(record.data);
					view.down('container[name=conPanel]').setData(record.data);
				}
				
				Ext.Function.defer(function(){iTenants.util.PubOperation.hideLoadMask();},250);
			});
		}else{
			navCtr.pushToNext('iTenants.view.OrderIndex', function(view) {
				orderIndexCtr.orderIndexInit(record);
			});
		}
	},
	/**
     * 拨打电话
     * @param tellNum
     */
    makingCallFn : function(tellNum){
		if (Ext.os.is.Android) {
			if(!Ext.isEmpty(tellNum)){
				navigator.app.loadUrl('tel:'+ tellNum, { openExternal:true } );
			}
		}else if(Ext.os.is.iOS){
			if(!Ext.isEmpty(tellNum)){
				window.location.href = 'tel:' + tellNum;
			}
		}
    }
});
