<template>
<div>
      <p @click="generate">生成文档</p>
</div>
</template>

<script>
import JSZip from '../../../../public/lib/jszip.js'
import DDoc from '../../../../public/lib/DDoc.js'
export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            list: ['种植批次号', '所属种植区', '种植人', '种植日期', '茶叶品种名称', '当前批次面积', '状态'],
            listProtos: ['serial', 'plantation_name', 'operate', 'date', 'tea_name', 'area_unit', 'state'],
            tableheadList: ['图片但是嘎都给啊但是嘎嘎啊个', '图片标题', '图片描述'],
            tableheadListProtos: ['thumb', 'name', 'desc', 'date', 'memo'],
            arr: [
                {
                    name: 'wyp',
                    age: '22',
                    sex: 'girl'
                },
                {
                    name: 'yoko',
                    age: '21',
                    sex: 'girl'
                },
                {
                    name: 'hb',
                    age: '23',
                    sex: 'boy'
                }
            ]
        }
    },
    methods: {
        gsh (arr) {
            var dArr = []
            for (var i = 0; i < arr.length; i++) {
                dArr[i] = []
                for (var key in arr[i]) {
                    // console.log(arr[i][key])
                    dArr[i].push(arr[i][key])
                }
            }
            dArr.unshift(this.tableheadList)
            console.log(dArr)
            return dArr
        },
        generate () {
            var doc = new window.DDoc()
            doc.addHeader('广东天池茶叶股份有限公司', doc.HeaderType.H2)
            doc.addHeader('xxx单', doc.HeaderType.H1, {
                textAlign: doc.AlignType.Center
            })
            var string = ''
            for (var i = 0; i < this.list.length; i++) {
                // string +=this.list[i] + ':' + this.listProtos[i] +
            }
            doc.addParagraph()
            var tableArr = this.gsh(this.arr)

            doc.newLine()
            doc.addTable(tableArr, {color: 'FF0000'})

            doc.newLine()
            doc.addTable(tableArr, {color: 'FF0000'})

            var _temp = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAmCAIAAADyTaq0AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAWFJREFUWEftVgkOhCAMVB+0L9n/f4flUGQVcIptPQIhakwpnZm2MA6f7/C8YdaQw+foHtOtgRgzZGcMOoLyHzpg7FZts0p1Io+zM0pgWuW3yZOdBX9yyqRSHAkTgsPFUwIzS+9f/3Ba1Sms2+SYt8KVsbXoA6w/ZxBLhynlyeZ/CDj8REYOCQzGtRQAyWqDRMRvgytzbu+QcsJDBUx6GmSrnAmkBYM0kdbdVASJwU0zlkq0zemxX0g8NygUOtqWNKvIE/sM2Jqsma4gsRxVaobCMN12TQAMDFJWZ45IdO1B98DA0OnKryiRwuTfg4nFwOT0KjcejHa9SoFN0qy5BUvFRvbbXDN3VBMEs6/cQBu1zZ20P9AKBENW/JIFymAE7zOWPmUwsoJtwAifasUa4wH5NmXQixEPe5Je3qaMJFe6vrsyunzju3VlcK54LWPfLZxXXRlevvm8dWX4uOT19CplfqqGCgdY+hAkAAAAAElFTkSuQmCC'
            doc.generate()
        }
    }
}
</script>
