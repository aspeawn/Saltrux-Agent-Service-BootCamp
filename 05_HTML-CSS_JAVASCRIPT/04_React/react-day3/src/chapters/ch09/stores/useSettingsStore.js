import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const initialSettings = { theme: 'light', fontSize: 16, nickname: '' }

/**
 * 미들웨어란?
 * - 특정 함수에 대해 추가적인 기능을 만들어주는 함수
 */

/**
 * persist 미들웨어
 * - persist로 store를 감싸면 localStroage에 자동 저장 + 새로고침하면 자동으로 불러오기
 * 
 * devtools : redux devtools 확장에서 state 변화를 볼 수 있음
 * immer : state.count++ 이렇게 사용할 수 있음 (immer 패키지 필요)
 * immer ... 등
 */

const useSettingsStore = create(
  persist(
    // 기존 Store 그대로 사용
    (set) => ({
      // 상태
      ...initialSettings,
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      setFontSize: (fontSize) => set({ fontSize }),
      setNickname: (nickname) => set({ nickname }),
      reset: () => set(initialSettings),
    }),

    // localstorage에 저장할 이름 (키값) -> 다른 스토어와 겹치면 안됨
    { name: 'day3-settings' },
  ),
)

export default useSettingsStore
