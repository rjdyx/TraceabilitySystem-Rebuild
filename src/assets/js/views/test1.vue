<template>
    <div>
        <el-upload
              :action="importUrl" :data="data"
              name="img"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :file-list="fileList2"
              :on-success="handeSuccess">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog v-model="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <button @click="imgSubmit">提交</button>
        <input type="file" accept="audio/mp4, video/mp4" @change="changefn">
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
            picArr: {},
            apt: {},
            fileList2: []
        }
    },
    methods: {
        handleRemove (file, fileList) {
            this.picArr = {}
            this.setPicArr(fileList)
        },
        handlePictureCardPreview (file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        handeSuccess (val, file, fileList) {
            this.picArr = {}
            this.setPicArr(fileList)
        },
        imgSubmit () {
            this.$dataPost(this, '/plantation/setImg', this.picArr, true, false, false).then((response) => {
                console.log(responce.data)
            })
        },
        changefn (file) {
            console.log($('input'))
        },
        setPicArr (fileList) {
            console.log(fileList)
            for (let i in fileList) {
                if (fileList[i].raw !== undefined) {
                    this.picArr['img' + i] = fileList[i].raw
                } else {
                    this.picArr['img' + i] = fileList[i].url
                }
            }
            this.picArr['picLength'] = fileList.length
            console.log(this.picArr)
        }
    },
    mounted () {
    }
}
</script>
