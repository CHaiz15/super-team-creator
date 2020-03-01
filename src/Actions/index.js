export const createTeam = (team) => ({
  type: 'CREATE_TEAM',
  name: team.name,
  memberOne: team.memberOne,
  memberTwo: team.memberTwo,
  memberThree: team.memberThree,
})