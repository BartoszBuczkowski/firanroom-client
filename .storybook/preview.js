import { withNextRouter } from 'storybook-addon-next-router'
import { addDecorator } from '@storybook/react'
import initializeDayJs from '@/helpers/initDayJs'
import '@/styles/globals.css'

export const parameters = {
   actions: { argTypesRegex: '^on[A-Z].*' },
   layout: 'fullscreen',
   darkMode: {
      darkClass: 'lights-out',
      lightClass: 'lights-on',
   },
}

addDecorator(
   withNextRouter({
      path: '/',
      asPath: '/',
      query: {},
   }),
)

initializeDayJs()
