//hooks 函数化编程思想
import { defineStore } from "pinia"
import { ref }  from 'vue'
import type{ Banner } from "../models/banner";
import { useBanner } from "../api";
// 专注于数据编程
// 创建 仓库的分支，banner
export const useBannerStore = defineStore("banner",() => {
    const banners = ref<Banner[]>([]);
    // 发接口请求
    const getBanners = async () =>{
        if (banners.value.length) return;
        banners.value = await useBanner();
    }
    return {
        banners,
        getBanners,
    }
})