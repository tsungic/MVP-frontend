import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/HomePage.vue'
import signUp from '../views/Signup.vue'
import userListing from '../views/UserListing.vue'
import viewListing from '../views/ViewListing.vue'
import signIn from '../views/Signin.vue'
import profile from '../views/Profile.vue'

Vue.use(VueRouter)


const routes = [
  {
    path:'/',
    name: "home-page",
    component: homePage
  },
  {
    path:'/signup',
    name: "signup-page",
    component: signUp
  },
  {
    path:'/userListing',
    name: "userlisting-page",
    component: userListing
  },
  {
    path:'/signin',
    name:"signin-page",
    components: signIn
  },
  {
    path:'/profile',
    name:"profile-page",
    components: profile
  },
  {
    path:'/viewListing',
    name:"viewlisting-page",
    components: viewListing
  }
]

const router = new VueRouter({
  routes
})

export default router
