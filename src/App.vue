<template>
  <div id="app">
    <div id="nav">|
      <router-link to="/">AirDnd</router-link>
      <router-link to="/signup">Signup</router-link>
      <router-link to="/userListing">User Listing</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/viewListing">Explore Listing</router-link>
      <router-link to="/signin">Signin </router-link>
    </div>
    
    <router-view/>
  </div>
</template>


<script>
export default{
  name:"App"
}
</script>


<style>
*{
  margin:0;
}

#nav {
  width: 100%;
    height: 60px;
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    top: 0;
    left: 0;
    padding: 0 15px;
    z-index: 1000;
    background: white;
    border-bottom: 1px solid #eee 
}
    
body {
  margin:0;
  background:#eee
}


</style>
