<script>
    import css from "./app.scss"; //App CSS entry point.

    export default {
        name: "app",
        data() {
            return {
                msg: 'Welcome to VueJS mixed with Parcel bundlig and TypeScript!'
            }
        },
        methods: {

        },
        mounted: function() {
            
        }
    }
</script>

<template>
    <div id="app">
        <h1>{{msg}}</h1>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>