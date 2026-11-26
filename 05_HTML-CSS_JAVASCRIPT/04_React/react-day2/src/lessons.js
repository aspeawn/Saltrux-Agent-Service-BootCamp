import Playground from './playground/Playground'
import { findMission } from './missions'

import Immutability from './chapters/ch05/05-1_Immutability'
import ObjectState from './chapters/ch05/05-2_ObjectState'
import ArrayState from './chapters/ch05/05-3_ArrayState'
import DerivedState from './chapters/ch05/05-6_DerivedState'
import StateDesign from './chapters/ch05/05-7_StateDesign'

import InputOnChange from './chapters/ch06/06-1_InputOnChange'
import Controlled from './chapters/ch06/06-2_Controlled'
import Uncontrolled from './chapters/ch06/06-3_Uncontrolled'
import MultipleInputs from './chapters/ch06/06-4_MultipleInputs'
import SelectCheckbox from './chapters/ch06/06-5_SelectCheckbox'
import FormSubmit from './chapters/ch06/06-6_FormSubmit'
import Validation from './chapters/ch06/06-7_Validation'

import OneWayFlow from './chapters/ch07/07-1_OneWayFlow'
import LiftingStateUp from './chapters/ch07/07-2_LiftingStateUp'
import ChildToParent from './chapters/ch07/07-3_ChildToParent'
import PropsDrilling from './chapters/ch07/07-5_PropsDrilling'

import HooksRules from './chapters/ch08/08-1_HooksRules'
import UseRefValue from './chapters/ch08/08-2_UseRefValue'
import UseRefDom from './chapters/ch08/08-3_UseRefDom'
import UseEffect from './chapters/ch08/08-4_UseEffect'
import Dependencies from './chapters/ch08/08-5_Dependencies'
import Cleanup from './chapters/ch08/08-6_Cleanup'
import NoEffectNeeded from './chapters/ch08/08-7_NoEffectNeeded'
import UseReducer from './chapters/ch08/08-8_UseReducer'
import CustomHook from './chapters/ch08/08-9_CustomHook'
import LocalStorage from './chapters/ch08/08-10_LocalStorage'
import Debugging from './chapters/ch08/08-11_Debugging'
import AiCodeReview from './chapters/ch08/08-12_AiCodeReview'

import TodoStart from './projects/todo/start/TodoStart'
import TodoAiGuide from './projects/todo/ai/TodoAiGuide'
import MyTodo from './projects/todo/ai/MyTodo'

const ch05 = 'chapters/ch05/'
const ch06 = 'chapters/ch06/'
const ch07 = 'chapters/ch07/'
const ch08 = 'chapters/ch08/'
const todo = 'projects/todo/'

