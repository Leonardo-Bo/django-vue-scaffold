<template>
    <!-- <Navbar />     -->
    <div class="main">
        <div class="is-loading-bar center-ring" v-bind:class="{'is-loading': store.isLoading }">
            <div class="lds-dual-ring"></div>
        </div>
        <router-view/>
    </div>
    <!-- <Footer />     -->
</template>

<script setup>
import { useParamStore } from '@/stores/ParamStore';

// import Navbar from '@/components/Navbar';
// import Footer from '@/components/layout/Footer'

const store = useParamStore()

// export default {
//     name: 'App', 
//     components: {
//         Navbar, 
//         // Footer
//     }, 

//     // beforeCreate() {
//     //     const token = this.$store.state.token

//     //     if (token) {
//     //         axios.defaults.headers.common['Authorization'] = "Token " + token
//     //     } else {
//     //         axios.defaults.headers.common['Authorization'] = ""
//     //     }

//     // },
// }
</script>


<style lang="scss">
#app {
    font-family: "Lato", sans-serif; /* Poppins, Avenir, Helvetica, Arial, sans-serif; */
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
    color: #2c3e50;
}

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: grey lightgrey;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 6px;
}

*::-webkit-scrollbar-track {
  background: lightgrey;
}

*::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 20px;
  border: 1px solid lightgrey;
}

html, body {
    height: 100%;
    width: 100%;
    margin: 0; 
}

.main {
    padding-top: 90px;
    min-height: calc(100vh - 150px);
    position: relative;
}
</style>
