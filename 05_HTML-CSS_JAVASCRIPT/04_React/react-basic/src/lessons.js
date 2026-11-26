import Playground from './playground/Playground'
import { findMission } from './missions'

import WhatIsReact from './chapters/ch01/01-1_WhatIsReact'
import Spa from './chapters/ch01/01-2_Spa'
import VirtualDom from './chapters/ch01/01-3_VirtualDom'
import Declarative from './chapters/ch01/01-4_Declarative'
import NodeNpm from './chapters/ch01/01-5_NodeNpm'
import Vite from './chapters/ch01/01-6_Vite'
import ProjectStructure from './chapters/ch01/01-7_ProjectStructure'

import JsxBasic from './chapters/ch02/02-1_JsxBasic'
import JsxExpression from './chapters/ch02/02-2_JsxExpression'
import FragmentExample from './chapters/ch02/02-3_Fragment'
import FunctionComponent from './chapters/ch02/02-4_FunctionComponent'
import ComponentReuse from './chapters/ch02/02-5_ComponentReuse'
import Composition from './chapters/ch02/02-6_Composition'
import Styling from './chapters/ch02/02-7_Styling'

import PropsConcept from './chapters/ch03/03-1_PropsConcept'
import PassingProps from './chapters/ch03/03-2_PassingProps'
import Destructuring from './chapters/ch03/03-3_Destructuring'
import Children from './chapters/ch03/03-4_Children'
import OneWayFlow from './chapters/ch03/03-5_OneWayFlow'
import StateConcept from './chapters/ch03/03-6_StateConcept'
import UseState from './chapters/ch03/03-7_UseState'
import Rendering from './chapters/ch03/03-8_Rendering'
import FunctionalUpdate from './chapters/ch03/03-9_FunctionalUpdate'

import EventHandling from './chapters/ch04/04-1_EventHandling'
import EventHandler from './chapters/ch04/04-2_EventHandler'
import ConditionalRendering from './chapters/ch04/04-3_ConditionalRendering'
import ListRendering from './chapters/ch04/04-4_ListRendering'
import Key from './chapters/ch04/04-5_Key'
import Practice from './chapters/ch04/04-6_Practice'

import ProfileCardStart from './projects/profile-card/start/ProfileCardStart'
import CounterStart from './projects/counter/start/CounterStart'

const ch01 = 'chapters/ch01/'
const ch02 = 'chapters/ch02/'
const ch03 = 'chapters/ch03/'
const ch04 = 'chapters/ch04/'
const profile = 'projects/profile-card/'
const counter = 'projects/counter/'

