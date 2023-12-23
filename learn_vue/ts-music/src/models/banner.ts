// 给banner 这个接口建立一个接口
//第一个接口：3000/banner -> store -> component
// 第二个接口：类java等强类型的接口定义 vuex 所以使用 ts类型检测
//模型接口
//对应的数据表的字段，非常严谨
export interface Banner { //interface 约束数据必须遵守下面规则
    pic: string; //不用逗号
    targetId: number;
    targetType:number;
    typeTitle: string;
    bannerId: number;
}
// 跟vuex 一道，把数据严谨再严谨
// let banner:Banner = {
//     pic: '范家吵架图',
// }