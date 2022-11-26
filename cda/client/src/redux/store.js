import { configureStore } from '@reduxjs/toolkit'
import querySlice from './QuerySlice'


export default configureStore({
  reducer: {
    querySelected: querySlice
  },
})