const state = () => ({
  listTitle: {
    employees: { value: 'List of Employees' },
    employeesv2: { value: 'List of Employees' },
    products: { value: 'List of Products' },
    productsv2: { value: 'List of Products' }
  },
  list: {
    employees: {
      value: []
    },
    employeesv2: {
      value: []
    },
    products: {
      value: []
    },
    productsv2: {
      value: []
    }
  },
  searchedPhrase: {
    employees: { value: '', label: 'Serach by firstname', placeholder: 'Type...' },
    employeesv2: { value: '', label: 'Serach by firstname', placeholder: 'Type...' },
    products: { value: '', label: 'Serach by product name', placeholder: 'Type...' },
    productsv2: { value: '', label: 'Serach by product name', placeholder: 'Type...' }
  },
  sortedValue: {
    employees: { value: 'firstname', label: 'Sort by selected value', placeholder: 'Type...' },
    employeesv2: { value: 'firstname', label: 'Sort by selected value', placeholder: 'Type...' },
    products: { value: 'name', label: 'Sort by selected value', placeholder: 'Type...' },
    productsv2: { value: 'name', label: 'Sort by selected value', placeholder: 'Type...' }
  },
  searchedValues: {
    employees: { value: [], label: 'Filter by selected values', placeholder: 'Type...', isMultiple: true },
    employeesv2: { value: [], label: 'Filter by selected values', placeholder: 'Type...', isMultiple: true },
    products: { value: [], label: 'Filter by selected values', placeholder: 'Type...', isMultiple: false },
    productsv2: { value: [], label: 'Filter by selected values', placeholder: 'Type...', isMultiple: false }
  }
})

export default state