<template>
<div class="twoColList">
    <h3>{{tableList.tableName}}</h3> 
    <table>
        <tr v-for="(v,k) in tableList.tableProtos ">
            <td>{{tableList.tableTheads[k]}}</td>
            <td v-if="v=='amount'">{{values[v]}}{{values.unit}}</td>
            <td v-else>{{values[v]}}</td>
        </tr>
    </table>
</div>	
</template>
<style lang='sass'>
.twoColList{
    width: 92%;
    margin: 0 auto;
    >h3{
        color:#3ccfb5;
        font-size: 1.4rem;
        padding: 4% 0% 3% 0%;
        border-bottom: 1px solid #e6e6e6; 
        font-weight:normal;
    }
    >table{
        width: 100%;
        tr{
            font-size: 1.4rem;
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
        values: {}
    },
    data () {
        return {
        }
    },
    mounted () {
    }
}
</script>
