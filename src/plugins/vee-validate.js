import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  setInteractionMode,
  extend
} from 'vee-validate'
import {
  confirmed,
  email,
  min,
  numeric,
  required
} from 'vee-validate/dist/rules'

extend('confirmed', {
  ...confirmed,
  message: '{_field_} does not match'
})

extend('email', {
  ...email,
  message: 'The {_field_} field must be a valid email address.'
})

extend('min', {
  ...min,
  message: 'The {_field_} field must be at least {length}',
  params: ['length']
})

extend('numeric', {
  ...numeric,
  message: 'The {_field_} field must be a valid number'
})

extend('required', {
  ...required,
  message: 'The {_field_} field must be filled.'
})

setInteractionMode('eager')

// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)