import React from 'react'
import { AppTheme } from './theme/AppTheme'
import { CssBaseline } from "@mui/material"
import { AppRouter } from './router/AppRouter'

export const App = () => {
  return (
    <AppTheme>
      <CssBaseline/>
      <AppRouter/>
    </AppTheme>
  )
}
