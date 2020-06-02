<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchMyName() }} </p>
        <p>User Age: {{ userAge }} </p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()">Reset Fn</button>

    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    props: {
        // For multiple types [ String, Array ]
        myName: {
            type: String,
            // required: true
            default: "Johir"
        },
        resetFn: Function,
        userAge: Number,
    },
    methods: {
        switchMyName() {
            return this.myName.split("").reverse().join("");
        },
        resetName() {
            this.myName = "Hasan"
            this.$emit('nameWasReset', this.myName);
        }
    },
    created() {
        eventBus.$on('ageWasEdit', (age) => {
            this.userAge = age;
        })
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>