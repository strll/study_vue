<template>
  <div class="wrap">
    <div class="top">
      <div class="title">
        饿了么后台管理
      </div>
    </div>
    <div class="section">
      <div class="aside">
        <Aside></Aside>
      </div>
      <div class="main">
        <div class="content">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Aside from '@/views/home/Aside.vue';
</script>

<style scoped>
        *{
            margin:0;
            padding:0;
        }
        html, body{
            height: 100%;
            width: 100%;
        }
        .wrap{
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
        }
        .top{
            height: 100px;
            background-color: hsl(190, 90%, 50%);
        }
        .top .title{
          font-size: 25px;
          display: flex;
          position: relative;
          color: white;
          margin: 35px;
        }
        .section{
            width:100%;
            position: absolute;
            top: 100px;
            bottom: 0;
            /* background-color: #6610f2; */
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            overflow: hidden;
        }
        .aside{
            width: 300px;
            background-color: #545c64;
        }
        .main{
            flex: auto;
            /* background-color: #ff6700; */
            overflow: auto;
        }
        .content{
            height: 2000px;
            margin:20px;
            background-color: white;
        }
</style>