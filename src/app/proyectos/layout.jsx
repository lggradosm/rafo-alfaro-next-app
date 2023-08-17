'use client'
import { ProjectProvider } from '@contexs/ProjectContext'
import React from 'react'

export default function layout ({ children }) {
  return (
    <ProjectProvider>
      <main>
        {children}
      </main>
    </ProjectProvider>
  )
}
