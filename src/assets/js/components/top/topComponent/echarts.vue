<template>
    <section class="chart-container">
        <el-row :gutter="20">
            <el-col :span="6">
                <div id="humidity"></div>
            </el-col>
            <el-col :span="6">
                <div id="numberKPa"></div>
            </el-col>
            <el-col :span="6">
                <div id="windDirection"></div>
            </el-col>
            <el-col :span="6">
                <div id="videoDetection"></div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'
    export default {
        data () {
            return {
                humidity: null,
                numberKPa: null,
                windDirection: null,
                videoDetection: null
            }
        },
        mounted: function () {
            let _this = this
            this.humidity = echarts.init(document.getElementById('humidity'))
            this.numberKPa = echarts.init(document.getElementById('numberKPa'))
            this.windDirection = echarts.init(document.getElementById('windDirection'))
            this.videoDetection = echarts.init(document.getElementById('videoDetection'))

            axios.get('api/index/echarts')
                .then((responce) => {
                    var bus = {}
                    var area = []
                    var sell = []
                    var delivery = []
                    var harvest = []
                    var come = []
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
                    // console.log(responce.data.area)
                    if (responce.data.area !== undefined) bus = responce.data
                    if (bus.area !== undefined) area = bus.area
                    if (bus.sell !== undefined) sell = bus.sell.data
                    if (bus.delivery !== undefined) delivery = bus.delivery
                    if (bus.come === undefined) {
                        type = '种植'
                        if (bus.harvest !== undefined) {
                            harvest = bus.harvest.data
                            for (var h = 0; h < harvest.length; h++) {
                                harvestX[h] = harvest[h].date
                                harvestY[h] = parseInt(harvest[h].amount)
                            }
                        }
                        this.windDirection.setOption({
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
                        if (bus.come !== undefined) {
                            come = bus.come.data
                            for (var c = 0; c < come.lengtc; c++) {
                                comeX[c] = come[c].date
                                comeY[c] = parseInt(come[c].amount)
                            }
                        }
                        this.windDirection.setOption({
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
                    this.humidity.setOption({
                        tooltip: {
                            formatter: '{a} <br/>{b} : {c}%'
                        },
                        toolbox: {
                            feature: {
                                restore: {},
                                saveAsImage: {}
                            }
                        },
                        series: [
                            {
                                name: '业务指标',
                                type: 'gauge',
                                detail: {formatter: '{value}%'},
                                data: [{value: 50, name: '完成率'}]
                            }
                        ]
                    })
                    this.numberKPa.setOption({
                        tooltip: {
                            formatter: '{a} <br/>{b} : {c}%'
                        },
                        toolbox: {
                            feature: {
                                restore: {},
                                saveAsImage: {}
                            }
                        },
                        series: [
                            {
                                name: '业务指标',
                                type: 'gauge',
                                detail: {formatter: '{value}%'},
                                data: [{value: 50, name: '完成率'}]
                            }
                        ]
                    })
                    this.videoDetection.setOption({
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
            window.onresize = this.humidity.resize
            window.onresize = this.numberKPa.resize
            window.onresize = this.windDirection.resize
            window.onresize = this.videoDetection.resize
        }
    }

</script>

<style lang="sass">
.chart-container{
	height:100%;
    .el-row {
        margin-bottom: 20px;
        height:30%;
        &:last-child {
          margin-bottom: 0;
        }
        .el-col {
            height: 100%;
            div{
                border:1px solid #dcdcdc;
                border-radius:10px;
                height: 100%;
            }
        }
    }
}
</style>
