<template>
    <section class="chart-container">
        <el-row :gutter="20">
            <el-col :span="12">
                <div id="chartColumn"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartBar"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartLine"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartPie"></div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data () {
            return {
                chartColumn: null,
                chartBar: null,
                chartLine: null,
                chartPie: null
            }
        },
        mounted: function () {
            let _this = this
            this.chartColumn = echarts.init(document.getElementById('chartColumn'))
            this.chartBar = echarts.init(document.getElementById('chartBar'))
            this.chartLine = echarts.init(document.getElementById('chartLine'))
            this.chartPie = echarts.init(document.getElementById('chartPie'))

            axios.get('api/index/echarts')
                .then((responce) => {
                    var area = responce.data.area
                    var sell = responce.data.sell.data
                    var delivery = responce.data.delivery
                    var type = '养殖'
                    var areaX = []
                    var areaY = []
                    var sellX = []
                    var sellY = []
                    var comeX = []
                    var comeY = []
                    var harvestX = []
                    var harvestY = []
                    var deliveryX = []
                    var deliveryY = []
                    console.log(responce.data)
                    if (responce.data.come === undefined) {
                        type = '种植'
                        var harvest = responce.data.harvest.data
                        for (var h = 0; h < harvest.length; h++) {
                            harvestX[h] = harvest[h].date
                            harvestY[h] = parseInt(harvest[h].amount)
                        }
                        this.chartLine.setOption({
                            title: {text: '采收报表', x: 'center'},
                            xAxis: {
                                data: harvestX
                            },
                            yAxis: {},
                            series: [{
                                name: '销量',
                                type: 'bar',
                                data: harvestY
                            }]
                        })
                    } else {
                        var come = responce.data.come.data
                        for (var c = 0; c < come.length; c++) {
                            comeX[c] = come[c].date
                            comeY[c] = parseInt(come[c].amount)
                        }
                        this.chartLine.setOption({
                            title: {text: '出栏报表', x: 'center'},
                            xAxis: {
                                data: comeX
                            },
                            yAxis: {},
                            series: [{
                                name: '销量',
                                type: 'bar',
                                data: comeY
                            }]
                        })
                    }
                    for (var i = 0; i < area.length; i++) {
                        areaX[i] = area[i].date
                        areaY[i] = parseInt(area[i].area)
                    }
                    for (var j = 0; j < sell.length; j++) {
                        sellX[j] = sell[j].date
                        sellY[j] = parseInt(sell[j].amount)
                    }
                    for (var k in delivery) {
                        if (k === 'self') {
                            deliveryX.push('自运')
                            deliveryY.push({value: delivery[k], name: '自运'})
                        }
                        if (k === 'consign') {
                            deliveryX.push('托运')
                            deliveryY.push({value: delivery[k], name: '托运'})
                        }
                        if (k === 'selve') {
                            deliveryX.push('自提')
                            deliveryY.push({value: delivery[k], name: '自提'})
                        }
                    }
                    this.chartColumn.setOption({
                        title: {text: type + '面积(单位：亩)', x: 'center'},
                        xAxis: {
                            data: areaX
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            name: '',
                            type: 'bar',
                            data: areaY
                        }]
                    })
                    this.chartBar.setOption({
                        title: { text: '销售订单', x: 'center' },
                        toolbox: {
                            show: true,
                            feature: {
                                dataView: {show: true, readOnly: false},
                                restore: {show: true},
                                saveAsImage: {show: true}
                            }
                        },
                        calculable: true,
                        grid: {
                            borderWidth: 0,
                            y: 80,
                            y2: 60
                        },
                        xAxis: {
                            type: 'category',
                            show: false,
                            data: sellX
                        },
                        yAxis: [
                            {
                                type: 'value',
                                show: false
                            }
                        ],
                        series: [
                            {
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: function (params) {
                                            // build a color map as your need.
                                            var colorList = ['#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B', '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD', '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                                            ]
                                            return colorList[params.dataIndex]
                                        },
                                        label: {
                                            show: true,
                                            position: 'top',
                                            formatter: '{b}\n{c}'
                                        }
                                    }
                                },
                                data: sellY
                            }
                        ]
                    })
                    this.chartPie.setOption({
                        title: {text: '物流统计', x: 'center'},
                        legend: {
                            orient: 'vertical',
                            x: 'left',
                            data: deliveryX
                        },
                        series: [{
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: deliveryY
                        }]
                    })
                })
            window.onresize = this.chartColumn.resize
            window.onresize = this.chartBar.resize
            window.onresize = this.chartLine.resize
            window.onresize = this.chartPie.resize
        }
    }

</script>

<style lang="sass">
.chart-container{
	.el-col div{
        height: 350px;
        padding-left: 70px;
    }
}
</style>
