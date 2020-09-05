<template>
    <div class="header-element-wrapper">
        <div class="form-group">
            {{ label }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'headerElement',
    props: [
        'label',
        'children'
    ]
}
</script>
