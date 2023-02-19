<!-- optional API -->
<!-- <script>
export default {
    props: {
        initialState: {
            type: Boolean,
            default: false
        }
    },
 
    data () {
        return {
            state: this.initialState
        }
    },
 
    render () {
        return this.$slots.default({
            state: this.state,
            toggle: this.toggle
        })
    },
 
    methods: {
        toggle () {
            this.state = !this.state
        }
    }
}
</script> -->

<!-- composition API -->
<script setup>
    import { ref, defineProps } from 'vue';

    const props = defineProps({
    initialState: {
        type: Boolean,
        default: false
    }
    });
    const state = ref(props.initialState);

    function toggle () {
        state.value = !state.value;
    }
</script>

<template>
    <slot :state="state" :toggle="toggle"></slot>
</template>
