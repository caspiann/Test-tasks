export default {
	methods: {
		getData() {
			this.$emit('_set', this.inputValue)
		}
	}
}