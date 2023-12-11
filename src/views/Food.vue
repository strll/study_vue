<template>
  <h1>{{ message }}</h1>
  <!-- 列表上的搜索栏菜单 -->
  <el-row :gutter="10">
    <!--        :span  最大值24  一行撑满为24   4 则为一行的 1/6-->
    <el-col :span="4">
      <el-input v-model="wd" placeholder="请输入关键字"></el-input>
    </el-col>
    <el-col :span="20">
      <el-button type="primary" plain @click="handleSearch()">搜索</el-button>
      <!-- 点击按钮出现对话框 -->
      <el-button type="success" @click="handleAdd()">新增食品</el-button>
    </el-col>

    <!--对话框对应的组件代码            -->
    <el-dialog v-model="dialogFormVisible" :title="dialogTitle" :before-close="closeDialog">
      <!--对话框中的form组件                -->
      <el-form :model="form">
        <el-form-item label="名称">
          <el-input v-model="form.foodName" />
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="form.foodPrice" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.foodRemarks" />
        </el-form-item>
        <el-form-item label="分类">
          <el-input v-model="form.foodCateId" />
        </el-form-item>
        <el-form-item label="图片">
          <el-input v-model="form.foodImg" />
        </el-form-item>
      </el-form>
      <!--对话框中的页脚两个按钮                -->
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="handleSave()">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </el-row>
  <!-- 顶部搜索菜单结束 -->
  <hr />
  <!-- 列表数据开始 -->
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="序号" type="index" width="180"></el-table-column>
    <el-table-column label="食品编号" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.foodId }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="食品名称" width="180">
      <template #default="scope">
        <el-tag>{{ scope.row.foodName }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="食品介绍" width="180">
      <template #default="scope">
        <el-tag>{{ scope.row.foodExplain }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="食品图片" width="180">
      <template #default="scope">
        <el-tag>{{ scope.row.foodImg }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="食品价格" width="180">
      <template #default="scope">
        <el-tag>{{ scope.row.foodPrice }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="食品分类" width="180">
      <template #default="scope">
        <el-tag>{{ scope.row.foodCateId }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="备注" width="180">
      <template #default="scope">
        <el-tag>{{ scope.row.foodRemarks }}</el-tag>
      </template>
    </el-table-column>
    
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.row.foodCateId)">Edit</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.row.foodCateId)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 数据列表结束 -->
</template>

<script setup>
import { ref,reactive } from 'vue';
import axios from "axios";

axios.defaults.baseURL = '/api';
//页面标题
const message = ref("食品列表")
//搜索关键字
const wd = ref("");
//点击搜索按钮触发的方法
const handleSearch = (foodName)=>{
  getData();
}
//弹窗显示标识
const dialogFormVisible = ref(false);
//弹窗的标题
const dialogTitle = ref("");
//点击出现新增弹窗
const handleAdd = ()=>{
  dialogFormVisible.value=true;
  dialogTitle.value="新增食品"
};
//关闭弹窗的回调
const closeDialog = (done)=>{
  //清空form的参数
  form.value={};
  done();
};
//新增或者编辑时的双向绑定的数据
const form = ref({});

//点击按钮执行新增或更新
const handleSave = () => {
  if(form.value.foodCateId){
    axios({
      url:"/food/edit",
      method:"post",
      data:form.value,
    }).then((res)=>{
      if(res.data == 1){
        alert("编辑成功")
      }
      dialogFormVisible.value = false;
      getData();
    });
  }else{
      axios({
        url:"/food/add",
        method:"post",
        data:form.value,
      }).then((res)=>{
        if(res.data == 1){
          alert("新增成功");
        }
        dialogFormVisible.value=false;
        getData()
      });
    }
  };

//列表数据
const tableData = ref([]);
//列表编辑按钮
const handleEdit = (foodCateId) => {
  dialogTitle.value = "编辑食品";
  dialogFormVisible.value = true;
  axios({
    url:"/food/get",
    method:"get",
    params:{
      foodCateId :foodCateId,
    },
  }).then((res)=>{
    form.value = res.data;
  });
};
//列表删除按钮
const handleDelete = (foodCateId) => {
  axios({
    url:"food/del",
    method:"post",
    params:{
      foodCateId:foodCateId,
    },
  }).then((res)=>{
    if(res.data == 1){
      alert("删除成功");
      getData();
    }
  }

  )
};
//获取后台数据的方法
const getData = () => {
  axios({
    url: "/food/all",
    method: "get",
    params: {
      wd:wd.value,
    }
  }).then((res) => {
    console.log("res是",res)
    console.log("res.data是",res.data)
    tableData.value = res.data.data;
    console.log("tableData.value is :",tableData.value)
    console.log("tableData is ",tableData)
  });
  console.log(tableData.value)
};

getData()
</script>

<style scoped>

</style>