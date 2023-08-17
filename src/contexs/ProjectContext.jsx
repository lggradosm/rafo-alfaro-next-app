'use client'

import {
  countProjects,
  getProjectsPagination
} from '@services/projectService'

const { createContext, useState, useContext, useEffect } = require('react')

const ProjectContext = createContext()

export function ProjectProvider ({ children }) {
  const [projects, setProjects] = useState([])
  const [page, setPage] = useState(1)
  const [loaded, setLoaded] = useState(false)
  const [activePagination, setActivePagination] = useState(true)
  const [maxPages, setMaxPages] = useState(1.1)

  const nextPage = () => {
    setPage((prev) => prev + 1)
  }

  const verifyPage = () => {
    if (page < maxPages) setActivePagination(true)
    else setActivePagination(false)
  }

  useEffect(() => {
    verifyPage()
    if (!activePagination) return
    setLoaded(false)

    const date =
      page === 1 ? new Date() : projects[projects.length - 1].created_at
    getProjectsPagination(date)
      .then((res) => {
        setProjects((prev) => prev.concat(res))
      })
      .finally(() => {
        setLoaded(true)
      })
  }, [page])

  useEffect(() => {
    countProjects().then((res) => {
      const max = Math.ceil(res / 10)
      setMaxPages(max)
    })
  }, [])

  return (
    <ProjectContext.Provider
      value={{ projects, nextPage, loaded, activePagination }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
export default function useProjectContext () {
  const context = useContext(ProjectContext)
  if (context === undefined) {
    throw new Error('Conext must be used within a Provider')
  }
  return context
}
