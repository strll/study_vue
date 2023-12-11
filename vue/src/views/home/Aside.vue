<template>
  <el-row>
    <el-col>
      <h5 class="mb-2">Custom colors</h5>
      <el-menu
      :router="true"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="/cate">
          <el-icon>
            <Avatar />
          </el-icon>
          <span>食品分类管理</span>
        </el-menu-item>
        <el-menu-item index="/food">
          <el-icon>
            <Avatar />
          </el-icon>
          <span>食品管理</span>
        </el-menu-item>
        <el-sub-menu index="user">
          <template #title>
            <el-icon><Avatar /></el-icon>
            <span>USER</span>
          </template>
          <el-menu-item index="cart">
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>购物车</span>
          </el-menu-item>
          <el-menu-item index="order">
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>订单</span>
          </el-menu-item>
          <el-menu-item index="user">
            <el-icon>
              <icon-menu />
            </el-icon>
           <span>用户信息</span>
          </el-menu-item>
          <el-menu-item index="address">
            <el-icon>
              <icon-menu />
            </el-icon>
           <span>地址</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="admin">
          <el-icon>
            <setting />
          </el-icon>
          <span>其他 （后台管理员）</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
   
  <script setup>
import {
  Star,
  Avatar,
  Menu as IconMenu,
  Setting
} from "@element-plus/icons-vue";
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>
  
  <style scoped>
.el-menu {
  border-right: none;
}
</style>
  