/**
 * OrderIndex控制器
 * @desc 工单列表
 * @author luyifan
 * @date 20141225
 */
Ext.define('iTenants.controller.OrderIndex', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
        	orderIndex: 'orderIndex',
        	orderIndexTitle: 'orderIndex titlebar[name=title]',
        	stateSegBtns: 'orderList segmentedbutton[name=state]',
        	typeSegBtns: 'orderList segmentedbutton[name=type]',
        	orderListSearch: 'orderList searchfield[name=orderListSearch]', 
        	orderList: 'orderList'
        },
        control: {
        	stateSegBtns:{
        		toggle: 'stateSegBtnsToggle'
        	},
        	typeSegBtns:{
        		toggle: 'typeSegBtnsToggle'
        	},
        	orderList:{
        		show: 'orderIndexInit'
        	},
        	orderList:{
        		itemsingletap: 'orderListTapFn'
        	},
        	orderListSearch: {
        		change: 'orderListSearch'
        	}
        }
    },
    
    /*
     * orderIndex 页面初始化
     * @param record
     * */
    orderIndexInit: function(record){
    	var me = this,
    		orderIndex = me.getOrderIndex(),
    		orderIndexTitle = me.getOrderIndexTitle(),
    		orderList = Ext.create('iTenants.view.OrderList');
    	orderList.setEmptyText(Global.getTipsMsg('emptyDataMsg'));
    	orderIndexTitle.setTitle(record.data.MarketShortName);
    	me.MallCode = record.data.MallCode;
    	me.orderListStore = Ext.getStore('orderListStore');

    	me.returnOrderListData();

		
		orderIndex.add(orderList);
		
    },
    /**
     * orderlist 还原初始状态
     * */
    returnOrderListData: function(){
    	var me = this,
			stateSegBtns = me.getStateSegBtns(),
			typeSegBtns = me.getTypeSegBtns(),
			orderListSearch = me.getOrderListSearch();

    
    	orderListSearch.setValue('');
    	me.orderListType = 1;
		typeSegBtns.setPressedButtons(typeSegBtns.getItems().items[0]);
		me.orderState = 0;
		stateSegBtns.setPressedButtons(stateSegBtns.getItems().items[0]);
		me.refreshOrderList();
    },
    /**
     * orderList 刷新store
     * */
    refreshOrderList: function(){
    	var me = this,
    		orderList = me.getOrderList(),
    		typeSegBtns = me.getTypeSegBtns();
    	var keyword = me.getOrderListSearch().getValue();
    	if(me.MallCode == 3332){
        	Ext.Ajax.abort(me.orderListStore.getProxy().url);
        	iTenants.util.PubOperation.pubListLoad(me.orderListStore, {
        		MallCode : me.MallCode,
        		Status : me.orderState,
        		Type : me.orderListType,
        		keyword : keyword ? keyword : ''
        	}, true, true, 'orderList',function(response){
        		if(!response){
        			return;
        		}
        		typeSegBtns.getItems().items[0].setBadgeText(response.HandingOverCount);
        		typeSegBtns.getItems().items[1].setBadgeText(response.TakingOverCount);
        		orderList.getScrollable().getScroller().getTranslatable().translate(0,0);
        	}, orderList, false);
    	}else{
    		me.orderListStore.removeAll();
    		typeSegBtns.getItems().items[0].setBadgeText( '0');
    		typeSegBtns.getItems().items[1].setBadgeText( '0');
    	}

    	me.filter();
    },
    /*
     * 录入登出类型切换事件
     * @param container ：按钮集， 
     * @param button ： 所按按钮，
     * @param pressed ： 按钮状态  true为按下，false为弹出
     * */
    typeSegBtnsToggle: function(container, button, pressed){
    	if(!pressed){
    		return;
    	}
    	var me = this,
    		orderListSearch = me.getOrderListSearch(),
    		orderListType = button.config.name === 'enter' ? 1 : 2;

    	if(orderListType === me.orderListType){
    		
    	}else{
    		me.orderListType = orderListType;
    		orderListSearch.setValue('');
        	me.filter(); 
    	}    	
    },
    
    /*
     * 工单状态 切换
     * @param container ：按钮集， 
     * @param button ： 所按按钮，
     * @param pressed ： 按钮状态  true为按下，false为弹出
     * */
    stateSegBtnsToggle: function(container, button, pressed){
    	if(!pressed){
    		return;
    	}
    	var me = this,
    		btnName = button.config.name,
    		orderListSearch = me.getOrderListSearch(),
    		orderState;
    	
    	if(btnName === 'tasks'){
    		orderState = 0;
    	}else if(btnName === 'completed'){
    		orderState = 1;
    	}else{
    		orderState = 2;
    	}
    	
    	if(orderState === me.orderState){
    		
    	}else{
    		me.orderState = orderState;
    		orderListSearch.setValue('');
        	me.filter(); 
    	}
    	   
    	
    },
    filter: function(){
    	var me = this,
    		store = me.orderListStore;
    	store.clearFilter();
/*    	store.filter(    	[
    	             	    {property: "Status", value: me.orderState === 2 ? /\D/ : me.orderState.toString()},
    	            	    {property: "OrderType", value: me.orderListType.toString()},
    	            	]);*/
    	var status = me.orderState.toString(),
    		orderType = me.orderListType.toString();
    	store.filterBy(function(record){
    		if((record.data.Status == status || status == '2') && record.data.OrderType == orderType){
    			return true;
    		}else{
    			return false;
    		}
    	})
    },
    /*
     * 按关键字查找工单
     * */
    orderListSearch: function(){
    	var me = this;
    	me.refreshOrderList();
    },
    /*
     * 工单列表点击事件 ，进入工单详情页面
     * @param obj
	 * @param index
	 * @param target
	 * @param record
	 * @param e
	 * @param eOpts
     * */
    orderListTapFn: function(obj, index, target, record, e, eOpts){
    	navCtr.pushToNext('iTenants.view.HandingOver',function(){
    		handingOverCtr.handingOverInit(record);
    	});
    }
});
