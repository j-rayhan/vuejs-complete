<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchMyName() }} </p>
        <button @click="resetName">Reset name</button>

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
        },
        resetName() {
            this.myName = "Hasan"
            this.$emit('nameWasReset', this.myName);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>