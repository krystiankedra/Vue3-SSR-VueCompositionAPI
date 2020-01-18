const state = () => ({
  formStructureData: {
    formv1: {
      value: [
        {
          label: 'Firstname',
          fieldType: 'shortText',
          value: ''
        },
        {
          label: 'Lastname',
          fieldType: 'shortText',
          value: ''
        },
        {
          label: 'Hobbies',
          fieldType: 'dropdown',
          value: '',
          items: [
            { key: '1', value: 'IT' },
            { key: '2', value: 'Game' }
          ]
        },
        {
          label: 'Identity number',
          fieldType: 'shortText',
          value: ''
        }
      ]
    }
  },
  formTitle: {
    formv1: { value: 'Form new employee' }
  }
})

export default state