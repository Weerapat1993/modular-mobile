import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { linkTo } from '@storybook/addon-links'
import CenterView from './CenterView'
import Welcome from './Welcome'
import { ButtonScene } from '../scenes'
import { Loading } from '../../src/components'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Loading', module)
  .add('Default', () => <Loading />)

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Primary', () => <ButtonScene type='primary' />)
  .add('OutLine', () => <ButtonScene type='outline' />)
  .add('Flat', () => <ButtonScene type='flat' />)
  .add('Primary Rounded', () => <ButtonScene type='primary' rounded />)
  .add('OutLine Rounded', () => <ButtonScene type='outline' rounded />)
  .add('Flat Rounded', () => <ButtonScene type='flat' rounded />)
