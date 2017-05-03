<template>
    <section class="chart-container">
        <el-row :gutter="20">
            <el-col :span="12">
                <div id="chartColumn" style="height:350px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartBar" style="height:350px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartLine" style="height:350px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartPie" style="height:350px;"></div>
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

            this.chartColumn.setOption({
                title: {text: '种植面积', x: 'center'},
                tooltip: {},
                xAxis: {
                    data: ['策划', '策划', '策划', '策划', '策划', '策划']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            })
            window.onresize = this.chartColumn.resize
            this.chartBar.setOption({
                title: { text: '销售订单', x: 'center' },
                tooltip: {
                    trigger: 'item'
                },
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
                    data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
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
                        data: [12, 21, 10, 4, 12, 5, 6, 5, 25, 23, 7]
                    }
                ]
            })
            window.onresize = this.chartBar.resize

            this.chartLine.setOption({
                title: {text: '采收报表', x: 'center'},
                tooltip: {},
                xAxis: {
                    data: ['策划', '策划', '策划', '策划', '策划', '策划']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            })
            window.onresize = this.chartLine.resize

            this.chartPie.setOption({
                title: {text: '物流统计', x: 'center'},
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1548, name: '搜索引擎'}
                    ]
                }]
            })
            window.onresize = this.chartPie.resize

            // setTimeout(function () {
            //     window.onresize = function () {
            //         this.chartLine.resize()
            //         this.chartColumn.resize()
            //         this.chartBar.resize()
            //         this.chartPie.resize()
            //     }
            // }, 1000)
            // window.onresize = this.chartColumn.resize
            // window.onresize = this.chartBar.resize
            // window.onresize = this.chartPie.resize
            // window.onresize = this.chartLine.resize
            // window.addEventListener('resize', function () {
            //     this.chartBar.resize()
            // }.bind(this))
            // window.addEventListener('resize', function () {
            //     this.chartPie.resize()
            // }.bind(this))
            // window.addEventListener('resize', function () {
            //     this.chartLine.resize()
            // }.bind(this))
            // window.addEventListener('resize', function () {
            //     this.chartColumn.resize()
            // }.bind(this))
        }
    }

</script>

<style lang="sass">
.chart-container{
	.el-col div{
        padding-left: 70px;
    }
}
    
</style>
