import {minLength, required} from 'vuelidate/lib/validators';
import {validationMixin} from 'vuelidate';
export default {
	mixins: [validationMixin],
	methods: {
		touchSelect() {
			this.$v.inputValue.value.$touch();
		},
		isDirtyField() {
			return this.$v.inputValue.value.$error && this.isRequired;
		},
	},
	validations: {
		inputValue: {
			value: {required, minLength: minLength(1)},
		},
	},
}