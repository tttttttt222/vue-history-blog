<template>
  <div id="historyNew">
    <el-card class="his-new" v-for="item in dataList" :key="item.id">
      <el-row>
        <h1>{{item.eventName}}</h1>
      </el-row>
      <hr/>
      <el-row>
        <p>{{item.eventBrief}}</p><span style="cursor: pointer; color: #3a8ee6" @click="jumpTOdetial(item.eventId)">详情</span>
      </el-row>
    </el-card>
    <!--分页-->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                   :current-page="historyNewQuery.pagenum"
                   :page-sizes="[10,30,50]" :page-size="historyNewQuery.pagesize"
                   layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "historyNew",
    data() {
      return {
        dataList: {},
        historyNewQuery: {
          pagenum: 1,
          pagesize: 30
        },
        total: 0,
      }
    },
    created() {
      this.getHistoryBriefNewList();
    },
    methods: {
      async getHistoryBriefNewList() {
        const {data: res} = await this.$http.post('historyBrief/queryNew', this.historyNewQuery);
        if (res.meta.status !== 200) {
          return this.$message.error('获取新简介列表成功');
        }
        this.dataList = res.data.list;
        this.total = res.data.total;
      },
      handleSizeChange(newSize) {
        this.historyNewQuery.pagesize = newSize;
        this.getHistoryBriefNewList();
      },
      handleCurrentChange(newPage) {
        this.historyNewQuery.pagenum = newPage;
        this.getHistoryBriefNewList();
      },
      jumpTOdetial(id) {
        this.$router.push({
          path: `/historyDetial/${id}`,
        })
      }
    }
  }
</script>

<style scoped>
  .his-new {
    margin-bottom: 50px;
  }

</style>
