(function() {
	// 生成 圆饼图
	var pie_score_icon = ["0 -60px", "0 -128px", "0 -110px", "0 -30px", "0 -2px"],
		pie_money_icon = ["0 -128px", "0 -4px"],
		pie_score_bg   = ['#58dd8d', '#ffb20e', '#64b5f6', '#a288c9', '#fe7575'],
		pie_money_bg   = ['#64b5f6', '#58dd8d'];

	$(".pie_complete").highcharts({
		chart: {
			type: 'pie'
		},
		colors: [
			'#77cb5c',
			'#e0e0e0'
		],
		credits: { //右下角的文本  
            enabled: false
        },
        title: {
        	text: ""
        },
        plotOptions: {
            pie: {
                innerSize: 148,
                dataLabels: {
                    enabled: false
                }
            },
            series: {
            	states: {
            		hover: {
            			enabled: false
            		}
            	}
            }
        },
        series: [{
            data: [
                ['complete', 8],
                ['uncomplete', 3]
            ]
        }],
        tooltip: {
            enabled: false
        }
	});
	$(".pie_score").highcharts({
		chart: {
			type: 'pie'
		},
		colors: [
			'#58dd8d',
			'#ffb20e',
			'#64b5f6',
			'#a288c9',
			'#fe7575'
		],
		credits: { //右下角的文本  
            enabled: false
        },
        title: {
        	text: ""
        },
        plotOptions: {
            pie: {
                innerSize: 116,
                dataLabels: {
                    enabled: false
                }
            },
            series: {
            	point: {
            		events: {
            			mouseOver: function(e) {
            				this.select();

            				$("#tb_score .detail li").eq(this.index).css({
            					"background": this.color,
            					"color": "#fff"
            				}).children("span").css("color", "#fff")
            				  .prev("i").css("backgroundPosition", pie_score_icon[this.index]);
            			},
            			mouseOut: function(e) {
            				this.select();

            				$("#tb_score .detail li").eq(this.index).attr("style", "")
            					.children().attr("style", "");
            			}
            		}
            	}
            }
        },
        series: [{
            data: [
                ['完成课程', 8],
                ['打卡', 3],
                ['完成作业', 5],
                ['参与讨论', 10],
                ['其他', 1]
            ]
        }],
        tooltip: {
            enabled: false
        }
	});
	$(".pie_score_pc").highcharts({
		chart: {
			type: 'pie'
		},
		colors: [
			'#58dd8d',
			'#ffb20e',
			'#64b5f6',
			'#a288c9',
			'#fe7575'
		],
		credits: { //右下角的文本  
            enabled: false
        },
        title: {
        	text: ""
        },
        plotOptions: {
            pie: {
                innerSize: 116,
                dataLabels: {
                    enabled: false
                }
            },
            series: {
            	point: {
            		events: {
            			mouseOver: function(e) {
            				this.select();

            				$("#tb_score .detail li").eq(this.index).css({
            					"background": this.color,
            					"color": "#fff"
            				}).children("span").css("color", "#fff")
            				  .prev("i").css("backgroundPosition", pie_score_icon[this.index]);
            			},
            			mouseOut: function(e) {
            				this.select();

            				$("#tb_score .detail li").eq(this.index).attr("style", "")
            					.children().attr("style", "");
            			}
            		}
            	}
            }
        },
        series: [{
            data: [
                ['完成课程', 8],
                ['打卡', 3],
                ['完成作业', 5],
                ['参与讨论', 10],
                ['其他', 1]
            ]
        }],
        tooltip: {
            enabled: false
        }
	});
	$(".pie_money").highcharts({
		chart: {
			type: 'pie'
		},
		colors: [
			'#64b5f6',
			'#58dd8d'
		],
		credits: { //右下角的文本  
            enabled: false
        },
        title: {
        	text: ""
        },
        plotOptions: {
            pie: {
                innerSize: 116,
                dataLabels: {
                    enabled: false
                }
            },
            series: {
            	point: {
            		events: {
            			mouseOver: function(e) {
            				this.select();

            				$("#tb_money .detail li").eq(this.index).css({
            					"background": this.color,
            					"color": "#fff"
            				}).children("span").css("color", "#fff")
            				  .prev("i").css("backgroundPosition", pie_money_icon[this.index]);
            			},
            			mouseOut: function(e) {
            				this.select();

            				$("#tb_money .detail li").eq(this.index).attr("style", "")
            					.children().attr("style", "");
            			}
            		}
            	}
            }
        },
        series: [{
            data: [
                ['打卡', 8],
                ['参与活动', 3]
            ]
        }],
        tooltip: {
            enabled: false
        }
	});
	$(".pie_money_pc").highcharts({
		chart: {
			type: 'pie'
		},
		colors: [
			'#64b5f6',
			'#58dd8d'
		],
		credits: { //右下角的文本  
            enabled: false
        },
        title: {
        	text: ""
        },
        plotOptions: {
            pie: {
                innerSize: 116,
                dataLabels: {
                    enabled: false
                }
            },
            series: {
            	point: {
            		events: {
            			mouseOver: function(e) {
            				this.select();

            				$("#tb_money .detail li").eq(this.index).css({
            					"background": this.color,
            					"color": "#fff"
            				}).children("span").css("color", "#fff")
            				  .prev("i").css("backgroundPosition", pie_money_icon[this.index]);
            			},
            			mouseOut: function(e) {
            				this.select();

            				$("#tb_money .detail li").eq(this.index).attr("style", "")
            					.children().attr("style", "");
            			}
            		}
            	},
            	states: {
            		hover: {
                        enabled: false
                    }
            	}
            }
        },
        series: [{
            data: [
                ['打卡', 8],
                ['参与活动', 3]
            ]
        }],
        tooltip: {
            enabled: false
        }
	});

	var pie_score    = $(".pie_score").highcharts(),
		pie_score_pc = $(".pie_score_pc").highcharts(),
		pie_money    = $(".pie_money").highcharts(),
		pie_money_pc = $(".pie_money_pc").highcharts();

	$("#tb_score .detail li").hover(function(e) {
		var idx = $(this).index();

		$(this).css("background", pie_score_bg[idx]);

		pie_score.series[0].points[idx].select();
		pie_score_pc.series[0].points[idx].select();
	}, function() {
		var idx = $(this).index();

		$(this).attr("style", "");

		pie_score.series[0].points[idx].select();
		pie_score_pc.series[0].points[idx].select();
	});
	$("#tb_money .detail li").hover(function(e) {
		var idx = $(this).index();

		$(this).css("background", pie_money_bg[idx]);

		pie_money.series[0].points[idx].select();
		pie_money_pc.series[0].points[idx].select();
	}, function() {
		var idx = $(this).index();

		$(this).attr("style", "");

		pie_money.series[0].points[idx].select();
		pie_money_pc.series[0].points[idx].select();
	});
}).call(this);
