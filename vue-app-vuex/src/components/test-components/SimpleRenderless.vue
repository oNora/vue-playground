<script>
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
</script>


<template>
    <slot :greeting="greeting"></slot>
</template>