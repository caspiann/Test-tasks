export default {
	methods: {
		Value(data) {
			this.form[data.dataValue] = data.value;
		},
	},
};