<template>
    Not Found


    <br>
    <br>
    <br>
    <simple v-slot="{ greeting }">
            {{ greeting }}
    </simple>
    <br>
    <br>

    <Toggle v-slot="{ state, toggle }">
        {{ state === true ? 'On' : 'Off' }}
        <button v-on:click="toggle">Toggle</button>
    </Toggle>
    <br>
    <br>
    <!-- <Toggle v-slot="{ state, toggle }">
            <button v-on:click="toggle" type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" :class="{ 'bg-indigo-600': state, 'bg-gray-200': !state }">
                <span class="sr-only">Use setting</span>
                <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200" :class="{ 'translate-x-5': state }"></span>
            </button>
    </Toggle> -->
</template>

<script>
import Toggle from '../components/test-components/ToggleRenderless';
import Simple from '../components/test-components/SimpleRenderless';

export default {
    components: {
        Toggle,
        Simple
    }
}
</script>