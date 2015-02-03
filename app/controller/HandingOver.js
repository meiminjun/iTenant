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
        	pdfBtn : 'handingOver button[name=pdfBtn]',
        	examineBtn: 'handingOver button[name=examine]',
        	checkList: 'checkList',
        	handingDetail: 'checkList container[name=handingDetail]',
        	handingBottom: 'checkList container[name=bottom]',
        	checkListPicker: 'checkListPicker',
        	examinePicker: 'picker[name="examine"]'
        	
        },
        control: {
        	checkList: {
        		itemsingletap: 'showCheckListPicker'
        	},
        	emailBtn : {
        		tap: 'showEmailPicker'
        	},
        	examineBtn : {
        		tap : 'goToHandoverFormFn'
        	}
        }
    },
    /**
     * handingover页面初始化
     * @param record
     * */
    handingOverInit: function(record){
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
    returnHandingOverData: function(){
    	var me = this,
    		handingDetail = me.getHandingDetail(),
    		checkList = me.getCheckList(),
    		handingBottom = me.getHandingBottom(),
    		store = Ext.getStore('checkList');
    	
    	handingDetail.setData(me.orderRecord.data);
    	//me.getExamineBtn().setHidden(me.orderRecord.data.Status === "1" ? true : false);
    	

    	//Ext.Ajax.abort(store.getProxy().url);
    	iTenants.util.PubOperation.pubListLoad(store, {
    		WorkID: me.orderRecord.data.WorkID
    	}, true, true, 'orderList',function(response){
    		if(!response){
    			return;
    		}
    		handingBottom.down('container[name=final]')
    					 .setData({rows_work:response.rows_work[0],rows_image:response.rows_Image});
    		handingBottom.setHidden(me.orderRecord.data.Status === "1" ? false : true);
    	}, checkList, false);    	
    },
    /*
     * 检查checklist列表是否处于都已完成状态
     * */
    isAllChecked: function(){
    	var store = Ext.getStore('checkList'),
    		state = true;
    	
    	state = store.findBy(function(record){
    		if(record.data.Status != '1'){
    			return true;
    		}else{
    			return false;
    		}
    	});
    	
    	if(state >= 0){
        	iTenants.util.PubOperation.showTips('checkListNotAll', 'normal');
        	return false; 
    	}else{
    		return true;
    	}

    },
    /*
     * refNode 元素 是否包含 otherNode 
     * */
    contains: function(refNode, otherNode){
    	if(typeof refNode.contains === 'function'){
    		return refNode.contains(otherNode);
    	}else if(typeof refNode.compareDocumentPosition === 'function'){
    		return !!(refNode.compareDocumentPosition(ohterNode) & 16);
    	}else{
    		var node = otherNode.parentNode;
    		do {
    			if(node === refNode){
    				return true;
    			}else{
    				node = node.parentNode;
    			}
    		}while(node !== null);
    		return false;
    	}
    },
	/**
	 * 点击checkList表单元素，显示picker
	 * */
    showCheckListPicker: function(list, index, target, record, e, eOpts){
    	var me = this,
    		className = e.target.className,
    		clp = me.getCheckListPicker();
    	
    	me.checkRecord = record;
    	if(className == 'next'){
    		// 跳转到检查列表详情
    		me.jumpToInspect(record);
    	}else{
	    	if(!clp || !clp.hasParent()){
	        	clp = Ext.create('iTenants.view.CheckListPicker');
	    		Ext.Viewport.add(clp);        	   		
	    	}
	    	navCtr.nowPicker = {
	    		obj: clp,
	    		hide: function(){
	    			this.obj.destroy();
	    		}
	    	};
	    	clp.down('label').setHtml(record.data.CheckPoint + "("+ record.data.CheckPointDes +")");
	    	clp.show();
    	}

    },
    hideCheckListPicker: function(){
    	var me = this,
    		clp = me.getCheckListPicker();
    	if(clp && !clp.isHidden()){
    		clp.destroy();
    	}
    },
    /**
     * preInspection页面初始化方法
     * */
    goToPreInspectionListFn: function(){
    	navCtr.pushToNext('iTenants.view.PreInspection', function(view) {
			inspectCtr.preInspectInit();
		});
    },
    /**
     * HandoverForm View
     * */
    goToHandoverFormFn: function(){
    	var me = this;
    	navCtr.pushToNext('iTenants.view.HandoverForm', function(view) {
			var url = 'resources/data/HandOverForm.json',
				params = {};
	
			var resultFun = function(responseText) {
				if (!Ext.isEmpty(responseText)) {
					var result = Ext.JSON.decode(responseText),
						hfc = Ext.create('iTenants.view.HandoverFormContent');
					console.log(result);
					hfc.down('hfinspected').setData(result);
					hfc.down('hfappendix').setData(result);
					view.add(hfc);
				}
			};
			failureFun = function() {
				iTenants.util.PubOperation.showTips('requestErrorMsg', 'failure');
			};
			iTenants.util.PubOperation.ajaxFun(url, params, resultFun, failureFun, true, false, 'getHandOverForm', 'GET');
			
		},true);
    },
    /**
     * PDF预览
     */
    goToPDFFn : function(){
    	var me=this,
    		url = Ext.os.is.Android?'/HandingOverAndroid_UAT/resources/data/Form.pdf':'resources/data/Form.pdf';
    	
    	PhoneGapAPI.checkAtt(url);
    	// 隐藏签名
    	me.signatureView.hide();
    },
    /**
     * 进入批注图片列表
     * @param viewSpace
     * @param urls 租户详情获取的批注图纸urls
     */
    goToPostilImgListFn : function(viewSpace,urls){
    	var me = this;
    	navCtr.pushToNext('iTenants.view.PostilImgList', function(view){
    		if(!view.getComponent('image-grid-list-panel')){
	    		view.add({
	    			 xtype: 'image-grid-list-panel'
	    		});
	            // 图纸列表上级页面
	            me.imageGridSuperior = viewSpace;
	            // 商户关联图纸
	            me.shopUrls = urls || [];
	            me.setImageData(view);
    		}
    	});
    },
    /**
     * set image data
     */
    setImageData: function(view){
        var me = this;
            gallery = view.down('image-grid-list-panel'),
            store = me.getImageData();

        gallery.renderImages(store);
    },

    /**
     * get image data
     * @return {Ext.ux.ImageGridList.store.Images} image store contain model override Ext.ux.ImageGridList.model.Image
     */
    getImageData: function(){
        var me = this,
            store = Ext.create('iTenants.store.PostilImgList'),
//            urls = me.imageGridSuperior == 'floorPlan' ?  me.shopUrls : me.getUrls(),
            urls = me.imageGridSuperior == 'floorPlan' ?  me.getUrls() : me.getUrls(),
            model;

        for(var i = 0, length = urls.length; i < length; i++){
            model = Ext.create('iTenants.model.PostilImgList');
            model.set('url', urls[i]);
            model.set('title',"Adidas"+(i+1));
            store.add(model);
        }

        return store;
    },

    /**
     * return test image urls
     * @return {String[]} image urls
     */
    getUrls: function(){
        return [
            'resources/images/1.png',
            'resources/images/2.png',
            'resources/images/3.png',
            'resources/images/4.png',
            'resources/images/5.png',
            'resources/images/6.png',
            'resources/images/5.png',
            'resources/images/6.png'
        ];
    },
    /**
     * 彈出签名页面
     * @param img
     * @param e
     * @param eOpts
     */
    goToSignatureFn : function(img,e,eOpts){
    	if (!this.signatureView) {
			this.signatureView = Ext.widget('signatureView');
		}
		var signatureView = this.signatureView;
		Ext.Viewport.add(signatureView);
		
		navCtr.nowPicker = {
			obj : signatureView,
			hide: function(){
				this.obj.hide();
			}	
		};
		
		signatureView.show();	
		this.clearSignature();
    },
    /**
     * 清空签名
     */
    clearSignature : function(){
    	var draw = Ext.getCmp('free-paint');
        draw.getSurface().destroy();
        draw.getSurface('overlay').destroy();
        draw.renderFrame();
    },
    /**
     * 显示邮件按钮picker
     * */
    showEmailPicker: function(){
    	var me = this,
    		ep = me.getExaminePicker();
    	if(!ep || !ep.hasParent()){
    		ep = Ext.create('Ext.Picker',{
			 name: 'examine',
			 cls: 'examinePicker',
			 hideOnMaskTap : true,
			 doneButton: {
				cls: 'btn',
				ui: 'plain'
			 },
			 cancelButton: {
	 			cls: 'btn',
				ui: 'plain'  			 
			 },
			 slots: [
		         {
		             title: '',
		  
		         }]
			});
    	}else{
    		
    	}
    	navCtr.nowPicker = {
    		obj: ep,
    		hide: function(){
    			this.obj.destroy();
    		}
    	};
    	var tempData = [{
            title: '',
            data : [
    	    {
    	    	text: 'Operations Team'
    	    },
    	    {
    	    	text: 'Leasing Team'
    	    },
    	    {
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
    	navCtr.pushToNext('iTenants.view.WorkOrderDetails', function(view) {
			// 动态加载子内容
			if (!view.getComponent('workOrderDetailsChild')) {
				view.add([{
					xtype: 'workOrderDetailsChild'
				}]);
        	}
        	// test
        	var testJson = {
        		unitName : 'Tesco',
        		businessType : 'Hypermarket',
        		oContactPerson : 'John',
        		fContactPerson : 'Peter',
        		tenantName : 'Stephanie',
        		contactNumber : '0755-2671999',
        		mobileNumber : '13655489213',
        		email : '854789926@qq.com',
        		address : '8 Haig Rd Singapore 3453',
        		possessionDate : '2015-01-01',
        		period : 'one year',
        		area : '100m²',
        	};
        	
        	// Unit Information
        	Ext.ComponentQuery.query('#unitNameVal')[0].setData({unitName : testJson.unitName});
        	Ext.ComponentQuery.query('#businessTypeVal')[0].setData({businessType : testJson.businessType});
        	Ext.ComponentQuery.query('#oContactPersonVal')[0].setData({oContactPerson : testJson.oContactPerson});
        	Ext.ComponentQuery.query('#fContactPersonVal')[0].setData({fContactPerson : testJson.fContactPerson});
        	
        	// Tenant Information
        	Ext.ComponentQuery.query('#tenantRepresentatives')[0].setData({post:"Tenants Representative",name:"Stephanie",mobile:"13655489213",email:"854789962@qq.com"});
        	Ext.ComponentQuery.query('#possessionDateVal')[0].setData({possessionDate : testJson.possessionDate});
        	Ext.ComponentQuery.query('#periodVal')[0].setData({period : testJson.period});
        	Ext.ComponentQuery.query('#areaVal')[0].setData({area : testJson.area});
        	
        	// Contacts
			Ext.ComponentQuery.query('#marketingManager')[0].setData({post:"Marketing Manager",name:"Marry",mobile:"18578964588",email:"210459963@qq.com"});
			Ext.ComponentQuery.query('#assetManager')[0].setData({post:"Asset Manager",name:"Tean",mobile:"18699547258",email:"547879602@qq.com"});
			Ext.ComponentQuery.query('#propertyServices')[0].setData({post:"Property Services",name:"Michelle",mobile:"18245969988",email:"399508867@qq.com"});
        	
        	view.getComponent('workOrderDetailsChild').down('#floorPlanCon').element.on({
    			tap : handingOverCtr.goToPostilImgListFn,
    			scope : handingOverCtr,
    			args : ['floorPlan']
			});
        	view.getComponent('workOrderDetailsChild').down('#preInspectionCon').element.on({
    			tap : handingOverCtr.goToPreInspectionListFn,
    			scope : handingOverCtr,
    			args : []
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
	jumpToInspect: function(record) {
		var me = this;
		navCtr.pushToNext('iTenants.view.InspectionDetail', function(view) {
			var store = Ext.getStore('inspectionDetailStore'),
				params = {
					ADAccount: "huangcheng1",
					Token: "R3TWGNeql8k3bamyXzhURhwbbIxi6z56"
				},
				url = "resources/data/GetProjectList.json";
				
			var resultFun = function(responseText) {
				
				if(!view.getComponent('inspectList')){
					view.add({
						xtype : 'inspectList'
					});
				}
				
				var	InspectList = view.getComponent('inspectList'),
					checkDetail = view.getComponent('inspectList').down('#checkDetail'),
					latestReply = view.getComponent('inspectList').down('#latestReply');
				store.removeAll();
				if (Ext.isEmpty(responseText)) {
					store.setData(null);
				} else {
					var resJson = Ext.JSON.decode(responseText);
					if (resJson.result) {
						console.log("获取到数据" + resJson);
						console.log("检查详情:"+checkDetail.$scrollDockHeight);
						console.log("最新回复:"+latestReply.$scrollDockHeight);
						console.log(view);
						var detailObj = resJson.rows[0];
						detailObj.CheckPoint = record.get('CheckPoint');
						detailObj.CheckPointDes = record.get('CheckPointDes');
						console.log(detailObj);
						checkDetail.setData(detailObj);
						latestReply.setData(resJson.rows[0]);
						InspectList.setData(resJson.rows[0]);
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
     * 进入工单完工页面
     */
    goToModifyView : function(){
    	var me = this;
    	
    	if(!me.isAllChecked()){
    		return;
    	}
    	navCtr.pushToNext('iTenants.view.ModifyView', function(view){
    		// 组件定义委托事件
    		view.setListeners([{
    			fn : 'getPhoto',
    			event : 'tap',
	        	delegate : '#modifyCamera',
	        	args : [],
	        	scope : fileUploadCtr
    		},{
//				fn : 'orderCompleteFn',
				event : 'tap',
	        	delegate : '#orderCompleteBtn',
	        	args : [view],
	        	scope : me
			}]);
    	});
    },
    /**
     * 进入工单检查回复页面
     * */
	jumpToDefect: function() {
		var me = this;
		me.hideCheckListPicker();
		navCtr.pushToNext('iTenants.view.DefectView', function(view) {
			// 组件定义委托事件
			view.setListeners([{
				fn: 'getPhoto',
				event: 'tap',
				delegate: '#getPhoto',
				args: [],
				scope: fileUploadCtr
			},{
    			fn : 'goToPostilImgListFn',
				event : 'tap',
	        	delegate : '#modifyPostil',
	        	args : ['modifyPostil'],
	        	scope : handingOverCtr
			},{
//				fn : 'checkDefectReplyFn',
				event : 'tap',
	        	delegate : '#defectReplyBtn',
	        	args : [view],
	        	scope : inspectCtr
			}]);
		});
	},
	/**
	 * 工单完工提交
	 * @param modifyView
	 */
	orderCompleteFn : function(modifyView){
		var me = this,
			url = Global.domain + "/api/CompleteSubmit.ashx",
			comments = modifyView.down('container textareafield[itemId=modifyComments]'),
			imgPath1 = window.localStorage.getItem("_globleParam_imgeUrl1"),
			imgPath2 = window.localStorage.getItem("_globleParam_imgeUrl2"),
			imgPath3 = window.localStorage.getItem("_globleParam_imgeUrl3"),
	    	imgPathArr = new Array();
	    	
		if(Ext.isEmpty(comments.getValue())){
			iTenants.util.PubOperation.showTips('commentsEmpty',"failure");
			return;
		}
		if(imgPath1){imgPathArr.push({"Key":imgPath1});}
		if(imgPath2){imgPathArr.push({"Key":imgPath2});}
		if(imgPath3){imgPathArr.push({"Key":imgPath3});}
		
		var params = {
				WorkID : me.WorkID,
				Comments : comments.getValue(),
				// 相片
				ImageBase64String : Ext.encode(imgPathArr)
			};
			
		var resultFun = function(responseText) {
			var resJSON = Ext.JSON.decode(responseText);
			if(resJSON.result == 'Success'){
				navCtr.popToPrev('OrderIndex',true);
				fileUploadCtr.clearPic();
				iTenants.util.PubOperation.showTips('succeedMsg',"success");
			}else{
				iTenants.util.PubOperation.showTips('failureMsg',"failure");
			}
		};
		failureFun = function() {
			iTenants.util.PubOperation.showTips('requestErrorMsg', 'failure');
		};
		iTenants.util.PubOperation.ajaxFun(url, params, resultFun, failureFun, true, false, 'orderComplete','POST');
	}
});
