/**
 * 工单详情子内容
 * @class iTenants.view.WorkOrderDetailsChild
 * @author duwei
 * @date 2014-12-26
 */

Ext.define('iTenants.view.WorkOrderDetailsChild', {
    extend: 'Ext.Container',
    xtype : 'workOrderDetailsChild',
    
    requires : ['Ext.Label'],
    config: {
        itemId: 'workOrderDetailsChild',
        layout : 'vbox',
        items: [{
        		// Unit Information
	        	xtype: 'label',
				cls: 'subtitleLabel',
				locales : {
					html : 'workOrderDetailsChild.unitText'
				}
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
				// OPS Contact Person
				xtype : 'container',
           		layout: 'hbox',
           		itemId : 'oContactPersonCon',
           		style : 'border-bottom: 1px solid #DCDCDC;',
           		items : [{
                    flex: 3,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'oContactPersonLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.oContactPersonLabel'
                    }
           		},{
                    flex: 2,
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
                    flex: 3,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'fContactPersonLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.fContactPersonLabel'
                    }
           		},{
                    flex: 2,
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
				// Pre-inspection
				xtype : 'container',
           		layout: 'hbox',
           		itemId : 'preInspectionCon',
           		style : 'border-bottom: 1px solid #DCDCDC;',
           		items : [{
                    flex: 2,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'preInspectionLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.preInspection'
                    }
           		},{
           			xtype: 'image',
           			flex: 3,
           			itemId: 'preInspection',
           			docked : 'right',
           			cls : 'repairOrderItemsConRight',
           			style : 'background-size:17px',
           			src : "resources/images/arrow-black.png"
           		}]
			},{
				// Tenant Information
				xtype: 'label',
				cls: 'subtitleLabel',
				locales : {
					html : 'workOrderDetailsChild.tenantText'
				}
			},{
				// 租客的代表（姓名，联系电话，电子邮件）
				xtype : 'container',
           		itemId : 'tenantRepresentatives',
				style : 'border-bottom: 1px solid #DCDCDC;background:white',
           		tpl : [
           		    '<div class="informationHeadImg"></div>',
           		    '<div class="tenantInformation">',
           		    	'<div class="post">{post}</div>',
           		    	'<div class="name">{name}</div>',
           		    	'<div class="contacts">',
           		    		'<div class="mobile">{mobile}</div>',
           		    		'<div class="email">{email}</div>',
           		    	'</div>',
           		    '</div>'
           		]
			},{
				// Date of possession（所有日期）
				xtype : 'container',
           		layout: 'hbox',
           		itemId : 'possessionDateCon',
           		style : 'border-bottom: 1px solid #DCDCDC;',
           		items : [{
                    flex: 1,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'possessionDateLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.possessionDateLabel'
                    }
           		},{
                    flex: 1,
                    cls : 'repairOrderItemsConRight',
                    itemId : 'possessionDateVal',
                    tpl : [
                       '{possessionDate}'
                    ]
           		}]
			},{
				// Lease period（租赁期限）
				xtype : 'container',
           		layout: 'hbox',
           		itemId : 'periodCon',
           		style : 'border-bottom: 1px solid #DCDCDC;',
           		items : [{
                    flex: 2,
                    cls : 'repairOrderItemsConLeft',
                    itemId : 'periodLabel',
                    locales : {
                    	html : 'workOrderDetailsChild.periodLabel'
                    }
           		},{
                    flex: 3,
                    cls : 'repairOrderItemsConRight',
                    itemId : 'periodVal',
                    tpl : [
                       '{period}'
                    ]
           		}]
			},{
				// Lease Area（租赁面积（进行最终调查））
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
				// Contacts
				xtype: 'label',
				cls: 'subtitleLabel',
				locales : {
					html : 'workOrderDetailsChild.contactsLabel'
				}
			},{
				// 营销经理的联系方式（姓名，联系电话，电子邮件）
				xtype : 'container',
				itemId : 'marketingManager',
				style : 'border-bottom: 1px solid #DCDCDC;background:white',
				tpl : [
			        '<div class="informationHeadImg"></div>',
				    '<div class="tenantInformation">',
				    	'<div class="post">{post}</div>',
				    	'<div class="name">{name}</div>',
				    	'<div class="contacts">',
				    		'<div class="mobile">{mobile}</div>',
				    		'<div class="email">{email}</div>',
				    	'</div>',
				    '</div>'
				]
			},{
				// 资产经理的联系方式（姓名，联系电话，电子邮件）
				xtype : 'container',
				itemId : 'assetManager',
				style : 'border-bottom: 1px solid #DCDCDC;background:white',
				tpl : [
			        '<div class="informationHeadImg"></div>',
				    '<div class="tenantInformation">',
				    	'<div class="post">{post}</div>',
				    	'<div class="name">{name}</div>',
				    	'<div class="contacts">',
				    		'<div class="mobile">{mobile}</div>',
				    		'<div class="email">{email}</div>',
				    	'</div>',
				    '</div>'
				]
			},{
				// 物业服务代表（姓名，联系电话，电子邮件）
				xtype : 'container',
				itemId : 'propertyServices',
				style : 'border-bottom: 1px solid #DCDCDC;background:white',
				tpl : [
			        '<div class="informationHeadImg"></div>',
				    '<div class="tenantInformation">',
				    	'<div class="post">{post}</div>',
				    	'<div class="name">{name}</div>',
				    	'<div class="contacts">',
				    		'<div class="mobile">{mobile}</div>',
				    		'<div class="email">{email}</div>',
				    	'</div>',
				    '</div>'
				]
			}
        ]
    }
});