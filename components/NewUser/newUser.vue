<template>
  <v-content>
    <v-expansion-panel>
      <v-expansion-panel-content>
        <template v-slot:header>
          <div>New User Panel</div>
        </template>
        <v-form v-model="state.isValidForm" ref="newUserFormRef">
          <v-card>
            <v-card-text>
              <template v-for="(newUser, index) in state.newUserData">
                <v-text-field
                  :key="index"
                  v-model="newUser.value"
                  :label="newUser.label"
                  :rules="mandatoryRules()"
                />
              </template>
            </v-card-text>
            <v-btn
              type="submit"
              @click="(e) => checkValidationForm(e)"
              color="blue darken-4 white--text"
            >
              Save
            </v-btn>
          </v-card>
        </v-form>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-content>
</template>

<script>
import { reactive, watch, ref, onMounted } from '@vue/composition-api'
import { defaultUserObject, prepareUserObjectToSend } from '~/UsersManagement/usersManagement'
export default {
  props: {
    addNewUser: {
      type: Function,
      default: () => null
    }
  },
  setup(initialProps, setupContext) {

    const newUserFormRef = ref(null)

    const state = reactive({
      isValidForm: false,
      newUserData: [
        { value: '', label: 'New user name', key: 'name' },
        { value: '', label: 'New user lastname', key: 'lastname' },
        { value: '', label: 'New user age', key: 'age' }
      ]
    })

    const mandatoryRules = () => [v => !!v || 'Field in mandatory']

    const newUserFormState = () => newUserFormRef.value

    const openValidationNewUserFormOnView = form => form.validate()

    const prepareObjectToAdd = () => {
      const defaultObject = defaultUserObject()
      return prepareUserObjectToSend(defaultObject, state.newUserData)
    }

    const openProcessToPrepareObject = formState => {
      initialProps.addNewUser(prepareObjectToAdd())
      formState.reset()
      formState.resetValidation()
    }

    const checkValidationForm = (e) => {
      e.preventDefault()
      const formState = newUserFormState()
      openValidationNewUserFormOnView(formState)
      state.isValidForm ? openProcessToPrepareObject(formState) : alert('Form is not valid')
    }

    return {
      newUserFormRef,
      state,
      checkValidationForm,
      mandatoryRules
    }
  }
}
</script>
