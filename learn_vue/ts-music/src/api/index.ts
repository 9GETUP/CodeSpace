// 没有使用他也会警告
import type { Banner } from "../models/banner"; 
import type { Personalized } from "../models/personalized"; // es6引入类型
import http from './http.ts';

//ts有完整的编译阶段 ts -> js ->
//后端 api的业务代码，负责请求
//首个banner位 广告位
export async function useBanner(){
    //前端也有数据校验了，要说不，为用户负责 ts 接口
    //http.get<> 泛型 约束返回值的类型是 Banner 数组
    // 右边是reslove传的
    const { banners } = await http.get<{ banners:Banner[] }>('/banner', {type: 1})
    return banners
}
// Personalized怎么引入
// 看接口文档 亮点 使用JSDOC 生成，后端写给前端看 前后端分离
// api/index.ts 中加入一个业务方法
// 为了大型项目，需要做前端模型，后端数据不怕不规范了 参考文档 + 前端需求
// 再去 pinia + model 为了让数据更安全的
export async function usePersonalized(){
    //前端也有数据校验了，要说不，为用户负责 ts 接口
    //http.get<> 泛型 约束返回值的类型是 Banner 数组
    // 右边是reslove传的
    // <>是泛型 这里是实参
    const { result } = 
        await http.get<{result: Personalized[]}>('/personalized')
    return result;
}