const chapterList = [
  {
    title: '라이브 코딩',
    lessons: [
      { id: 'playground', label: '✏️', title: '연습장', component: Playground, files: ['playground/Playground.jsx'], bare: true },
    ],
  },
  {
    title: 'CHAPTER 05. State 심화',
    lessons: [
      { id: '05-1', title: 'State의 불변성', component: Immutability, files: [ch05 + '05-1_Immutability.jsx'] },
      { id: '05-2', title: '객체 상태 업데이트', component: ObjectState, files: [ch05 + '05-2_ObjectState.jsx'] },
      { id: '05-3', title: '배열 상태 추가 · 수정 · 삭제', component: ArrayState, files: [ch05 + '05-3_ArrayState.jsx'] },
      { id: '05-6', title: '파생 상태와 중복 상태', component: DerivedState, files: [ch05 + '05-6_DerivedState.jsx'] },
      { id: '05-7', title: '올바른 상태 설계', component: StateDesign, files: [ch05 + '05-7_StateDesign.jsx'] },
    ],
  },
  {
    title: 'CHAPTER 06. 사용자 입력 처리',
    lessons: [
      { id: '06-1', title: 'Input과 onChange', component: InputOnChange, files: [ch06 + '06-1_InputOnChange.jsx'] },
      { id: '06-2', title: '제어 컴포넌트', component: Controlled, files: [ch06 + '06-2_Controlled.jsx'] },
      { id: '06-3', title: '비제어 컴포넌트', component: Uncontrolled, files: [ch06 + '06-3_Uncontrolled.jsx'] },
      { id: '06-4', title: '여러 입력값 관리', component: MultipleInputs, files: [ch06 + '06-4_MultipleInputs.jsx'] },
      { id: '06-5', title: 'Select와 Checkbox', component: SelectCheckbox, files: [ch06 + '06-5_SelectCheckbox.jsx'] },
      { id: '06-6', title: 'Form과 onSubmit', component: FormSubmit, files: [ch06 + '06-6_FormSubmit.jsx'] },
      { id: '06-7', title: '입력값 유효성 검사', component: Validation, files: [ch06 + '06-7_Validation.jsx'] },
    ],
  },
  {
    title: 'CHAPTER 07. 컴포넌트 간 상태 공유',
    lessons: [
      { id: '07-1', title: '단방향 데이터 흐름', component: OneWayFlow, files: [ch07 + '07-1_OneWayFlow.jsx'] },
      { id: '07-2', title: 'Lifting State Up', component: LiftingStateUp, files: [ch07 + '07-2_LiftingStateUp.jsx'] },
      { id: '07-3', title: '자식에서 부모 상태 변경하기', component: ChildToParent, files: [ch07 + '07-3_ChildToParent.jsx'] },
      { id: '07-5', title: 'Props Drilling과 문제점', component: PropsDrilling, files: [ch07 + '07-5_PropsDrilling.jsx'] },
    ],
  },
  {
    title: 'CHAPTER 08. React Hooks',
    lessons: [
      { id: '08-1', title: 'Hooks의 개념과 사용 규칙', component: HooksRules, files: [ch08 + '08-1_HooksRules.jsx'] },
      { id: '08-2', title: 'useRef와 값의 참조', component: UseRefValue, files: [ch08 + '08-2_UseRefValue.jsx'] },
      { id: '08-3', title: 'useRef와 DOM 접근', component: UseRefDom, files: [ch08 + '08-3_UseRefDom.jsx'] },
      { id: '08-4', title: 'useEffect의 개념', component: UseEffect, files: [ch08 + '08-4_UseEffect.jsx'] },
      { id: '08-5', title: '의존성 배열', component: Dependencies, files: [ch08 + '08-5_Dependencies.jsx'] },
      { id: '08-6', title: 'Cleanup 함수', component: Cleanup, files: [ch08 + '08-6_Cleanup.jsx'] },
      { id: '08-7', title: 'useEffect가 필요하지 않은 경우', component: NoEffectNeeded, files: [ch08 + '08-7_NoEffectNeeded.jsx'] },
      { id: '08-8', title: 'useReducer를 활용한 상태 관리', component: UseReducer, files: [ch08 + '08-8_UseReducer.jsx'] },
      {
        id: '08-9',
        title: 'Custom Hook 만들기',
        component: CustomHook,
        files: [ch08 + '08-9_CustomHook.jsx', ch08 + 'hooks/useToggle.js', ch08 + 'hooks/useInput.js', ch08 + 'hooks/useWindowWidth.js'],
      },
      {
        id: '08-10',
        title: 'localStorage 활용하기',
        component: LocalStorage,
        files: [ch08 + '08-10_LocalStorage.jsx', ch08 + 'hooks/useLocalStorage.js'],
      },
      { id: '08-11', title: '에러 메시지 읽기와 디버깅 도구', component: Debugging, files: [ch08 + '08-11_Debugging.jsx'] },
      { id: '08-12', title: 'AI가 만든 코드 검증하기', component: AiCodeReview, files: [ch08 + '08-12_AiCodeReview.jsx'] },
    ],
  },
  {
    title: '2일차 실습 프로젝트: Todo List',
    lessons: [
      {
        id: 'todo-start',
        label: '✍️',
        title: 'Todo (직접 짜기)',
        component: TodoStart,
        files: [todo + 'start/TodoStart.jsx', todo + 'Todo.module.css'],
      },
      {
        id: 'todo-ai-guide',
        label: '🤖',
        title: 'AI로 만들기 가이드',
        component: TodoAiGuide,
        files: [todo + 'ai/TodoAiGuide.jsx'],
      },
      {
        id: 'todo-ai-mine',
        label: '🤖',
        title: '내 AI Todo',
        component: MyTodo,
        files: [todo + 'ai/MyTodo.jsx'],
        bare: true,
      },
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

export const firstLessonId = '05-1'

export function findLesson(id) {
  return allLessons.find((lesson) => lesson.id === id)
}
