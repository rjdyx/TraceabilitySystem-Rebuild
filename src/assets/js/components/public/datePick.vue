<template>
    <div class="date">
        <span>
            <label>开始日期：</label>
            <el-date-picker 
                size="small"
                v-model="value1"
                type="date">
            </el-date-picker>
        </span>
        <span class="margin">
            <label>结束日期：</label>
            <el-date-picker 
                size="small"
                v-model="value2"
                type="date">
            </el-date-picker>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'datePick',
        data () {
            return {
                value1: '',
                value2: '',
                dialogVisible: false
            }
        }
    }
</script>

<style lang="sass">
    .margin {
        margin-left: 10px;
    }

    .date {
        margin-top: 20px;
    }

    .datePick {
        width: 110px;
    }
</style>
