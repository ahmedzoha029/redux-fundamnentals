import * as toolkitRaw from '@reduxjs/toolkit';
const { configureStore, getDefaultMiddleware } = toolkitRaw.default ?? toolkitRaw;
import func from './middlewares/func.js'
import logger from './middlewares/logger.js';
import toast from './middlewares/toast.js';
import reducer from './reducer.js'

export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({development: 'console' }),
      toast
    ]
  });
}