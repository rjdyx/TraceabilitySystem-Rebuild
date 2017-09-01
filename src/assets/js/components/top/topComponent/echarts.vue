<template>
    <section class='chart-container'>
        <div class="chartSearch">
            <el-date-picker
                v-model="dateValue"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0"
                @change='changeDateValueFn'
                format>
            </el-date-picker>
            <el-select v-model="selectValue" placeholder="请选择" @change="changeTypeValueFn">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div id='echartsId'></div>
    </section>
</template>

<script>
    import echarts from 'echarts'
    export default {
        data () {
            return {
                echartsId: null,
                options: [{
                    value: 'humidity',
                    label: '湿度',
                    symbol: '℃'
                }, {
                    value: 'KPa',
                    label: '数字气压',
                    symbol: 'pa'
                }, {
                    value: 'rainfall',
                    label: '雨量',
                    symbol: 'mm'
                }, {
                    value: 'temp',
                    label: '温度',
                    symbol: '℃'
                }, {
                    value: 'windSpeed',
                    label: '风速',
                    symbol: 'm/s'
                }],
                pickerOptions0: {
                    disabledDate (time) {
                        return time.getTime() > Date.now() - 8.64e7
                    }
                },
                dateValue: '2017-08-25',
                selectValue: localStorage.getItem('echartsSelectValues') || 'humidity',
                echartsOptions: [],
                // xList: [ // 数据格式
                //     ['2017-8-25 1:00', 116], ['2017-8-25 2:00', 300], ['2017-8-25 3:00', 150], ['2017-8-25 4:00', 85], ['2017-8-26 1:00', 129], ['2017-8-26 2:00', 190], ['2017-8-26 3:00', 200], ['2017-8-26 4:00', 180], ['2017-8-27 1:00', 321], ['2017-8-27 2:00', 250], ['2017-8-27 3:00', 213], ['2017-8-27 4:00', 160], ['2017-8-28 1:00', 200], ['2017-8-28 2:00', 215], ['2017-8-28 3:00', 159], ['2017-8-28 4:00', 189]
                // ]
                xList: ['0.00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
                yDate: [116, 300, 150, 85, 129, 190, 200, 180, 321, 250, 213, 160, 200, 215, 159, 189, 150, 210, 142, 222, 256, 213, 324, 149]
            }
        },
        mounted () {
            // 1.基于准备好的dom，初始化echarts实例
            this.echartsId = echarts.init(document.getElementById('echartsId'))
            var colors = ['#62cded', '#b3b3b3', '#d8681d']
            // 2.指定图表的配置项和数据
            var options = {
                color: colors,
                tooltip: {
                    trigger: 'axis'
                },
                // 图例
                legend: {
                    top: 0,
                    data: [],
                    left: '10%',
                    textStyle: {
                        fontSize: 18,
                        color: '#7b8da0'
                    }
                },
                // 网格
                grid: {
                    left: '5%',
                    right: '5%',
                    bottom: '20%',
                    top: '10%',
                    containLabel: true
                },
                // x轴
                xAxis: {
                    type: 'category',
                    data: [],
                    boundaryGap: false,
                    name: '时间',
                    splitLine: {
                        show: true
                    },
                    nameTextStyle: {
                        color: '#d8681d',
                        fontSize: '18'
                    },
                    axisLine: {
                        lineStyle: {
                            color: colors[1]
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold',
                            fontSize: '14'
                        }
                    }
                },
                // y轴
                yAxis: {
                    type: 'value',
                    name: '',
                    nameTextStyle: {
                        color: '#d8681d',
                        fontSize: '18'
                    },
                    axisLine: {
                        lineStyle: {
                            color: colors[1]
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold',
                            fontSize: '14'
                        }
                    }
                },
                // 系列列表
                series: [{
                    name: '',
                    type: 'line',
                    stack: '',
                    data: []
                }],
                // 区域缩放
                dataZoom: [{
                    type: 'slider',
                    xAxisIndex: 0,
                    filterMode: 'empty',
                    backgroundColor: '#6b97b5',
                    bottom: '10%'
                },
                {
                    type: 'inside',
                    xAxisIndex: 0,
                    filterMode: 'empty'
                }
                ]
            }
            // 3.使用刚指定的配置项和数据显示图表。先画xy轴
            this.echartsId.setOption(options)
            setTimeout(() => {
                // 4。在添加数据
                var op = this.changeEOption()
                this.echartsId.setOption(op)
            }, 1000)
            window.onresize = this.echartsId.resize
        },
        methods: {
            // 时间改变事件
            changeDateValueFn (value) {
                var op = this.changeEOption()
                this.echartsId.setOption(op)
            },
            // 下拉框改变事件
            changeTypeValueFn (value) {
                var op = this.changeEOption()
                this.echartsId.setOption(op)
            },
            // 重新返回一个echarts的options
            changeEOption () {
                var arr = this.options.map((item) => {
                    return item.value
                })
                // 下拉框下标
                var selectIndex = arr.indexOf(this.selectValue)
                var xList = this.xList
                var yDate = this.yDate
                // if (!this.dateValue) {
                //     // 没有日期时的x轴刻度, y轴数据
                //     xList = this.xList.map((item) => {
                //         var emptyI = item[0].indexOf(' ')
                //         return item[0].substring(0, emptyI)
                //     })
                //     xList = Array.from(new Set(xList))
                //     yDate = this.xList.filter((item, index) => {
                //         return index % xList.length === 0
                //     }).map((item) => {
                //         return item[1]
                //     })
                // } else {
                //     // 有日期时的x轴刻度, y轴数据
                //     xList = this.xList.map((item) => {
                //         var emptyI = item[0].indexOf(' ')
                //         return item[0].substring(emptyI + 1)
                //     })
                //     xList = Array.from(new Set(xList))
                //     var dateValue = this.dateValue.toLocaleDateString().replace(/\//g, '-')
                //     var reg = new RegExp(dateValue, 'i')
                //     yDate = this.xList.filter((item, index) => {
                //         return reg.test(item[0])
                //     }).map((item) => {
                //         return item[1]
                //     })
                // }
                console.log(xList)
                console.log(yDate)
                return {
                    // 图例
                    legend: {
                        // data: ['湿度']
                        data: [this.options[selectIndex].label]
                    },
                    // x轴
                    xAxis: {
                        // data: ['2000-6-5', '2000-6-6', '2000-6-7', '2000-6-8']
                        data: xList
                    },
                    // y轴
                    yAxis: {
                        // name: '℃'
                        name: this.options[selectIndex].symbol
                    },
                    // 系列列表
                    series: [{
                        type: 'line',
                        name: this.options[selectIndex].label,
                        data: yDate
                    }]
                }
            }
        }
    }

</script>

<style lang='sass'>
.chart-container{
    height:100%;
    #echartsId{
        height: 100%;
    }
    .chartSearch{
        text-align:right;
        margin-right:5%;
        .el-date-editor{
            margin-right: 20px;
        }
    }
}
</style>
