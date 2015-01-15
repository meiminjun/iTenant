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
        	stateSegBtns: 'orderList segmentedbutton[name=state]',
        	typeSegBtns: 'orderList segmentedbutton[name=type]',
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
        	}
        }
    },
    orderIndexInit: function(){
    	var orderIndex = this.getOrderIndex(),
    		stateSegBtns = orderIndex.down('orderList segmentedbutton[name=state]'),
    		typeSegBtns = orderIndex.down('orderList segmentedbutton[name=type]');
    	//默认筛选
    		stateSegBtns.setPressedButtons(stateSegBtns.getItems().items[0]);
    	//默认类型
    		typeSegBtns.setPressedButtons(typeSegBtns.getItems().items[0]);
    		typeSegBtns.getItems().items[0].setBadgeText('4');
    		typeSegBtns.getItems().items[1].setBadgeText('0');
    	orderIndex.down('orderList').setStore(Ext.getStore('OrderListEnter'));
    },
    stateSegBtnsToggle: function(container, button, pressed){
        //alert("User toggled the '" + button.getText() + "' button: " + (pressed ? 'on' : 'off'));
    },
    typeSegBtnsToggle: function(container, button, pressed){
        //alert("User toggled the '" + button.getText() + "' button: " + (pressed ? 'on' : 'off'));
    },
    orderListTapFn: function(){
    	navCtr.pushToNext('iTenants.view.HandingOver');
    }
});
