<template>
  <h1>员工信息列表</h1>
  <!-- 列表上的搜索栏菜单 -->
  <el-row :gutter="10">
    <!--        :span  最大值24  一行撑满为24   4 则为一行的 1/6-->
    <el-col :span="3">
      <el-input v-model="searchParams.ename" placeholder="请输入员工姓名"></el-input>
    </el-col>
    <el-col :span="3">
      <el-input v-model="searchParams.job" placeholder="请输入职位信息"></el-input>
    </el-col>
    <el-col :span="18">
      <el-button type="primary" plain @click="handleSearch()">搜索</el-button>
      <!-- 点击按钮出现对话框 -->
      <el-button type="success" @click="handleAdd()">新增员工</el-button>
    </el-col>
  </el-row>
  <hr>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="序号" type="index" width="180"></el-table-column>
    <el-table-column label="员工编号" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.empno }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="员工姓名" prop="ename"></el-table-column>
    <el-table-column label="职位" width="180">
      <template #default="scope">
        <el-tag>{{ scope.row.job }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="上司" width="180">
      <template #default="scope">
        <el-tag>{{ scope.row.mname }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="入职日期" width="180">
      <template #default="scope">
        <el-tag>{{ scope.row.hiredate }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="薪水" width="180">
      <template #default="scope">
        <el-tag>{{ scope.row.sal }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="津贴" width="180">
      <template #default="scope">
        <el-tag>{{ scope.row.comm }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="部门" width="180">
      <template #default="scope">
        <el-tag>{{ scope.row.dname }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.row.deptno)">Edit</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.row.deptno)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 弹窗 -->
  
</template>

<script setup>

import{ref} from "vue"

import axios from "axios";
//查询数据输入合集
const searchParams = ref({})
//点击搜索按钮
const handleSearch = ()=>{
  getData()
}
const handleAdd=()=>{}

//定义表格数据
const tableData = ref([])
//获取数据
const getData = ()=>{
    axios({
      url:"/api/emp",
      method:"get",
      params:searchParams.value
    }).then( (res)=>{
      tableData.value = res.data
    })
}

getData();
</script>

<style scoped>

</style>