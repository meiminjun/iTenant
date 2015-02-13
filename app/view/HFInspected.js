/**
 * HandOverForm 检查前提条件
 * iTenants.view.HFInspected
 * @author duwei
 * @date 20150129
 */
Ext.define("iTenants.view.HFInspected",{
    extend:'Ext.Container',
    xtype:'hfinspected',

    requires:[],

    config:{
		itemId : 'hfinspected',
        layout:'vbox',
        name : 'commissioningSCPanel',
        cls : 'handOverformCls',
        tpl : Ext.create('Ext.XTemplate',
       			'<div class="defaultFont-style">',
   					'<div class="subContent">',
   						'{CommissioningStepDetilIntr}',
   					'</div>',
   					'<tpl for="inspected">',
						'<div class="table_subTitle" style="font-weight:normal">',
       						'{tableName}',
       					'</div>',
       					'<table class="lblProgress">',
							'<tbody>',
								'<tpl for="tableValueList">',
									'<tpl if="xindex==1">',
										'<tr style="font-weight:bold;">',
											'<td class="phaseC" style="width:10%"><div class="phaseDivL">{column1}</div></td>',
											'<td class="phaseC" style="width:30%"><div class="phaseDivL">{column2}</div></td>',
											'<td class="phaseC" style="width:60%"><div class="phaseDivL">{column3}</div></td>',
										'</tr>',
									'<tpl else>',
										'<tpl if="group">',
											'<tr style="font-weight: bold">',
												'<td class="phaseC" style="width:10%;background:#D9D9D9"><div class="phaseDivL">{column1}</div></td>',
												'<td colspan = "2" class="phaseL" style="width:90%;background:#D9D9D9;border-right:0px"><div class="phaseDivL">{column2}</div></td>',
											'</tr>', 
										'<tpl else>',
											'<tr>',
												'<td class="phaseC" style="width:10%"><div class="phaseDivL">{column1}</div></td>',
												'<td class="phaseC" style="width:30%"><div class="phaseDivL">{column2}</div></td>',
												'<td class="phaseL" style="width:60%"><div class="phaseDivL">{column3}</div></td>',
											'</tr>', 
										'</tpl>',
									'</tpl>',
								'</tpl>', 
							'</tbody>',
						'</table>',
					'</tpl>', 
       			'</div>'
   	    )
    }
});