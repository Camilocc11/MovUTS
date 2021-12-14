function K2BGridFilters(JQuery) {
	this.GridColumns;
	this.GridControlName;
	this.$ = JQuery;
	var uc = this;

	// Databinding for property GridOrders
	this.SetGridColumns = function (data) {
		///UserCodeRegionStart:[SetGridColumns] (do not remove this comment.)
		this.GridColumns = data;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property GridColumns
	this.GetGridColumns = function () {
		///UserCodeRegionStart:[GetGridColumns] (do not remove this comment.)
		return this.GridColumns;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	this.show = function () {	
		if(this.GridColumns != undefined){
			var that = this;
			var gridTable = this.$("th.K2BT_ColumnWithFilter")
				.closest("table")
				.filter(function (index) {
					return that.$(this).attr("id").toLowerCase() == that.GetGridTableName(that.GridControlName).toLowerCase()
				});

			for (i = 0; this.GridColumns[i] != undefined; i++) {
				columnData = this.GridColumns[i]
				var zeroBasedIndex = columnData.GridColumnIndex - 1;
				var column = gridTable.find('th.K2BT_ColumnWithFilter:eq(' + zeroBasedIndex + ')');
				
				var span = that.$(column).children("span.K2BT_ColumnFilterButton");
				if(span.length == 0){
					span = that.$("<span class='K2BT_ColumnFilterButton' />");
					that.$(column).append(span);
					
					that.$(span).click({
						section : columnData.ColumnFilterSectionInternalName,
						span : span
					}, function (e) {
						sectionName = e.data.section;
						var currentSpan = e.data.span;
						
						uc.$(currentSpan).closest("tr").children("th").removeClass("K2BT_ColumnWithFilterOpen");
						
						that.$("#"+sectionName).toggle();
						
						if(that.$("#"+sectionName).filter(":visible").length > 0)
							uc.$(currentSpan).closest("th").addClass("K2BT_ColumnWithFilterOpen");
						
						that.$(".K2BT_GridColumnFilterSection[id != '"+sectionName+"']").hide();
						that.FixPosition(sectionName, currentSpan);
						e.stopPropagation();
					});
				}
				
				this.$("body").append(that.$("#"+columnData.ColumnFilterSectionInternalName));
				
				this.FixPosition(columnData.ColumnFilterSectionInternalName, span);
				this.UpdateStatus(columnData.ContainsActiveFilter, column);
			}
		}
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)

	this.UpdateStatus = function(containsFilter, column){
		if(containsFilter){
			this.$(column).addClass("K2BT_ColumnWithActiveFilter");
		}else{
			this.$(column).removeClass("K2BT_ColumnWithActiveFilter");
		}
	}

	this.FixPosition = function(sectionName, span){
		var section = this.$("#"+sectionName);
		th = this.$(span).closest("th");
		if(th.attr("data-k2btools-widthset") == "true" && th.css('width').length > 0){
			th.attr("data-k2btools-widthset", "true");
			th.css({width: parseFloat(th.css('width')) + span.outerWidth()});
		}
		
		var width = this.$("#"+sectionName).outerWidth();
		
		section.css({top: th.offset().top + th.height()});
		
		var leftValue = th.offset().left - width + th.outerWidth();
		if(leftValue > 0)
			section.css({left: leftValue});
		else
			section.css({left: leftValue + width});
		
		var selectedItem = this.$("#"+sectionName +" .K2BT_DateRangeItemSelected");
		if(selectedItem.length > 0){
			var offset = selectedItem.offset().top - section.offset().top;
			section.scrollTop(offset);
		}
	}
	
	this.GetGridTableName = function(controlName){
		return controlName + 'ContainerTbl';
	}
	
	this.clickHandler = function(e){
		if(!uc.$(e.target).hasClass("K2BT_ColumnFilterButton") && uc.$(e.target).closest(".K2BT_GridColumnFilterSection").length == 0 && uc.$(e.target).closest(".calendar").length == 0){
			uc.$(".K2BT_GridColumnFilterSection").hide();
			uc.$(".K2BT_ColumnWithFilterOpen").removeClass("K2BT_ColumnWithFilterOpen");
		}
	}
	
	gx.fx.obs.addObserver('grid.onafterrender', this, this.show, { single: false, unique:true });
	uc.$("a, img, button, html").on("click", this.clickHandler);
	///UserCodeRegionEnd: (do not remove this comment.):
}
