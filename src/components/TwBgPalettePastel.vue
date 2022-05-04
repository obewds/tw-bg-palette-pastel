<script setup lang="ts">

    type TwBgPalettePastelProps = {
        text?: string | undefined
    }

    const props = withDefaults(
        defineProps<TwBgPalettePastelProps>(), {
            text: ''
        }
    )

</script>


<template>

    <div>
        <template v-if="text">
            {{ text }}
        </template>
        <template v-else>
            <slot>TwBgPalettePastel</slot>
        </template>
    </div>

</template>
