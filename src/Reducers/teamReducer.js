
export const teamReducer = (state = {}, action) => {
  
  switch (action.type) {
    case 'CREATE_TEAM':
      return {
        name: action.name,
        memberOne: action.memberOne,
        memberTwo: action.memberTwo,
        memberThree: action.memberThree,
      }
    default:
      return state;
  }
}