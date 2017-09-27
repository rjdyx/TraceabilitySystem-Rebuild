/**
 * @description:首页echarts
 * @author 吴燕萍
 * @date 2017/8/25 
 *  
 */ 
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
        <div id='echartsId' v-loading="loading" element-loading-text="拼命加载中"></div>
    </section>
</template>

<script>
    import echarts from 'echarts'
    export default {
        data () {
            return {
                echartsId: null,
                options: [{
                    value: 'e4',
                    label: '土壤湿度',
                    symbol: '%RH'
                }, {
                    value: 'e9',
                    label: '数字气压',
                    symbol: 'hpa'
                }, {
                    value: 'e2',
                    label: '雨量',
                    symbol: 'mm/min'
                }, {
                    value: 'e4',
                    label: '土壤温度',
                    symbol: '℃'
                }, {
                    value: 'e1',
                    label: '风速',
                    symbol: 'm/s'
                }, {
                    value: 'e10',
                    label: '照度',
                    symbol: 'LUX'
                }],
                pickerOptions0: {
                    disabledDate (time) {
                        return time.getTime() > Date.now()
                    }
                },
                dateValue: (new Date()).toLocaleDateString(),
                selectValue: localStorage.getItem('echartsSelectValue') ? localStorage.getItem('echartsSelectValue') : 'e4',
                echartsOptions: [],
                xList: [],
                yDate: [],
                type: 'e4',
                date: '',
                loading: true
            }
        },
        mounted () {
            // 初始化接口数据
            $('.titleHome').hide()
            this.$parent.settitle = '数据统计'
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
            window.onresize = this.echartsId.resize
            this.getData()
            var op = this.changeEOption()
            this.echartsId.setOption(op)
        },
        methods: {
            // 数据请求
            getData () {
                let params = 'type=' + this.type
                if (this.date !== '') {
                    params += '&date=' + this.date
                }
                axios.get('/api/maxdata/history?' + params).then((res) => {
                    if (res.data !== 'none') {
                        if (res.data.xs.length && res.data.xs !== undefined) {
                            this.xList = res.data.xs
                            this.yDate = res.data.ys
                            this.echartsId.setOption(this.changeEOption())
                        } else {
                            this.$message('数据获取失败')
                        }
                    } else {
                        this.$message('该时间段无监测数据')
                        this.xList = 0
                        this.yDate = 0
                        this.echartsId.setOption(this.changeEOption())
                    }
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                    this.$message('接口访问失败')
                })
            },
            // 时间改变事件
            changeDateValueFn (value) {
                this.date = value
                this.loading = true
                this.getData()
                var op = this.changeEOption()
                this.echartsId.setOption(op)
            },
            // 下拉框改变事件
            changeTypeValueFn (value) {
                this.type = value
                this.loading = true
                this.getData()
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
                return {
                    // 图例
                    legend: {
                        // data: ['湿度']
                        data: [this.options[selectIndex].label]
                    },
                    // x轴
                    xAxis: {
                        data: xList
                    },
                    // y轴
                    yAxis: {
                        // name: '%'
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
        },
        destroyed () {
            $('.titleHome').show()
            this.$parent.settitle = '首页'
        }
    }

</script>

<style lang='sass'>
.chart-container{
    height:100%;
    #echartsId{
        height: 100%;
        .el-loading-mask{
            z-index:1000;
        }
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
