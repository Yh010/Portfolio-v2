import { create } from 'zustand'
import { ProjectType } from './projects/projectType'


interface filterState {
  ogfilter: ProjectType
  setfilter: (newFilter:ProjectType) => void
}

const usefilterStore = create<filterState>()((set) => ({
  ogfilter: ProjectType.ALL,
  setfilter: (newFilter) => set((state) => ({ ogfilter: state.ogfilter = newFilter})),
}))

export default usefilterStore