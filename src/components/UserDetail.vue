<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchMyName() }} </p>
    </div>
</template>

<script>
export default {
    props: {
        // For multiple types [ String, Array ]
        myName: {
            type: String,
            // required: true
            default: "Johir"
        }
    },
    methods: {
        switchMyName() {
            return this.myName.split("").reverse().join("");
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>