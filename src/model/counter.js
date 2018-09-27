export default {
  namespace: 'counter',
  state: { num: 0 },
  effects: {},
  reducers: {
    add(state, { payload }) {
      return {
        ...state,
        num: state.num + 1
      }
    },
    minus(state, { payload }) {
      return {
        ...state,
        num: state.num - 1
      }
    }
  }
}
