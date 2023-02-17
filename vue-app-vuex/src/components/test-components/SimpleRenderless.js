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