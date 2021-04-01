<template>
    <div>
        <div class="container">
            <img src="../assets/airbnb1.png">
            <button class="btn">Button</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
* {
    padding-top: 60px;
}
#container{
    position: relative;
    width: 100%;
    max-width:400px;
}
#container img{
    width: 600px;
    height:400px;
}
#container .btn{
    position:absolute;
    top: 50%;
    left:70%;
    transform:translate(-50%, -50%);
}
#img{
    max-width: 100%;
    height: auto;

}
</style>