<template>
    <div>
        <h2> Become a host</h2>
            <form @sumbit.prevent = "handleFormSubmit">
                <label>Accomodation Type</label>
                <select v-model="place.propertyType">
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                </select>
                <br>
-

                <label>Guests will have:</label>
                <select v-model="place.roomType">
                    <option value="entire home/apartment">Entire home / apartment</option>
                    <option value="private room"> Private room</option>
                    <option value="shared room"> Shared room </option>
                </select>

                <label>How many guests can your place accomodate:</label>
                <input type="accomodates" required v-model="accomodates">

                <label>How many beds:</label>
                <input type="beds" required v-model="beds">

                <label>How many bedrooms:</label>
                <input type ="bedrooms" required v-model="bedrooms">

                <label>How many bathrooms:</label>
                <input type ="bathrooms" required v-model="bathrooms">

                <label>Price (in Canadian dollars) per night:</label>
                <input type ="price" required v-model="price">

                <label>Name/title your place:</label>
                <input type ="name" required v-model="name">

                <label>Describe your place for guests:</label>
                <input type ="description" multiline required v-model="description">

                <label>Location:</label>
                <input type ="location" placeholder="location" required v-model="location">

               <v-text-field name="imageUrl" label="Image URL" id="image-url" v-model="imageUrl"
                required></v-text-field>


                <div class ="submit">
                    <button @click="savedLocations()">submit</button>
                </div>
            </form>

    </div>
</template>


// <script>

export default {
    data () {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: '',
        }
    },
    methods: {
    async handleFormSubmit () {
        if (!this.formIsValid) {
          return
      }
    }
  }
}
</script>

<style scoped>

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