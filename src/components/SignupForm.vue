<template>
    <form @submit.prevent= "handleSubmit">
        <label>Name:</label>
        <input type="name" required v-model="name">

        <label>Email:</label>
        <input type="email" required v-model="email">

        <label>Password:</label>
        <input type ="password" required v-model="password">

        <div class="terms">
            <input type ="checkbox" v-model="terms" required>
            <label> Accept terms and conditions </label>
        </div>

        <div class="submit">
            <button @click="postUser()">Create an account</button>
        </div>

    </form>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
    export default {
        name: 'SignupForm',
        data() {
            return {
                name: '',
                email: '',
                password: '',
                terms: false,            
                }
        },
        methods:{
            handleSubmit() {
                console.log('form submitted')
            },
            postUser(){
                if (this.terms){
                    axios.request({
                        url:"http://127.0.0.1:5000/api/users",
                        method:"POST",
                        data:{
                            name: this.name,
                            email: this.email,
                            password: this.password
                        }
                    }).then((response)=>{
                        cookies.set("token",response.data.loginToken);
                        // whatever the responce is will  be stored in user
                        this.$store.commit("updateUser",response.data);
                        this.$router.push("/");
                    }).catch(()=>{
                        console.log("something went wrong");
                    })
                }
            }
        }
        
    }
</script>

<style>
    form{
        max-width: 420px;
        margin: 30px auto;
        background:rgb(255, 255, 255);
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input {
        display: block;
        padding:10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    input[type ="checkbox"] {
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }
    button {
        background: cornflowerblue;
        border: 0;
        padding: 10px 20px;
        margin-top:20px;
        color: white;
        border-radius: 20px;
    }
    .submit{
        text-align:center;
    }

</style>