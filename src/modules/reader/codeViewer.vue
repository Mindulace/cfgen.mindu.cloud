<template>
    <div class="code-wrapper p-1 bg-light rounded border border-dark">
        <code>
            <pre>{{ code }}</pre>
        </code>
    </div>
</template>

<script>
export default {
    name: 'codeViewer',
    props: [
        'code'
    ]
}
</script>

<style>

</style>