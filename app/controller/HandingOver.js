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
        	emailBtn : 'handingOver button[name=emailBtn]',
        	examineBtn: 'handingOver button[name=examine]',
        	checkList: 'handingOver list[name=checkList]',
        	checkListPicker: 'checkListPicker',
        	examinePicker: 'picker[name="examine"]'
        },
        control: {
        	checkList: {
        		itemsingletap: 'showCheckListPicker'
        	},
        	examineBtn: {
        		tap: 'goToModifyView'
        	},
        	emailBtn : {
        		tap : 'showEmailPicker'
        	}
        }
    },
    /**
     * 跳转到工单检查填写表单
     * */
	jumpToDefect: function() {
		var me = this;
		me.hideCheckListPicker();
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
	},
	/**
	 * 点击checkList表单元素，显示picker
	 * */
    showCheckListPicker: function(list, index, target, record, e, eOpts){
    	var me = this,
    		className = e.target.className,
    		clp = me.getCheckListPicker();
    	
    	if(className == 'next'){
    		// 跳转到检查列表详情
    		me.jumpToInspect();
    	}else{
	    	if(!clp || !clp.hasParent()){
	        	clp = Ext.create('iTenants.view.CheckListPicker');
	    		Ext.Viewport.add(clp);        	   		
	    	}
	    	clp.down('label').setHtml(record.data.name);
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
     * 进入工单回复
     */
    goToModifyView : function(){
    	navCtr.pushToNext('iTenants.view.ModifyView', function(view){
    		// 组件定义事件委托
    		view.setListeners([{
    			fn : 'getPhoto',
    			event : 'tap',
	        	delegate : '#modifyCamera',
	        	args : [],
	        	scope : fileUploadCtr
    		},{
    			fn : 'goToPostilImgListFn',
    			event : 'tap',
	        	delegate : '#modifyPostil',
	        	args : [],
	        	scope : handingOverCtr
    		},{
    			fn : 'goToSignatureFn',
    			event : 'tap',
	        	delegate : '#modifySign',
	        	args : [],
	        	scope : handingOverCtr
    		}]);
    	});
    },
    /**
     * 进入批注图片列表
     * @param img
     * @param e
     * @param eOpts
     */
    goToPostilImgListFn : function(img,e,eOpts){
    	var me = this;
    	navCtr.pushToNext('iTenants.view.PostilImgList', function(view){
    		if(!view.getComponent('image-grid-list-panel')){
	    		view.add({
	    			 xtype: 'image-grid-list-panel'
	    		});
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
            urls = me.getUrls(),
            model;

        for(var i = 0, length = urls.length; i < length; i++){
            model = Ext.create('iTenants.model.PostilImgList');
            model.set('url', urls[i]);
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
            'resources/images/1.jpg',
            'resources/images/2.jpg',
            'resources/images/3.jpg',
            'resources/images/4.jpg',
            'resources/images/5.jpg',
            'resources/images/5.jpg',
            'resources/images/7.jpg',
            'resources/images/8.jpg',
            'resources/images/9.jpg',
            'resources/images/10.jpg',
            'resources/images/11.jpg',
            'resources/images/12.jpg',
            'resources/images/13.jpg',
            'resources/images/14.jpg',
            'resources/images/15.jpg',
            'resources/images/16.jpg',
            'resources/images/17.jpg',
            'resources/images/18.jpg',
            'resources/images/19.jpg',
            'resources/images/20.jpg'
        ];
    },
    /**
     * 彈出签名页面
     * @param img
     * @param e
     * @param eOpts
     */
    goToSignatureFn : function(img,e,eOpts){
		navCtr.pushToNext('iTenants.view.SignatureView', function(view) {});
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
    		 doneButton: {
    			cls: 'btn',
    			ui: 'plain'
    		 },
    		 cancelButton: {
     			cls: 'btn',
    			ui: 'plain'  			 
    		 },
    		 height:167,
    		 slots: [
    		         {
    		             title: '',
    		  
    		         }
    		     ]
    		})
    	}else{
    		
    	}
    	var tempData = [
    	        {
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
    	            	    }
    	            ]
    	        }
    	    ];
    	ep.setSlots(tempData);
    	ep.show();
    },
    /**
	 * 跳转到工单详情
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
        		area : '100m',
        		oContactPerson : 'John',
        		fContactPerson : 'Peter',
        		tenantName : 'Stephanie',
        		contactNumber : '0755-2671999',
        		mobileNumber : '13655489213',
        		email : '854789926@qq.com',
        		address : '8 Haig Rd Singapore 3453'
        	};
        	
        	Ext.ComponentQuery.query('#unitNameVal')[0].setData({unitName : testJson.unitName});
        	Ext.ComponentQuery.query('#businessTypeVal')[0].setData({businessType : testJson.businessType});
        	Ext.ComponentQuery.query('#areaVal')[0].setData({area : testJson.area});
        	Ext.ComponentQuery.query('#oContactPersonVal')[0].setData({oContactPerson : testJson.oContactPerson});
        	Ext.ComponentQuery.query('#fContactPersonVal')[0].setData({fContactPerson : testJson.fContactPerson});
        	Ext.ComponentQuery.query('#tenantNameVal')[0].setData({tenantName : testJson.tenantName});
        	Ext.ComponentQuery.query('#contactNumberVal')[0].setData({contactNumber : testJson.contactNumber});
        	Ext.ComponentQuery.query('#mobileNumberVal')[0].setData({mobileNumber : testJson.mobileNumber});
        	Ext.ComponentQuery.query('#emailVal')[0].setData({email : testJson.email});
        	Ext.ComponentQuery.query('#addressVal')[0].setData({address : testJson.address});
        });
    },
    /**
	 * 跳转到检查列表详情
	 * @param list
	 * @param index
	 * @param target
	 * @param record
	 */
	jumpToInspect: function(list, index, target, record) {
		navCtr.pushToNext('iTenants.view.InspectionDetail', function(view) {
			var me = this,
				store = Ext.getStore('InspectionDetailStore'),
				params = {
					ADAccount: "huangcheng1",
					Token: "R3TWGNeql8k3bamyXzhURhwbbIxi6z56"
				},
				url = "resources/data/GetProjectList.json";
//			var checkDetail = view.getComponent('checkDetail'),
//				latestReply = view.getComponent('latestReply'),
			var	InspectList = view.getComponent('InspectList'),
				checkDetail = view.getComponent('InspectList').down('#checkDetail'),
				latestReply = view.getComponent('InspectList').down('#latestReply');
		
			var resultFun = function(responseText) {
				if (Ext.isEmpty(responseText)) {
					store.setData(null);
				} else {
					var resJson = Ext.JSON.decode(responseText);
					if (resJson.result) {
						console.log("获取到数据" + resJson);
						checkDetail.setData(resJson.rows[0]);
						latestReply.setData(resJson.rows[0]);
						InspectList.setData(resJson.rows);
						
//						view.down('list').refresh();
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
});
