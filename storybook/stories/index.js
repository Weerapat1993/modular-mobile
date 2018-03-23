import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { linkTo } from '@storybook/addon-links'
import CenterView from './CenterView'
import Welcome from './Welcome'
import { ButtonScene, IconButtonScene } from '../scenes'
import { Loading, ErrorHandling } from '../../src/components'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Error Handling', module)
  .add('Loading', () => <Loading />)
  .add('Error Page', () => <ErrorHandling isFetching={false} error='Error' onReload={() => null} >A</ErrorHandling>)

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Primary', () => <ButtonScene type='primary' />)
  .add('OutLine', () => <ButtonScene type='outline' />)
  .add('Flat', () => <ButtonScene type='flat' />)
  .add('Primary Rounded', () => <ButtonScene type='primary' rounded />)
  .add('OutLine Rounded', () => <ButtonScene type='outline' rounded />)
  .add('Flat Rounded', () => <ButtonScene type='flat' rounded />)

storiesOf('Icon Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Primary', () => <IconButtonScene type='primary' />)
  .add('OutLine', () => <IconButtonScene type='outline' />)
  .add('Flat', () => <IconButtonScene type='flat' />)
