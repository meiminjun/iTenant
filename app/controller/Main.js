/**
 * main控制器
 * @author duwei/luyifan
 * @date 20141115
 */
Ext.define('iTenants.controller.Main', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {},
		control: {
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
		var className = e.target.className;
		
		if(className == 'detailImg'){
			navCtr.pushToNext('iTenants.view.ProjectDetail', function(view) {
				view.down('titlebar').setTitle(record.get('ProjectName'));
			});
		}else{
			navCtr.pushToNext('iTenants.view.OrderIndex', function(view) {
				orderIndexCtr.orderIndexInit();
				var me = this,
					store = Ext.getStore('InspectionDetailStore'),
					params = {
						ADAccount: "huangcheng1",
						Token: "R3TWGNeql8k3bamyXzhURhwbbIxi6z56"
					},
					url = "resources/data/GetProjectList.json";
	//			var checkDetail = view.getComponent('checkDetail'),
	//				latestReply = view.getComponent('latestReply'),
	//				historyList = view.getComponent('history').down('list');
				//测试用例：		
				//			var list = view.getComponent('itemid');
	
				//	    	iTenants.util.PubOperation.showLoadMask();
				var resultFun = function(responseText) {
					if (Ext.isEmpty(responseText)) {
						store.setData(null);
					} else {
						var resJson = Ext.JSON.decode(responseText);
						if (resJson.result) {
							console.log("获取到数据" + resJson);
							//						checkDetail.setData(resJson.rows[0]);
							//						latestReply.setData(resJson.rows[0]);
							//						historyList.setData(resJson.rows);
							//测试用例
							//						list.setData(resJson.rows);
						} else {
							iTenants.util.PubOperation.showTips('emptyDataMsg', "normal");
						}
					}
				};
				failureFun = function() {
					iTenants.util.PubOperation.showTips('requestErrorMsg', 'failure');
				};
				// ajax
				iTenants.util.PubOperation.ajaxFun(url, params, resultFun, failureFun, true, false, 'InspectionDetailStore', 'GET');
	
			});
		}
	},
	/*跳转到工单检查填写表单*/
	jumpToDefect: function() {
		navCtr.pushToNext('iTenants.view.DefectView', function(view) {
			// 组件定义事件委托
			view.setListeners([{
				fn: 'getPhoto',
				event: 'tap',
				delegate: '#getPhoto',
				args: [],
				scope: fileUploadCtr
			}]);
		});
	}
});
