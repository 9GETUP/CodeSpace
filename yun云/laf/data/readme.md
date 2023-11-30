# 后端数据逻辑

- 查询
    - 数据库.collection(name).get()
    - where 条件
    - count
        注册 name + password
        {total} = await where{{name}}.count()
      if (total >= 0 ){ return }
      - limit 限制数量
         最后一页数据 ：
            跳过前四页数据 .offset((page-1)*size).limit(size)
         