<template>
    <div>
        <el-upload
              :action="importUrl" :data="data"
              name="img"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :on-success="handeSuccess">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog v-model="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <button @click="imgSubmit">提交</button>
    </div>
</template>
<script>
export default {
    name: 'test1',
    data () {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            importUrl: this.$adminUrl('/plantation/import'),
            data: {'_method': 'get'},
            picArr: {}
        }
    },
    methods: {
        handleRemove (file) {
            // 删除所选中图片
            this.$dataGet(this, '/plantation/delPic', {'data': file.response})
                .then((responce) => {
                    console.log(responce.data)
                })
        },
        handlePictureCardPreview (file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        handeSuccess (file, name, val) {
            this.picArr['img' + (val.length - 1)] = name.raw
            this.picArr['picLength'] = val.length
        },
        imgSubmit () {
            this.$dataPost(this, '/plantation/setImg', this.picArr, true, false, false).then((response) => {
                console.log(responce.data)
            })
        }
    }
}
</script>
