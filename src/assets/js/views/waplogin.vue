/*登陆注册组件
* @description 
* @author 舒丹彤
* @date 2017/4/11
* */
<template>
    <div>
        3333
    </div>
</template>

<script>
</script>


<style lang='sass'>
    .login{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #d5dde0;
        min-height: 900px;
        min-width: 980px;
        overflow: hidden;
            .bg{
                width: 100%;
                position: absolute;
                bottom: 30%;
            }
            .logintitle{
                font-size: 48px;
                position: relative;
                top: 18%;
                margin: 0 auto;
                width: 668px;
                color: #007cc2;
            }
            .main-bg{
                width: 36%;
                height: 68%;
                position: absolute;
                left: 31.5%;
                top: 37%;
            }
            .logincontent{
                display: inline-block;
                position: absolute;
                top: 39.5%;
                left: 32.5%;
                width: 36%;
                height: 26%;
                    .login-logo{
                    width: 46%;
                    float: left;
                    margin-top: 30px;
                            img{
                        width: 54%;
                        margin: 12% auto;
                        display: block;
                    }
                }
                .form{
                float: left;
                width: 54%;
                    .el-form-item{
                        margin-top: 5px;
                        /*margin-bottom: 17px;*/
                        width:85%;
                    }
                    .receive{
                        margin-bottom: 0px;
                    }
                    .code{
                        width: 50% !important;
                    }
                    .kit{
                        width:38%;
                        height:37px;
                        margin-left: 1%;
                        display: inline-block;
                        cursor: pointer;
                        vertical-align: middle;
                    }
                }
            }
            input:-ms-input-placeholder{
                color: #d6d6d7;
            }
            input::-webkit-input-placeholder{
                color: #d6d6d7;
            }
            .copyright{
                position: absolute;
                left: 37%;
                bottom: 2%;
                font-size: 12px;
                color: #919191;
                text-align: center;
                .link{
                    text-decoration: underline;
                    color: #919191;
                }
            }
            .el-checkbox__label,.smaller{
                font-size: 12px;
            }
            .apply{
                margin-left: 30px;
            }
            .margin{
                margin-left: 18px;
            }
            .agreement{
                margin-right: 18px;
            }
            @media screen and(min-width:500px) and(max-width:1720px) {
                .form .el-form-item{
                    margin-bottom: 13px;
                }
                .el-form-item__content{
                    line-height: 28px;
                }
            }
            .el-form-item__content{
                /*line-height: 32px;*/
                font-size: 12px;
            }
            .el-button:hover{
                border-color: transparent !important;
                color: #fff;
            }
            .el-input__inner:hover,.el-input__inner:focus{
                border-color: #20a0ff !important;
            }
            .el-checkbox__inner:hover{
                border-color: #20a0ff !important;
            }
            .loading{
                width: 10%;
                height: 37px;
                line-height: 37px;
                display: inline-block;
                padding-left: 1.5%;
                vertical-align: middle;
                padding-top: 2%;
            }
            .loginBtn:hover,.loginBtn:focus{
                color: #fff !important;
                border-color: transparent !important;
            }
        }
</style>
