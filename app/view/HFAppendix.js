/**
 * HandOverForm 附录(有缺陷/现状)
 * iTenants.view.HFAppendix
 * @author duwei
 * @date 20150129
 */
Ext.define("iTenants.view.HFAppendix",{
    extend:'Ext.Container',
    xtype:'hfappendix',

    requires:[],

    config:{
		itemId : 'hfappendix',
        layout:'vbox',
        name : 'commissioningSCPanel',
        cls : 'handOverformCls',
        tpl : Ext.create('Ext.XTemplate',
       			'<div class="defaultFont-style">',
   					'<div class="subContent">',
   						'{CommissioningStepDetilIntr}',
   					'</div>',
   					'<tpl for="appendix">',
						'<div class="table_subTitle">',
       						'{tableName}',
       					'</div>',
       					'<table class="lblProgress">',
							'<tbody>',
								'<tpl for="tableValueList">',
									'<tpl if="xindex==1">',
										'<tr style="font-weight:bold;">',
											'<td class="phaseC" style="width:7%"><div class="phaseDivL">{column1}</div></td>',
											'<td class="phaseC" style="width:25%"><div class="phaseDivL">{column2}</div></td>',
											'<td class="phaseC" style="width:30%"><div class="phaseDivL">{column3}</div></td>',
											'<td class="phaseC" style="width:38%"><div class="phaseDivL">{column4}</div></td>',
										'</tr>',
									'<tpl else>',
										'<tr>',
											'<td class="phaseC" style="width:7%"><div class="phaseDivL">{column1}</div></td>',
											'<td class="phaseC" style="width:25%"><div class="phaseDivL">{column2}</div></td>',
											'<td class="phaseL" style="width:30%"><div class="phaseDivL">{column3}</div></td>',
											'<td class="phaseL" style="width:38%"><div class="phaseDivL">{[this.getImgsHtml(values.column4)]}</div></td>',
										'</tr>', 
									'</tpl>',
								'</tpl>', 
							'</tbody>',
						'</table>',
					'</tpl>', 
       			'</div>',
       			{
        			getImgsHtml : function(obj){
        				if(typeof obj === 'string'){
        					return obj;
        				}
        				var htmlArr = [];
        				if(obj.comment){
        					htmlArr.push('<div>'+ obj.userAccount + ':' + obj.comment + '(' + obj.releaseDate + ')</div>');
        				}
        				if(obj.postilUrl){
        					htmlArr.push('Floor plan:<div class="plan"><img src="'+ obj.postilUrl + '" /></div>');
        				}
        				htmlArr.push('<div class="imgs">');
        				Ext.each(obj.photoUrl,function(item){
        					htmlArr.push('<img src="'+ item +'" />');
        				});
        				htmlArr.push('</div>');
        				return htmlArr.join('');
        			}
       			}
   	    )
    }
});