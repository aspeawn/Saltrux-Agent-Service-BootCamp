import { create } from 'zustand'

/**
 * create(함수) -> Hook을 return해줌
 * - 함수가 돌려주는 객체 : state, action(값을 바꾸는 함수) 리턴
 * - set : setXXX 와 같은 state를 바꾸는 함수
 */
const useUserStore = create((set) => ({
  // 상태값
  user: { name: '김리액트' },

  login: () => set({ user: { name: '김리액트' } }),
  logout: () => set({ user: null }),
}))

export default useUserStore
