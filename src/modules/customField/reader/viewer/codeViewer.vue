<template>
    <div ref="codeWrapper" class="code-wrapper p-1 bg-light rounded border border-dark">
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
    ],
    methods: {
        handleScroll: function () {
            var codeWrapper = this.$refs.codeWrapper

            if ((codeWrapper.offsetTop - 20) < window.pageYOffset) {
                var offset = window.pageYOffset - codeWrapper.offsetTop + 20

                codeWrapper.style.transform = `translateY(${offset}px)`
            } else {
                codeWrapper.style.transform = ''
            }
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted() {
        this.$refs.codeWrapper.style.maxHeight = `${window.innerHeight - 40}px`
    }
}
</script>

<style>
.code-wrapper {
    transition: transform 0.2s ease-out;
    overflow: scroll;
}
</style>