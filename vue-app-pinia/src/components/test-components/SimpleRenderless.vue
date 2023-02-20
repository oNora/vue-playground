<!-- optional API -->
<!-- <script>
export default {
    data () {
        return {
            greeting: 'Hello renderless component'
        }
    },
 
    render () {
        return this.$slots.default({
            greeting: this.greeting
        })
    }
}
</script> -->

<!-- composition API -->
<script setup>
    import { ref } from 'vue';

    const greeting = ref('Hello renderless component');

</script>


<template>
    <slot :greeting="greeting"></slot>
</template>