<template>
  <div class="page">
    <button type="button" @click="createJwtToken">生成JWT</button>
    <button type="button" @click="getDataInfo">生成JWT</button>
  </div>
</template>
<script lang="ts" setup>
const token = ref("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJ6aGFuZ2VzYW4iLCJlbWFpbCI6InpoYW5nQGV4YW1wbGUuY29tIiwiYXZhdGFyIjpudWxsLCJjb3VudCI6MiwiY3JlYXRlZF9hdCI6IjIwMjYtMDgtMTIgMDM6MDM6NTgiLCJpYXQiOjE3ODY1MTc0ODUsImV4cCI6MTc4NjUyMTA4NX0.jCA4oWayVuNckRoklNpWSEsR18hKcI3-wMil3Or7lnU");
function createJwtToken() {
  requestJwt();
}

async function requestJwt() {
  const { data, status } = await useFetch('/api/test', {
    method: 'POST'
  })

  console.log(data.value, status.value);
  token.value = data.value?.data as string;
}

async function getDataInfo() {
  if (token.value) {
    const { data, status } = await useFetch('/api/test', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    })
    console.log(data.value, status.value);
  }
}

</script>