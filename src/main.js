
// 步骤1：导入 vue这个包
// var Vue = require('vue');
import Vue from 'vue';

// 步骤2：想要解析和呈现App.vue组件的内容，则导入 App.vue组件
// var App = require('./App.vue');
import App from './App.vue';


// import calcObj  from './calc.js';
// console.log(calcObj.add(1,2));

import {add,substrict} from './calc.js';
console.log(add(1,2));


// console.log(Vue);

new Vue({
    el:'#app',
    // 使用app这个组件对象
    // es5的写法
    // render:function(create){create(App);}

    // es6的写法
    render:create=>create(App)
});