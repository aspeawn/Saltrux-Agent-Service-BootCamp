import Playground from './playground/Playground'
import { findMission } from './missions'

import LocalVsGlobal from './chapters/ch09/09-1_LocalVsGlobal'
import ContextApi from './chapters/ch09/09-2_ContextApi'
import ZustandStore from './chapters/ch09/09-3_ZustandStore'
import ReadAndUpdate from './chapters/ch09/09-4_ReadAndUpdate'
import Selector from './chapters/ch09/09-5_Selector'
import Persist from './chapters/ch09/09-6_Persist'
import ContextVsZustand from './chapters/ch09/09-7_ContextVsZustand'

import HttpRest from './chapters/ch10/10-1_HttpRest'
import AsyncAwait from './chapters/ch10/10-2_AsyncAwait'
import AxiosGet from './chapters/ch10/10-3_AxiosGet'
import OtherMethods from './chapters/ch10/10-4_OtherMethods'
import AxiosWithEffect from './chapters/ch10/10-5_AxiosWithEffect'
import LoadingError from './chapters/ch10/10-6_LoadingError'
import AxiosInstance from './chapters/ch10/10-7_AxiosInstance'
import TanstackQuery from './chapters/ch10/10-8_TanstackQuery'

const ch09 = 'chapters/ch09/'
const ch10 = 'chapters/ch10/'

const chapterList = [
  {
    title: '라이브 코딩',
    lessons: [
      { id: 'playground', label: '✏️', title: '연습장', component: Playground, files: ['playground/Playground.jsx'], bare: true },
    ],
  },
  {
    title: 'CHAPTER 09. 전역 상태 관리',
    lessons: [
      { id: '09-1', title: '지역 상태와 전역 상태', component: LocalVsGlobal, files: [ch09 + '09-1_LocalVsGlobal.jsx'] },
      {
        id: '09-2',
        title: 'Context API',
        component: ContextApi,
        files: [ch09 + '09-2_ContextApi.jsx', ch09 + 'contexts/UserContext.js', ch09 + 'contexts/ThemeContext.js'],
      },
      {
        id: '09-3',
        title: 'Zustand Store 만들기',
        component: ZustandStore,
        files: [ch09 + '09-3_ZustandStore.jsx', ch09 + 'stores/useUserStore.js', ch09 + 'stores/useThemeStore.js'],
      },
      {
        id: '09-4',
        title: '전역 상태 조회 및 변경',
        component: ReadAndUpdate,
        files: [ch09 + '09-4_ReadAndUpdate.jsx', ch09 + 'stores/useCartStore.js'],
      },
      { id: '09-5', title: 'Selector와 선택적 구독', component: Selector, files: [ch09 + '09-5_Selector.jsx'] },
      {
        id: '09-6',
        title: 'persist로 상태 저장',
        component: Persist,
        files: [ch09 + '09-6_Persist.jsx', ch09 + 'stores/useSettingsStore.js'],
      },
      { id: '09-7', title: 'Context API와 Zustand 비교', component: ContextVsZustand, files: [ch09 + '09-7_ContextVsZustand.jsx'] },
    ],
  },
  {
    title: 'CHAPTER 10. Axios와 서버 통신',
    lessons: [
      { id: '10-1', title: '클라이언트 · 서버와 HTTP, REST API', component: HttpRest, files: [ch10 + '10-1_HttpRest.jsx'] },
      { id: '10-2', title: 'Promise와 async/await', component: AsyncAwait, files: [ch10 + '10-2_AsyncAwait.jsx'] },
      { id: '10-3', title: 'Axios 설치와 GET 요청', component: AxiosGet, files: [ch10 + '10-3_AxiosGet.jsx'] },
      { id: '10-4', title: 'POST · PUT · PATCH · DELETE', component: OtherMethods, files: [ch10 + '10-4_OtherMethods.jsx'] },
      { id: '10-5', title: 'Axios와 useEffect 연동', component: AxiosWithEffect, files: [ch10 + '10-5_AxiosWithEffect.jsx'] },
      { id: '10-6', title: '로딩 및 오류 상태 관리', component: LoadingError, files: [ch10 + '10-6_LoadingError.jsx'] },
      {
        id: '10-7',
        title: 'Axios 인스턴스와 인터셉터',
        component: AxiosInstance,
        files: [ch10 + '10-7_AxiosInstance.jsx', ch10 + 'api/client.js', ch10 + 'api/useApiLogStore.js'],
      },
      { id: '10-8', title: 'TanStack Query 맛보기', component: TanstackQuery, files: [ch10 + '10-8_TanstackQuery.jsx'] },
    ],
  },
]

export const chapters = chapterList.map((chapter) => ({
  ...chapter,
  lessons: chapter.lessons.map((lesson) => ({
    ...lesson,
    mission: findMission(lesson.id),
  })),
}))

const allLessons = chapters.flatMap((chapter) =>
  chapter.lessons.map((lesson) => ({ ...lesson, chapterTitle: chapter.title })),
)

export const firstLessonId = '09-1'

export function findLesson(id) {
  return allLessons.find((lesson) => lesson.id === id)
}
