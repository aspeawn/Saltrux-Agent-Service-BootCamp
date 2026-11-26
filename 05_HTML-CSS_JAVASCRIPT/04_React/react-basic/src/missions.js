const missionModules = import.meta.glob('./missions/ch*/*_Mission.jsx', {
  eager: true,
  import: 'default',
})
const answerModules = import.meta.glob('./missions/answers/*_Answer.jsx', {
  eager: true,
  import: 'default',
})
const allMissionPaths = Object.keys(import.meta.glob('./missions/**/*'))

const toFile = (path) => path.slice(2)
const baseName = (path) => path.split('/').pop()

export function findMission(id) {
  const missionPath = Object.keys(missionModules).find(
    (path) => baseName(path) === `${id}_Mission.jsx`,
  )
  if (!missionPath) return undefined

  const answerPath = `./missions/answers/${id}_Answer.jsx`
  const extraPaths = allMissionPaths.filter(
    (path) =>
      baseName(path).startsWith(`${id}_`) && path !== missionPath && path !== answerPath,
  )

  return {
    component: missionModules[missionPath],
    file: toFile(missionPath),
    answer: answerModules[answerPath],
    answerFiles: [answerPath, ...extraPaths].filter((p) => allMissionPaths.includes(p)).map(toFile),
  }
}
