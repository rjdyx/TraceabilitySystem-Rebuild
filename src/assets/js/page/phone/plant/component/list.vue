<template>
<div>
	<div class="list">
        <h3>用药记录</h3>
        <table>
            <col style="width: 25%" />
            <col style="width: 25%" />
            <col style="width: 25%" />
            <col style="width: 25%" />
            <tbody>
                 <tr>
                    <th style="width: 25%" v-for="item in thList">{{item}}</th>
                </tr>
                <tr v-for="item in trList" @click="goListDetails">
                    <td v-if="item.type!==null">{{item.type}}</td>
                    <td v-else>{{lack}}</td>
                    <td v-if="item.operate!==null">{{item.operate}}</td>
                    <td v-else>{{lack}}</td>
                    <td>{{item.date}}</td>
                    <td>
                        <!-- <img :src="item.img" alt=""> -->
                        <img class="tdImg" src="../images/img.png" alt="">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <router-view></router-view>
</div>
</template>
<style lang="sass">
.list{
    background: #fbfbfb;
    >h3{
        font-weight:normal;
        color:#3ccfb5;
        font-size: 1.4rem;
        padding: 2% 0% 0% 7%;
        // font-weight:none;
    }
    >table{
        width:92%;
        margin: 0 auto;
        table-layout:fixed;
        tr{
            width:100%;
            font-size: 1.3rem;
            border-bottom: 1px solid #e6e6e6;
            text-align: center;
            th{
                font-weight:normal;
                color:#333;
                width: 25%;
                box-sizing: border-box;
                padding: 3% 0%;
            }
            td{
                color:#989898;
                padding: 1% 0%;
                width: 25%;
                box-sizing: border-box;
                >img{
                    width: 80%;
                    height: auto;
                }
            }
        }
    }
}
</style>
<script>
export default {
    name: 'list',
    props: {
        productName: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            thList: ['操作类型', '操作人', '日期', '图片'],
            trList: [],
            lack: '信息缺失'
        }
    },
    methods: {
        goListDetails () {
            this.$router.push('/plan/pBasicModel1/pBasicModel2')
        }
    }
}
</script>
