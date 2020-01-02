const state = () => ({
  listTitle: {
    employees: 'List of Employees',
    products: 'List of Products'
  },
  list: {
    employees: [
      { id: 'b9fb9b1c-7fe5-4c85-b4e8-05f158923390', lastname: 'Kędra', firstname: 'Krystian', hobbies: ['IT2', 'Running2'] },
      { id: '10fed9bc-ce97-4592-9845-b5f8ad7cbce2', lastname: 'Majewski', firstname: 'Mariusz', hobbies: ['Drinking2'] },
      { id: '666a0f14-5e32-42b1-b2b1-03829ea024c6', lastname: 'Kowalski', firstname: 'Andrzej', hobbies: ['IT1', 'Running2'] },
      { id: '177d5d1e-f0ce-480b-8887-9f8e93f5ef8a', lastname: 'Kowalski', firstname: 'Krystian', hobbies: ['Drinking2'] }
    ],
    products: [
      { id: '4', name: 'Living Room', category: 'Rooms' },
      { id: '1', name: 'Fridge', category: 'items' },
      { id: '2', name: 'Kettle', category: 'items' },
      { id: '3', name: 'Kitchen', category: 'Rooms' },
    ]
  },
  searchedPhrase: {
    employees: { value: '', label: 'Serach by firstname', placeholder: 'Type...' },
    products: { value: '', label: 'Serach by product name', placeholder: 'Type...' }
  },
  sortedValue: {
    employees: { value: 'firstname', label: 'Sort by selected value', placeholder: 'Type...' },
    products: { value: 'name', label: 'Sort by selected value', placeholder: 'Type...' }
  },
  searchedValues: {
    employees: { value: [], label: 'Filter by selected values', placeholder: 'Type...', isMultiple: true },
    products: { value: [], label: 'Filter by selected values', placeholder: 'Type...', isMultiple: false }
  }
})

export default state