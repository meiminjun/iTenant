/**
 * 工单详情子内容
 * @class iTenants.view.WorkOrderDetailsChild
 * @author duwei
 * @date 2014-12-26
 */

Ext.define('iTenants.view.WorkOrderDetailsChild', {
    extend: 'Ext.Container',
    xtype : 'workOrderDetailsChild',
    
    requires : ['Ext.Toolbar'],
    config: {
        itemId: 'workOrderDetailsChild',
        layout : 'vbox',
        items: [{
        		// Unit Information
				xtype : 'toolbar',
				cls : 'titleBarCls',
				itemId : 'unitInformation',
				items : [ {
					xtype : 'button',
					ui : 'plain',
					locales : {
						text : 'workOrderDetailsChild.unitText'
					},
					cls : 'tagBtnCls'
				}, {
					xtype : 'label',
					cls : 'tagTriggleCls'
				}, {
					xtype : 'spacer'
				} ]
			},{
				// Unit Name
				xtype : 'container',
           		layout: 'hbox',
           		itemId : 'unitNameCon',
           		style : 'border-bottom: 1px solid #DCDCDC;',
           		items : [{
                    flex: 2,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'unitNameLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.unitNameLabel'
                    }
           		},{
                    flex: 3,
                    cls : 'repairOrderItemsConRight',
                    itemId : 'unitNameVal',
                    tpl : [
                       '{unitName}'
                    ]
           		}]
			},{
				// Business Type
				xtype : 'container',
           		layout: 'hbox',
           		itemId : 'businessTypeCon',
           		style : 'border-bottom: 1px solid #DCDCDC;',
           		items : [{
                    flex: 2,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'businessTypeLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.businessTypeLabel'
                    }
           		},{
                    flex: 3,
                    cls : 'repairOrderItemsConRight',
                    itemId : 'businessTypeVal',
                    tpl : [
                       '{businessType}'
                    ]
           		}]
			},{
				// Area
				xtype : 'container',
           		layout: 'hbox',
           		itemId : 'areaCon',
           		style : 'border-bottom: 1px solid #DCDCDC;',
           		items : [{
                    flex: 2,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'areaLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.areaLabel'
                    }
           		},{
                    flex: 3,
                    cls : 'repairOrderItemsConRight',
                    itemId : 'areaVal',
                    tpl : [
                       '{area}'
                    ]
           		}]
			},{
				// OPS Contact Person
				xtype : 'container',
           		layout: 'hbox',
           		itemId : 'oContactPersonCon',
           		style : 'border-bottom: 1px solid #DCDCDC;',
           		items : [{
                    flex: 2,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'oContactPersonLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.oContactPersonLabel'
                    }
           		},{
                    flex: 3,
                    cls : 'repairOrderItemsConRight',
                    itemId : 'oContactPersonVal',
                    tpl : [
                       '{oContactPerson}'
                    ]
           		}]
			},{
				// Finance Contact Person
				xtype : 'container',
           		layout: 'hbox',
           		itemId : 'fContactPersonCon',
           		style : 'border-bottom: 1px solid #DCDCDC;',
           		items : [{
                    flex: 2,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'fContactPersonLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.fContactPersonLabel'
                    }
           		},{
                    flex: 3,
                    cls : 'repairOrderItemsConRight',
                    itemId : 'fContactPersonVal',
                    tpl : [
                       '{fContactPerson}'
                    ]
           		}]
			},{
				// Floor Plan
				xtype : 'container',
           		layout: 'hbox',
           		itemId : 'floorPlanCon',
           		style : 'border-bottom: 1px solid #DCDCDC;',
           		items : [{
                    flex: 2,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'floorPlanLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.floorPlanLabel'
                    }
           		},{
           			xtype: 'image',
           			flex: 3,
           			itemId: 'floorPlan',
           			docked : 'right',
           			cls : 'repairOrderItemsConRight',
           			style : 'background-size:17px',
           			src : "resources/images/arrow-black.png"
           		}]
			},{
				// Tenant Information
				xtype : 'toolbar',
				cls : 'titleBarCls',
				itemId : 'unitInformation',
				items : [ {
					xtype : 'button',
					ui : 'plain',
					locales : {
						text : 'workOrderDetailsChild.tenantText'
					},
					cls : 'tagBtnCls'
				}, {
					xtype : 'label',
					cls : 'tagTriggleCls'
				}, {
					xtype : 'spacer'
				} ]
			},{
				// Tenant Name
				xtype : 'container',
           		layout: 'hbox',
           		itemId : 'tenantNameCon',
           		style : 'border-bottom: 1px solid #DCDCDC;',
           		items : [{
                    flex: 2,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'tenantNameLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.tenantNameLabel'
                    }
           		},{
                    flex: 3,
                    cls : 'repairOrderItemsConRight',
                    itemId : 'tenantNameVal',
                    tpl : [
                       '{tenantName}'
                    ]
           		}]
			},{
				// Contact Number
				xtype : 'container',
           		layout: 'hbox',
           		itemId : 'contactNumberCon',
           		style : 'border-bottom: 1px solid #DCDCDC;',
           		items : [{
                    flex: 2,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'contactNumberLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.contactNumberLabel'
                    }
           		},{
                    flex: 3,
                    cls : 'repairOrderItemsConRight',
                    itemId : 'contactNumberVal',
                    tpl : [
                       '{contactNumber}'
                    ]
           		}]
			},{
				// Mobile Number
				xtype : 'container',
           		layout: 'hbox',
           		itemId : 'mobileNumberCon',
           		style : 'border-bottom: 1px solid #DCDCDC;',
           		items : [{
                    flex: 2,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'mobileNumberLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.mobileNumberLabel'
                    }
           		},{
                    flex: 3,
                    cls : 'repairOrderItemsConRight',
                    itemId : 'mobileNumberVal',
                    tpl : [
                       '{mobileNumber}'
                    ]
           		}]
			},{
				// Email
				xtype : 'container',
           		layout: 'hbox',
           		itemId : 'emailCon',
           		style : 'border-bottom: 1px solid #DCDCDC;',
           		items : [{
                    flex: 2,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'emailLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.emailLabel'
                    }
           		},{
                    flex: 3,
                    cls : 'repairOrderItemsConRight',
                    itemId : 'emailVal',
                    tpl : [
                       '{email}'
                    ]
           		}]
			},{
				// Address
				xtype : 'container',
           		layout: 'hbox',
           		itemId : 'addressCon',
           		style : 'border-bottom: 1px solid #DCDCDC;',
           		items : [{
                    flex: 2,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'addressLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.addressLabel'
                    }
           		},{
                    flex: 3,
                    cls : 'repairOrderItemsConRight',
                    itemId : 'addressVal',
                    tpl : [
                       '{address}'
                    ]
           		}]
			}
        ]
    }
});