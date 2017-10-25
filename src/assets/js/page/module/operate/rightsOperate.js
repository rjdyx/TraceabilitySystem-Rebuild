import importBtn from 'components/public/import-btn.vue'
import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import datePick from 'components/public/datePick.vue'
import inputDate from 'components/public/inputDate.vue'
import inputFile from 'components/public/inputFile.vue'
import inputTextSelect from 'components/public/inputTextSelect.vue'
import Qrcode from 'components/public/Qrcode.vue'

import validate2 from 'utils/validate2.js'

export let rightsOperate = {
    // 运营-权限
    rightsOperate: [{
        settitle: '权限管理',
        key: 'permission-category',
        roleName: ['admin/role', 1],
        tab: '权限分类信息',
        url: 'permission-category',
        searchPlaceholder: '请输入展示名称进行搜索',
        theads: ['分类', '名称', '展示名称', '备注'],
        protos: ['category_id', 'name', 'display_name', 'memo'],
        widths: [50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [{
                name: '',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            }]
        }],
        newComponent: [{
            tab: '新建权限分类信息',
            selectUrl2: [['permission_categories', 'id', 'display_name', true]],
            popNumber2: [0],
            selectInit2: [{value: '', label: '请选择权限分类'}],
            components: [{
                name: 'pid',
                type: 'select',
                component: null,
                isNull: false,
                permissionCat: true,
                label: '分类',
                placeholder: '请填写分类',
                rule: {required: false, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '名称',
                placeholder: '请输入名称',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'display_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '展示名称',
                placeholder: '请输入展示名称',
                rule: null
            },
            {
                name: 'description',
                type: 'text',
                component: null,
                isNull: false,
                label: '描述',
                placeholder: '请输入描述',
                rule: null
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: null
            }]
        }],
        editComponent: [{
            tab: '编辑权限分类信息',
            selectUrl2: [['permission_categories', 'id', 'display_name', true]],
            popNumber2: [0],
            selectInit2: [{value: '', label: '请选择权限分类'}],
            components: [{
                name: 'pid',
                type: 'select',
                component: null,
                permissionCat: true,
                isNull: false,
                label: '分类',
                placeholder: '请填写分类',
                rule: {required: false, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '名称',
                placeholder: '请输入名称',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'display_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '展示名称',
                placeholder: '请输入展示名称',
                rule: null
            },
            {
                name: 'description',
                type: 'text',
                component: null,
                isNull: false,
                label: '描述',
                placeholder: '请输入描述',
                rule: null
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: null
            }]
        }]
    },
    {
        settitle: '权限管理',
        key: 'permission',
        roleName: ['admin/role', 1],
        tab: '权限信息',
        url: 'permission',
        searchPlaceholder: '请输入展示名称进行搜索',
        theads: ['所属权限分类', '名称', '展示名称', '资源', '备注'],
        protos: ['pid', 'name', 'display_name', 'resource', 'memo'],
        widths: [50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [{
                name: '',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            }]
        }],
        newComponent: [{
            tab: '新建权限信息',
            selectUrl2: [['permission_categories', 'id', 'name', true]],
            popNumber2: [0],
            selectInit2: [{value: '', label: '请选择权限分类'}],
            components: [{
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '权限分类',
                placeholder: '请选择权限分类',
                rule: {required: false, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '名称',
                placeholder: '请输入名称',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'display_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '展示名称',
                placeholder: '请输入展示名称',
                rule: null
            },
            {
                name: 'resource',
                type: 'text',
                component: null,
                isNull: false,
                label: '资源',
                placeholder: '请输入资源',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'description',
                type: 'text',
                component: null,
                isNull: false,
                label: '描述',
                placeholder: '请输入描述',
                rule: null
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: null
            }]
        }],
        editComponent: [{
            tab: '编辑权限信息',
            selectUrl2: [['permission_categories', 'id', 'name', true]],
            popNumber2: [0],
            selectInit2: [{value: '', label: '请选择权限分类'}],
            components: [{
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '权限分类',
                placeholder: '请选择权限分类',
                rule: {required: false, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '名称',
                placeholder: '请输入名称',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'display_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '展示名称',
                placeholder: '请输入展示名称',
                rule: null
            },
            {
                name: 'resource',
                type: 'text',
                component: null,
                isNull: false,
                label: '资源',
                placeholder: '请输入资源',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'description',
                type: 'text',
                component: null,
                isNull: false,
                label: '描述',
                placeholder: '请输入描述',
                rule: null
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: null
            }]
        }]
    }]
}