const chapterList = [
  {
    title: '라이브 코딩',
    lessons: [
      { id: 'playground', label: '✏️', title: '연습장', component: Playground, files: ['playground/Playground.jsx'], bare: true },
    ],
  },
  {
    title: 'CHAPTER 01. React 시작하기',
    lessons: [
      { id: '01-1', title: 'React란 무엇인가?', component: WhatIsReact, files: [ch01 + '01-1_WhatIsReact.jsx'] },
      { id: '01-2', title: 'SPA의 개념', component: Spa, files: [ch01 + '01-2_Spa.jsx'] },
      { id: '01-3', title: 'DOM과 Virtual DOM', component: VirtualDom, files: [ch01 + '01-3_VirtualDom.jsx'] },
      { id: '01-4', title: '명령형과 선언형 프로그래밍', component: Declarative, files: [ch01 + '01-4_Declarative.jsx'] },
      { id: '01-5', title: 'Node.js와 npm', component: NodeNpm, files: [ch01 + '01-5_NodeNpm.jsx'] },
      { id: '01-6', title: 'Vite 개발 환경 구축', component: Vite, files: [ch01 + '01-6_Vite.jsx'] },
      { id: '01-7', title: 'React 프로젝트 구조', component: ProjectStructure, files: [ch01 + '01-7_ProjectStructure.jsx'] },
    ],
  },
  {
    title: 'CHAPTER 02. JSX와 컴포넌트',
    lessons: [
      { id: '02-1', title: 'JSX 기본 문법', component: JsxBasic, files: [ch02 + '02-1_JsxBasic.jsx'] },
      { id: '02-2', title: 'JSX에서 JavaScript 사용하기', component: JsxExpression, files: [ch02 + '02-2_JsxExpression.jsx'] },
      { id: '02-3', title: 'Fragment 사용하기', component: FragmentExample, files: [ch02 + '02-3_Fragment.jsx'] },
      { id: '02-4', title: '함수형 컴포넌트', component: FunctionComponent, files: [ch02 + '02-4_FunctionComponent.jsx'] },
      {
        id: '02-5',
        title: '컴포넌트 분리 및 재사용',
        component: ComponentReuse,
        files: [ch02 + '02-5_ComponentReuse.jsx', ch02 + 'components/Avatar.jsx', ch02 + 'components/Buttons.jsx'],
      },
      { id: '02-6', title: '컴포넌트 합성', component: Composition, files: [ch02 + '02-6_Composition.jsx'] },
      {
        id: '02-7',
        title: 'CSS와 CSS Modules',
        component: Styling,
        files: [
          ch02 + '02-7_Styling.jsx',
          ch02 + '02-7_plain-a.css',
          ch02 + '02-7_plain-b.css',
          ch02 + '02-7_CardA.module.css',
          ch02 + '02-7_CardB.module.css',
        ],
      },
    ],
  },
  {
    title: 'CHAPTER 03. Props와 State',
    lessons: [
      { id: '03-1', title: 'Props의 개념', component: PropsConcept, files: [ch03 + '03-1_PropsConcept.jsx'] },
      { id: '03-2', title: 'Props 전달하기', component: PassingProps, files: [ch03 + '03-2_PassingProps.jsx'] },
      { id: '03-3', title: 'Props 구조 분해 할당', component: Destructuring, files: [ch03 + '03-3_Destructuring.jsx'] },
      { id: '03-4', title: 'children 활용하기', component: Children, files: [ch03 + '03-4_Children.jsx'] },
      { id: '03-5', title: '단방향 데이터 흐름', component: OneWayFlow, files: [ch03 + '03-5_OneWayFlow.jsx'] },
      { id: '03-6', title: 'State의 개념', component: StateConcept, files: [ch03 + '03-6_StateConcept.jsx'] },
      { id: '03-7', title: 'useState 사용하기', component: UseState, files: [ch03 + '03-7_UseState.jsx'] },
      { id: '03-8', title: '렌더링과 리렌더링', component: Rendering, files: [ch03 + '03-8_Rendering.jsx'] },
      { id: '03-9', title: '함수형 상태 업데이트', component: FunctionalUpdate, files: [ch03 + '03-9_FunctionalUpdate.jsx'] },
    ],
  },
  {
    title: 'CHAPTER 04. 동적인 UI 구현',
    lessons: [
      { id: '04-1', title: '이벤트 처리', component: EventHandling, files: [ch04 + '04-1_EventHandling.jsx'] },
      { id: '04-2', title: '이벤트 핸들러', component: EventHandler, files: [ch04 + '04-2_EventHandler.jsx'] },
      { id: '04-3', title: '조건부 렌더링', component: ConditionalRendering, files: [ch04 + '04-3_ConditionalRendering.jsx'] },
      { id: '04-4', title: '리스트 렌더링', component: ListRendering, files: [ch04 + '04-4_ListRendering.jsx'] },
      { id: '04-5', title: 'Key의 역할', component: Key, files: [ch04 + '04-5_Key.jsx'] },
      { id: '04-6', title: '종합 실습 – 카페 메뉴판', component: Practice, files: [ch04 + '04-6_Practice.jsx'] },
    ],
  },
  {
    title: '1일차 실습 프로젝트',
    lessons: [
      {
        id: 'profile-start',
        label: '①',
        title: '프로필 카드 (실습용)',
        component: ProfileCardStart,
        files: [profile + 'start/ProfileCardStart.jsx', profile + 'data.js', profile + 'ProfileCard.module.css'],
      },
      {
        id: 'counter-start',
        label: '②',
        title: '카운터 앱 (실습용)',
        component: CounterStart,
        files: [counter + 'start/CounterStart.jsx', counter + 'Counter.module.css'],
      },
    ],
  },
]

export const chapters = chapterList.map((chapter) => ({
  ...chapter,
  lessons: chapter.lessons.map((lesson) => ({ ...lesson, mission: findMission(lesson.id) })),
}))

const allLessons = chapters.flatMap((chapter) =>
  chapter.lessons.map((lesson) => ({ ...lesson, chapterTitle: chapter.title })),
)

export const firstLessonId = '01-1'

export function findLesson(id) {
  return allLessons.find((lesson) => lesson.id === id)
}
