<script setup lang="ts"></script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
    <el-menu-item index="0">
      <img style="width: 100px" src="" alt="LOGO" />
    </el-menu-item>
    <el-menu-item index="1">首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>工作空间</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-sub-menu>
    <el-menu-item>
      <el-avatar>
        <img
          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          alt="头像"
        />
      </el-avatar>
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="less">
.el-menu {
  width: 100%;
}
</style>
