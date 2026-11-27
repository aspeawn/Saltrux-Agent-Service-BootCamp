import { create } from 'zustand'

const useApiLogStore = create((set) => ({
  token: null,
  logs: [],

  setToken: (token) => set({ token }),
  addLog: (text) =>
    set((state) => ({ logs: [...state.logs, `${new Date().toLocaleTimeString()}  ${text}`] })),
  clearLogs: () => set({ logs: [] }),
}))

export default useApiLogStore
