<template>
    Not Found


    <br>
    <br>
    <br>
    <toggle>
        <template v-slot="{ greeting }">
            {{ greeting }}
        </template>
    </toggle>
</template>

<script>
import Toggle from '../components/test-components/ToggleRenderless.js';

export default {
    components: {Toggle},
}
</script>