/**
 * handingover页面控制器
 * @desc handingover页面
 * @author luyifan
 * @date 20141229
 */
Ext.define('iTenants.controller.HandingOver', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
        	handingOver: 'handingOver',
        	handingOverTitle: 'handingOver titlebar[name=title]',
        	emailBtn : 'handingOver button[name=emailBtn]',
        	plusBtn: 'handingOver button[name=plusBtn]',
        	checkList: 'checkList',
        	handingDetail: 'checkList container[name=handingDetail]',
        	handingBottom: 'checkList container[name=bottom]',
        	checkListPicker: 'checkListPicker',
        	examinePicker: 'picker[name="examine"]',
        	checkListMenu: 'checkListMenu',
			preInspection: 'preInspection',
			preInspectionList: 'preInspectionList'
		},
		control: {
        	checkList: {
        		itemsingletap: 'checkListTapFn'
        	},
        	plusBtn: {
        		tap: 'showMenuFn' 
        	},
        	preInspectionList: {
				itemsingletap: 'preInspectTapFn'	
			},
			'accordionlist[itemId=imageGridList]': {
                leafitemtap: 'postilImgListTap'
            }
		}
	},
	/**
	 * handingover页面初始化
	 * @param record
	 * */
	handingOverInit: function(record) {
    	if(!record){
    		record = this.orderRecord; 
    	}else{
    		this.orderRecord = record;
    	}
    	var me = this,
    		handingOver = me.getHandingOver(),
    		handingOverTitle = me.getHandingOverTitle(),
    		checkList = Ext.create('iTenants.view.CheckList');
    	
    	handingOverTitle.setTitle(record.data.OrderType === "1" ? Global.getTipsMsg('handingOver') : Global.getTipsMsg('takingOver'));
    	me.ShopID = record.data.ShopID;
    	me.WorkID = record.data.WorkID;
    	
    	
    	me.returnHandingOverData();
    	
    	handingOver.add(checkList);
	},
	/*
	 * handingOver初始化数据
	 * */
	returnHandingOverData: function() {
    	var me = this,
			handingDetail = me.getHandingDetail(),
			checkList = me.getCheckList(),
			handingBottom = me.getHandingBottom(),
			store = Ext.getStore('checkList');
		
		handingDetail.setData(me.orderRecord.data);
		//me.getExamineBtn().setHidden(me.orderRecord.data.Status === "1" ? true : false);
		
		store.getProxy().setUrl('resources/data/GetCheckPointList'+ me.orderRecord.data.LightStatus +'.json');
		//Ext.Ajax.abort(store.getProxy().url);
		iTenants.util.PubOperation.pubListLoad(store, {
			WorkID: me.orderRecord.data.WorkID
		}, true, true, 'orderList',function(response){
		}, checkList, false);  
	},
	/*
	 * 检查checklist列表是否处于都已完成状态
	 * */
	isAllChecked: function() {
		var store = Ext.getStore('checkList'),
			state = true;

		state = store.findBy(function(record) {
			if (record.data.Status != '1') {
				return true;
			} else {
				return false;
			}
		});

		if (state >= 0) {
			iTenants.util.PubOperation.showTips('checkListNotAll', 'normal');
			return false;
		} else {
			return true;
		}

	},
	/*
	 * refNode 元素 是否包含 otherNode
	 * */
	contains: function(refNode, otherNode) {
		if (typeof refNode.contains === 'function') {
			return refNode.contains(otherNode);
		} else if (typeof refNode.compareDocumentPosition === 'function') {
			return !!(refNode.compareDocumentPosition(ohterNode) & 16);
		} else {
			var node = otherNode.parentNode;
			do {
				if (node === refNode) {
					return true;
				} else {
					node = node.parentNode;
				}
			} while (node !== null);
			return false;
		}
	},
	/**
	 * 点击checkList表单元素
	 * */
	checkListTapFn: function(list, index, target, record, e, eOpts) {
    	var me = this,
			className = e.target.className;
		
		me.checkRecord = record;
		if(className == 'next'){
			// 跳转到检查列表详情
			me.jumpToInspect(record,index);
		}else{
	    	me.showCheckListPicker(record);
		}


	},
	/**
	 * 显示checkList picker
	 * */
	showCheckListPicker: function(record){
		var me = this,
			clp = me.getCheckListPicker();
		
		if(clp){
			clp.destroy();
		}
		clp = Ext.create('iTenants.view.CheckListPicker');
    	if(me.orderRecord.data.LightStatus == '1'){
    		clp.down('button[name=defectBtn]').setHidden(true);
    	}else{
    		clp.down('button[name=defectBtn]').setHidden(false);
    	}
    	
		Ext.Viewport.add(clp);  
    	navCtr.nowPicker = {
    		obj: clp,
    		hide: function(){
    			this.obj.destroy();
    		}
    	};
    	clp.down('label').setHtml('<p>'+record.data.CheckPointDes+'</p>'+ record.data.CheckPoint.replace(/\n/gi,'<br />'));
    	clp.show();
	},
	/**
	 * 隐藏checklist picker
	 * */
	hideCheckListPicker: function() {
    	var me = this,
			clp = me.getCheckListPicker();
		if(clp){
			clp.destroy();
		}
	},
    /*
     * checkListPicker点击OK按钮执行事件
     * */
    checkListPickerOkFn: function(){
    	var me = this;
    	me.hideCheckListPicker();
    	if(me.orderRecord.data.LightStatus == '1'){
    		me.goToModifyView();
    	}else{
    		me.jumpToDefect(true);
    	}
    },
    /**
     * checkListPicker点击defect found 按钮执行事件
     * */
    checkListPickerDefectFn: function(){
    	var me = this;
    	me.hideCheckListPicker();
    	me.jumpToDefect(false);
    },
	/**
	 * 进入preInspection页面
	 * */
	goToPreInspectionListFn: function() {
		var me = this;
		navCtr.pushToNext('iTenants.view.PreInspection', function(view) {
			me.preInspectInit();
		});
	},
	/*
	 * preInspection页面初始化
	 * */
	preInspectInit: function(){
		var me = this,
			preInspect = me.getPreInspection(),
			list = Ext.create('iTenants.view.PreInspectionList');
		
		preInspect.add(list);
		me.preInspectRefresh();
	},
	/**
	 * preInspection刷新页面
	 * */
	preInspectRefresh: function(){
		var me = this,
			store = Ext.getStore('preInspectionListStore');
    	iTenants.util.PubOperation.pubListLoad(store, {
    		WorkID: me.WorkID
    	}, true, false, 'preInspectionList',function(response){
    		
    	});   		
	},	
	preInspectTapFn : function(list, index, target, record, e, eOpts){
		if(e.target.className !== 'img'){
			return;
		}
		var getIndex = function(obj){
			var parent = obj.parentNode,
				i = 0,
				nowChild = parent.firstElementChild || parent.firstChild;
			while(nowChild != obj){
				
				nowChild = nowChild.nextElementSibling || nowChild.nextSibling;
				if(nowChild.nodeType === 1){
					i++;
				}
			}
			return i;
		};
			var currentIndex = getIndex(e.target);

		fileUploadCtr.viewPic(false, record.data.imgs.join('|'), currentIndex + 1, false);
	},
    /*
     * 显示菜单按钮
     * */
    showMenuFn: function(){
    	var me = this,
    		menu = me.getCheckListMenu();
    	if(!menu){
    		menu = Ext.create('iTenants.view.CheckListMenu');
    	}

		menu.down('container[name=complete]').setHidden(me.orderRecord.data.LightStatus != '1');
		menu.down('container[name=preview]').setHidden(me.orderRecord.data.LightStatus == '1');

		menu.down('container[name=preview] button[name=emailBtn]').setDisabled(me.orderRecord.data.LightStatus == '2');
	
		Ext.Viewport.add(menu);  
    	navCtr.nowPicker = {
    		obj: menu,
    		hide: function(){
    			this.obj.hide();
    		}
    	};
    	menu.show({
			type: 'slideIn',
            direction: 'left',
		});
    },
    hideMenuFn: function(){
    	var me = this,
			menu = me.getCheckListMenu();
		if(menu && !menu.isHidden()){
			menu.hide();
		}
    	//Ext.Viewport.hideMenu('right');
    },
	/**
	 * HandoverForm View
	 * */
	goToHandoverFormFn: function() {
		var me = this,
			lightStatus = me.orderRecord.data.LightStatus;
			
		navCtr.pushToNext('iTenants.view.HandoverForm', function(view) {
			var url = '',
				params = {},
				signRstUrl1 = '',
				signRstUrl2 = '';

			if(lightStatus == "2"){
				url = 'resources/data/HandOverFormP.json';
			}else if(lightStatus == "3"){
				url = 'resources/data/HandOverFormC.json';
				signRstUrl1 = 'resources/images/test/sign_c1.jpg';
				signRstUrl2 = 'resources/images/test/sign_c2.jpg';
			}else{
				url = 'resources/data/HandOverFormR.json';
				signRstUrl1 = 'resources/images/test/sign_r1.jpg';
				signRstUrl2 = 'resources/images/test/sign_r2.jpg';
			}
			
			var resultFun = function(responseText) {
				if (!Ext.isEmpty(responseText)) {
					var result = Ext.JSON.decode(responseText),
						hfc = Ext.create('iTenants.view.HandoverFormContent');
					console.log(result);
					
					hfc.getComponent('hdFormFirstCon').setData(result.hdFormFirstCon);
					hfc.down('hfinspected').setData(result);
					hfc.getComponent('hdFormThirdCon').setData(result.hdFormThirdCon);
					//hfc.down('hfappendix').setData(result);
						 
			        var store = Ext.create('Ext.data.TreeStore', {
			            model: 'iTenants.model.Appendix',
			            defaultRootProperty: 'appendix',
			            root: result
			        });
					hfc.down('accordionlist').setStore(store);
					view.add(hfc);
					
					//set sign
					if(lightStatus != "2"){
						Ext.getDom('signIcon1').style.display = 'none';
						Ext.getDom('signRst1').style.display = 'block';
						Ext.getDom('signRst1').src = signRstUrl1;
						Ext.getDom('signIcon2').style.display = 'none';
						Ext.getDom('signRst2').style.display = 'block';
						Ext.getDom('signRst2').src = signRstUrl2;
					}
				}
			};
			failureFun = function() {
				iTenants.util.PubOperation.showTips('requestErrorMsg', 'failure');
			};
			iTenants.util.PubOperation.ajaxFun(url, params, resultFun, failureFun, true, false, 'getHandOverForm', 'GET');

		}, true);
	},
	/**
	 * 
	 * 
	 * */
	getImgHtml: function(urls){
		console.log(urls);
		var arrs = [];
		Ext.each(urls, function(item){
			arrs.push('<div><img src="'+item+'" /></div>');
		});
		return arrs.join('');
	},
	getHistoryHtml: function(string){
		return string.replace(/\n/gi,'<br />');
	},
	/**
	 * PDF预览
	 */
	goToPDFFn: function() {
		var me = this,
			lightStatus = me.orderRecord.data.LightStatus,
			pdfUrl = '',
			url = '';

		if(lightStatus == '2'){
			pdfUrl = 'resources/data/pdf/Jones2.pdf';
		}else if(lightStatus == '3'){
			pdfUrl = 'resources/data/pdf/TenantA2.pdf';
		}else{
			pdfUrl = 'resources/data/pdf/TenantB2.pdf';
		}
		
		url = Ext.os.is.Android ? '/HandingOverAndroid_UAT/'+pdfUrl : pdfUrl;
		
		PhoneGapAPI.checkAtt(url);
		// 隐藏签名
		me.signatureView.hide();
	},
	/**
	 * 进入批注图片列表
	 * @param viewSpace
	 * @param urls 租户详情获取的批注图纸urls
	 */
	goToPostilImgListFn: function(viewSpace, urls) {
		var me = this;
		navCtr.pushToNext('iTenants.view.PostilImgList', function(view) {
			var store = Ext.create('iTenants.store.PostilImgList'),
				// floorPlan-店铺图纸  ，modifyPostil-外检图纸
				url = viewSpace == 'floorPlan' ? 
					  'resources/data/shopDrawing.json': 
					  'resources/data/PostilDrawing.json';
					  
			if(!view.getComponent('imageGridList')){
				view.add({
					xtype: 'accordionlist',
					store: store,
					headerItemTpl: [
		                '<tpl if="this.isExpanded(values)">',
		                    '<div class="down"></div>',
//		                    '<div <tpl if="values.year">style="font-style:italic;"</tpl>>',
		                    '<div style="font-size:14px;font-weight:bold">',
		                    '{title}</div>',
		                '<tpl else>',
		                    '<div class="right"></div>',
		                    '<div style="font-size:14px;font-weight:bold">',
		                    '{title}</div>',
		                '</tpl>'
		            ].join(''),
					contentItemTpl: [
					    '<div class="postilListItem">',
					    	'<div class="img"><img src="{url}"/></div>',
					    	'<div class="name">{title}</div>',
					    '</div>'
		            ].join(''),
					displayField : 'title',
					useSelectedHighlights: false,
	                showCount: true,
					listConfig: {
						variableHeights : true,
						infinite : true,
						disableSelection : true,
						allowDeselect : false,
						loadingText: false,
						scrollable: {
				            directionLock: true,
				            direction: 'vertical'
				        },
				        cls : 'bgCls'
					},
					flex: 1,
					itemId: 'imageGridList'
				});
			}
			
			//set proxy url
			store.getProxy().setUrl(url);
			iTenants.util.PubOperation.pubListLoad(store, {}, true, false, 'postilImgList',function(response){
				// 图纸列表上级页面
				me.imageGridSuperior = viewSpace;
				// 折叠扩张
				view.getComponent('imageGridList').doAllExpand();
			});
		});
	},
	/**
	 * 图纸点击事件
	 * @param list
	 * @param index
	 * @param target
	 * @param record
	 * @param e
	 * @param eOpts
	 */
	postilImgListTap : function(list, index, target, record, e, eOpts){
		var path = record.get('url'),
			title = record.get('title');
		fileUploadCtr.viewPostilPic(true,path,title,1,true);
	},
	/**
     * 彈出签名页面
     * @param signIconID 签名iconID
     * @param signImgRstID 签名绘制的canvas图片ID
     */
    goToSignatureFn : function(signIconID,signImgRstID){
    	var me = this;
	    if (!this.signatureView) {
			this.signatureView = Ext.widget('signatureView');
		}
		var signatureView = this.signatureView;
		Ext.Viewport.add(signatureView);

		navCtr.nowPicker = {
			obj: signatureView,
			hide: function() {
				this.obj.hide();
			}
		};

		signatureView.show();
		this.clearSignature();
		
		// sign img ID
		me.signIconID = signIconID;
		me.signImgRstID = signImgRstID;
	},
	/**
	 * 清空签名
	 */
	clearSignature: function() {
		var draw = Ext.getCmp('free-paint');
		draw.getSurface().destroy();
		draw.getSurface('overlay').destroy();
		draw.renderFrame();
	},
	/**
     * 保存签名
     */
    saveSignature : function(){
    	 var me = this,
    		 signIconID = me.signIconID,
    	     signImgRstID = me.signImgRstID,
    		 draw = Ext.getCmp('free-paint'),
    	     canvasURL = draw.getSurface().contexts[0].canvas.toDataURL();
    	 
    	 Ext.getDom(signIconID).style.display = 'none';
    	 Ext.getDom(signImgRstID).style.display = 'block';
    	 Ext.getDom(signImgRstID).src = canvasURL;
    	 
    	 me.signatureView.hide();
    },
	/**
	 * 显示邮件按钮picker
	 * */
	showEmailPicker: function() {
		var me = this,
			ep = me.getExaminePicker();
		if (!ep || !ep.hasParent()) {
			ep = Ext.create('Ext.Picker', {
				name: 'examine',
				cls: 'examinePicker',
				hideOnMaskTap: true,
				doneButton: {
					cls: 'btn',
					ui: 'plain'
				},
				cancelButton: {
					cls: 'btn',
					ui: 'plain'
				},
				slots: [{
					title: '',

				}]
			});
		} else {

		}
		navCtr.nowPicker = {
			obj: ep,
			hide: function() {
				this.obj.destroy();
			}
		};
		var tempData = [{
			title: '',
			data: [{
				text: 'Operations Team'
			}, {
				text: 'Leasing Team'
			}, {
				text: 'Finance Team'
			}]
		}];
		ep.setSlots(tempData);
		ep.show();
	},
	/**
	 * 跳转到租户详情
	 * @param dataview
	 * @param index
	 * @param target
	 * @param record
	 * @param e
	 * @param eOpts
	 */
	goToOrderDetails: function(dataview, index, target, record, e, eOpts) {
		var me = this;
		navCtr.pushToNext('iTenants.view.WorkOrderDetails', function(view) {
			// 动态加载子内容
			if (!view.getComponent('workOrderDetailsChild')) {
				view.add([{
					xtype: 'workOrderDetailsChild'
				}]);
			}
			var testJson_p = {
        		unitName : 'Jones Day',
        		businessType : 'Law Firm',
        		tenant_post : 'Tenant’s Representative',
        		tenant_name : 'Stephanie Ng',
        		tenant_mobile : '+65 61231234',
        		tenant_email : 'stephanie@jonesday.com',
				tenant_possessionDate : 'Mar 1 2015',
				tenant_period : '3 years',
				tenant_area : '2000 sq ft',
	    		contacts_marketing : {section : "Marketing",post:"Marketing Manager",name:"Andrew lee",mobile:"+65 61231233",email:"andrew.lee@capitaland.com"},
	    		contacts_assetManagement : {section : "Asset Management",post:"Vice President",name:"Serena Liong",mobile:"+65 61231222",email:"serena.liong@capitaland.com"},
	    		contacts_propertyServices : {section : "Property Services",post:"Assistant Vice President/Building Manager",name:"Victor Leung",mobile:"+65 61231225",email:"victor.leung@capitaland.com"},
	    		contacts_leaseAdministration : {section : "Lease Administration",post:"Senior Manager",name:"Chan Li Li",mobile:"+65 61231228",email:"chan.lili@capitaland.com"}
        	},testJson_c = {
				unitName : 'Tenant A',
	    		businessType : 'Fund Management',
	    		tenant_post : 'Tenant’s Representative',
	    		tenant_name : 'David Lee',
	    		tenant_mobile : '+65 61231238',
	    		tenant_email : 'david.lee@tenanta.com',
				tenant_possessionDate : 'Jan 15 2015',
				tenant_period : '3 years',
				tenant_area : '1500 sq ft',
	    		contacts_marketing : {section : "Marketing",post:"Marketing Manager",name:"Andrew lee",mobile:"+65 61231233",email:"andrew.lee@capitaland.com"},
	    		contacts_assetManagement : {section : "Asset Management",post:"Vice President",name:"Serena Liong",mobile:"+65 61231222",email:"serena.liong@capitaland.com"},
	    		contacts_propertyServices : {section : "Property Services",post:"Assistant Vice President/Building Manager",name:"Victor Leung",mobile:"+65 61231225",email:"victor.leung@capitaland.com"},
	    		contacts_leaseAdministration : {section : "Lease Administration",post:"Senior Manager",name:"Chan Li Li",mobile:"+65 61231228",email:"chan.lili@capitaland.com"}
			},testJson_r = {
				unitName : 'Tenant B',
	    		businessType : 'Insurance',
	    		tenant_post : 'Tenant’s Representative',
	    		tenant_name : 'Jardine Tan',
	    		tenant_mobile : '+65 68762234',
	    		tenant_email : 'jardine.tan@tenantb.com',
				tenant_possessionDate : 'Feb 2 2015',
				tenant_period : '3 years',
				tenant_area : '2000 sq ft',
	    		contacts_marketing : {section : "Marketing",post:"Marketing Manager",name:"Andrew lee",mobile:"+65 61231233",email:"andrew.lee@capitaland.com"},
	    		contacts_assetManagement : {section : "Asset Management",post:"Vice President",name:"Serena Liong",mobile:"+65 61231222",email:"serena.liong@capitaland.com"},
	    		contacts_propertyServices : {section : "Property Services",post:"Assistant Vice President/Building Manager",name:"Victor Leung",mobile:"+65 61231225",email:"victor.leung@capitaland.com"},
	    		contacts_leaseAdministration : {section : "Lease Administration",post:"Senior Manager",name:"Chan Li Li",mobile:"+65 61231228",email:"chan.lili@capitaland.com"}
			},
			lightStatus = me.orderRecord.data.LightStatus,
			testJson;
			
			if(lightStatus == "2"){
				testJson = testJson_p;
			}else if(lightStatus == "3"){
				testJson = testJson_c;
			}else{
				testJson = testJson_r;
			}
        	
        	// Unit Information
        	Ext.ComponentQuery.query('#unitNameVal')[0].setData({unitName : testJson.unitName});
        	Ext.ComponentQuery.query('#businessTypeVal')[0].setData({businessType : testJson.businessType});
        	
        	// Tenant Information
        	Ext.ComponentQuery.query('#tenantRepresentatives')[0].setData({post:testJson.tenant_post,name:testJson.tenant_name,mobile:testJson.tenant_mobile,email:testJson.tenant_email});
        	Ext.ComponentQuery.query('#possessionDateVal')[0].setData({possessionDate : testJson.tenant_possessionDate});
        	Ext.ComponentQuery.query('#periodVal')[0].setData({period : testJson.tenant_period});
        	Ext.ComponentQuery.query('#areaVal')[0].setData({area : testJson.tenant_area});
        	
        	// Contacts
			Ext.ComponentQuery.query('#marketing')[0].setData(testJson.contacts_marketing);
			Ext.ComponentQuery.query('#assetManagement')[0].setData(testJson.contacts_assetManagement);
			Ext.ComponentQuery.query('#propertyServices')[0].setData(testJson.contacts_propertyServices);
			Ext.ComponentQuery.query('#leaseAdministration')[0].setData(testJson.contacts_leaseAdministration);


			view.getComponent('workOrderDetailsChild').down('#floorPlanCon').element.on({
				tap: handingOverCtr.goToPostilImgListFn,
				scope: handingOverCtr,
				args: ['floorPlan']
			});
			view.getComponent('workOrderDetailsChild').down('#preInspectionCon').element.on({
				tap: handingOverCtr.goToPreInspectionListFn,
				scope: handingOverCtr,
				args: []
			});
		});
	},
	/**
	 * 跳转到检查列表详情
	 * @param list
	 * @param index
	 * @param target
	 * @param record
	 */
	jumpToInspect: function(record,index) {
		var me = this;
		navCtr.pushToNext('iTenants.view.InspectionDetail', function(view) {
			var store = Ext.getStore('inspectionDetailStore'),
				params = {
					ADAccount: "huangcheng1",
					Token: "R3TWGNeql8k3bamyXzhURhwbbIxi6z56"
				},
				url = "resources/data/GetProjectList.json";

			var resultFun = function(responseText) {
				if (Ext.isEmpty(responseText)) {
					store.setData(null);
				} else {
					var resJson = Ext.JSON.decode(responseText);
					if (resJson.result) {
						if (!view.getComponent('inspectList')) {
							view.add({
								xtype: 'inspectList'
							});
						}
						
						var InspectList = view.getComponent('inspectList'),
							checkDetail = view.getComponent('inspectList').down('#checkDetail'),
							latestReply = view.getComponent('inspectList').down('#latestReply');
						//详情简介
						var detailObj = {
							CheckPoint : record.get('CheckPoint'),
							CheckPointDes : record.get('CheckPointDes'),
							Status : record.get('Status')
						};
						checkDetail.setData(detailObj);
						// 最后回复
						if(me.orderRecord.data.LightStatus == '2'){
							if(me.checkRecord.data.Status == '1'){
								latestReply.setData({Comments: '1. Cracks found on flooring Area <br /> 2.  Scratches found on flooring Area.',
									ImagePath:[{Url:'resources/images/test/gg.png'}],
									PathArrayString: 'resources/images/test/gg.png'});	
							}else{
								latestReply.setData({Comments: 'OK'});
							}
						}else if(me.orderRecord.data.LightStatus == '5'){
							if(index == 0){
								latestReply.setData({Comments: 'OK',
									ImagePath:[{Url:'resources/images/test/nn.png'}],
									PathArrayString: 'resources/images/test/nn.png'});									
							}else if(index == 1){
								latestReply.setData({Comments: 'Not OK'});
							}else{
								latestReply.setData({Comments: 'OK'});
							}
						}else{
							latestReply.setData({Comments: 'OK'});
						}

						// 历史记录
						var needShowHistory = (me.orderRecord.data.LightStatus == '5' && index == 0);
						if(needShowHistory) {
							InspectList.setData(resJson.rows[0]);
						}else{
							InspectList.setTpl(null);	
						}
							
						// status:1时 有数据
						view.down('#hisLabel').setHidden(!needShowHistory);
					} else {
						iTenants.util.PubOperation.showTips('emptyDataMsg', "normal");
					}
				}
			};
			failureFun = function() {
				iTenants.util.PubOperation.showTips('requestErrorMsg', 'failure');
			};
			iTenants.util.PubOperation.ajaxFun(url, params, resultFun, failureFun, true, false, 'InspectionDetailStore', 'GET');
		});
	},
	/**
	 * 进入内部检查 检查点OK回复页面
	 */
	goToModifyView: function() {
		var me = this;
		

		navCtr.pushToNext('iTenants.view.ModifyView', function(view) {
			// 组件定义委托事件
			view.setListeners([{
				fn: 'getPhoto',
				event: 'tap',
				delegate: '#modifyCamera',
				args: [],
				scope: fileUploadCtr
			}, {
				//				fn : 'orderCompleteFn',
				event: 'tap',
				delegate: '#orderCompleteBtn',
				args: [view],
				scope: me
			}]);
		});
	},
	/**
	 * 进入工单检查回复页面
	 * */
	jumpToDefect: function(status) {
		var me = this;
		navCtr.pushToNext('iTenants.view.DefectView', function(view) {
			view.down('titlebar').setTitle(status ? 'OK' : 'Defect found');
			//view.down('container[name=label]').setHtml('<p>' + me.checkRecord.data.CheckPointDes + '</p>'+ me.checkRecord.data.CheckPoint.replace(/\n/gi,'<br>'));
			// 组件定义委托事件
			view.setListeners([{
				fn: 'getPhoto',
				event: 'tap',
				delegate: '#getPhoto',
				args: [],
				scope: fileUploadCtr
			}, {
				fn: 'goToPostilImgListFn',
				event: 'tap',
				delegate: '#modifyPostil',
				args: ['modifyPostil'],
				scope: handingOverCtr
			}, {
				//				fn : 'checkDefectReplyFn',
				event: 'tap',
				delegate: '#defectReplyBtn',
				args: [view],
				scope: handingOverCtr
			}]);
		});
	},
	/**
	 * 工单完工提交
	 * @param modifyView
	 */
	orderCompleteFn: function(modifyView) {
		var me = this,
			url = Global.domain + "/api/CompleteSubmit.ashx",
			comments = modifyView.down('container textareafield[itemId=modifyComments]'),
			imgPath1 = window.localStorage.getItem("_globleParam_imgeUrl1"),
			imgPath2 = window.localStorage.getItem("_globleParam_imgeUrl2"),
			imgPath3 = window.localStorage.getItem("_globleParam_imgeUrl3"),
			imgPathArr = new Array();

		if (Ext.isEmpty(comments.getValue())) {
			iTenants.util.PubOperation.showTips('commentsEmpty', "failure");
			return;
		}
		if (imgPath1) {
			imgPathArr.push({
				"Key": imgPath1
			});
		}
		if (imgPath2) {
			imgPathArr.push({
				"Key": imgPath2
			});
		}
		if (imgPath3) {
			imgPathArr.push({
				"Key": imgPath3
			});
		}

		var params = {
			WorkID: me.WorkID,
			Comments: comments.getValue(),
			// 相片
			ImageBase64String: Ext.encode(imgPathArr)
		};

		var resultFun = function(responseText) {
			var resJSON = Ext.JSON.decode(responseText);
			if (resJSON.result == 'Success') {
				navCtr.popToPrev('OrderIndex', true);
				fileUploadCtr.clearPic();
				iTenants.util.PubOperation.showTips('succeedMsg', "success");
			} else {
				iTenants.util.PubOperation.showTips('failureMsg', "failure");
			}
		};
		failureFun = function() {
			iTenants.util.PubOperation.showTips('requestErrorMsg', 'failure');
		};
		iTenants.util.PubOperation.ajaxFun(url, params, resultFun, failureFun, true, false, 'orderComplete', 'POST');
	},
	/**
	 * 检查回复提交-Defect found
	 * @param defectView
	 */
	checkDefectReplyFn : function(defectView){
		var me = this,
			url = Global.domain + "/api/GetCheckPointRecord.ashx",
			comments = defectView.down('container textareafield[itemId=DefectComments]'),
			imgPath1 = window.localStorage.getItem("_globleParam_imgeUrl1"),
			imgPath2 = window.localStorage.getItem("_globleParam_imgeUrl2"),
			imgPath3 = window.localStorage.getItem("_globleParam_imgeUrl3"),
	        postilPath1 = window.localStorage.getItem("_globleParam_postilImgeUrl1"),
	        checkData = handingOverCtr.checkRecord.data,
	    	imgPathArr = new Array(),
	    	postilPathArr = new Array();
	    	
		if(Ext.isEmpty(comments.getValue())){
			iTenants.util.PubOperation.showTips('commentsEmpty',"failure");
			return;
		}
		if(imgPath1){imgPathArr.push({"Key":imgPath1});}
		if(imgPath2){imgPathArr.push({"Key":imgPath2});}
		if(imgPath3){imgPathArr.push({"Key":imgPath3});}
		if(postilPath1){postilPathArr.push({"Key":postilPath1});}
		
		var params = {
				MallCode : orderIndexCtr.MallCode,
				ShopID : handingOverCtr.ShopID,
				WorkID : handingOverCtr.WorkID,
				CheckItem : checkData.CheckItemID,
				CheckPoint : checkData.CheckPointID,
				// 0:未检查（默认，灰色），1：ok（绿色），2：Defect found有缺陷(红色)
				Status : 2,
				Comments : comments.getValue(),
				// 相片
				ImageBase64String : Ext.encode(imgPathArr),
				// 批注图纸
				ImageBase64location : Ext.encode(postilPathArr)
			};
			
		var resultFun = function(responseText) {
			var resJSON = Ext.JSON.decode(responseText);
			if(resJSON.result == 'Success'){
				navCtr.popToPrev(1,true);
				fileUploadCtr.clearPic();
				iTenants.util.PubOperation.showTips('succeedMsg',"success");
			}else{
				iTenants.util.PubOperation.showTips('failureMsg',"failure");
			}
		};
		failureFun = function() {
			iTenants.util.PubOperation.showTips('requestErrorMsg', 'failure');
		};
		iTenants.util.PubOperation.ajaxFun(url, params, resultFun, failureFun, true, false, 'checkReply','POST');
	},
	/**
	 * 检查回复提交-OK
	 * @param defectView
	 */
	checkOKReplyFn : function(defectView){
		var me = this,
			url = Global.domain + "/api/GetCheckPointRecord.ashx",
	        checkData = handingOverCtr.checkRecord.data;
	    	
		var params = {
				MallCode : orderIndexCtr.MallCode,
				ShopID : handingOverCtr.ShopID,
				WorkID : handingOverCtr.WorkID,
				CheckItem : checkData.CheckItemID,
				CheckPoint : checkData.CheckPointID,
				// 0:未检查（默认，灰色），1：ok（绿色），2：Defect found有缺陷(红色)
				Status : 1
			};
			
		var resultFun = function(responseText) {
			var resJSON = Ext.JSON.decode(responseText);
			handingOverCtr.hideCheckListPicker();
			handingOverCtr.returnHandingOverData();
			if(resJSON.result == 'Success'){
				iTenants.util.PubOperation.showTips('succeedMsg',"success");
			}else{
				iTenants.util.PubOperation.showTips('failureMsg',"failure");
			}
		};
		failureFun = function() {
			iTenants.util.PubOperation.showTips('requestErrorMsg', 'failure');
		};
		iTenants.util.PubOperation.ajaxFun(url, params, resultFun, failureFun, true, false, 'checkReply','POST');
	}
});