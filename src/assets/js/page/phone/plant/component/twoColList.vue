<template>
<div class="twoColList">
    <h3 :class="{breedFontCol:isbreed}">{{tableList.tableName}}</h3> 
    <table>
        <col style="width: 30%" />
        <col style="width: 70%" />
        <tbody>
            <tr v-for="(v,k) in tableList.tableProtos ">
                <td style="width: 30%">{{tableList.tableTheads[k]}}</td>
                <td style="width: 70%" v-if="v==='amount'&&values[v]!==null&&values.unit!==undefined">{{values[v]}}{{values.unit}}</td>
                <td style="width: 70%" v-else-if="values[v]">{{values[v]}}</td>
                <td style="width: 70%" v-else>{{lack}}</td>
            </tr>
        </tbody>
            
    </table>
</div>	
</template>
<style lang='sass'>
.breedFontCol{
    color:#93bf46!important;
}
.twoColList{
    width: 92%;
    margin: 0 auto;
    >h3{
        color:#3ccfb5;
        font-size: .42rem;
        padding: 4% 0% 3% 0%;
        border-bottom: 1px solid #e6e6e6; 
        font-weight:normal;
    }
    >table{
        width: 100%;
        table-layout:fixed;
        tr{
            font-size: .4rem;
            td:first-child{
                color:#333;
                width: 30%;
                box-sizing: border-box;
                padding: 1.5% 0% 1.5% 2%;
            }
            td:last-child{
                color:#989898;
                width: 70%;
                padding: 1.5% 0% 1.5% 2%;
                box-sizing: border-box;
            }
        }
    }    
}	
</style>
<script>
export default {
    name: 'twoColList',
    props: {
        tableList: {
            type: Object,
            default () {
                return {}
            }
        },
        isbreed: {
            type: Boolean,
            default: false
        },
        values: {}
    },
    data () {
        return {
            lack: '信息缺失'
        }
    },
    mounted () {
    }
}
</script>
