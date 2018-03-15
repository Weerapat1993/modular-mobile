import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';
import Welcome from './Welcome';
import { Button } from '../../src/components'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('primary', () => (
    <View>
      <Button type='primary' color='default' onPress={action('clicked-text')}>DEFAULT</Button>
      <Button type='primary' color='primary' onPress={action('clicked-text')}>PRIMARY</Button>
      <Button type='primary' color='warning' onPress={action('clicked-text')}>WARNING</Button>
      <Button type='primary' color='success' onPress={action('clicked-text')}>SUCCESS</Button>
      <Button type='primary' color='danger' onPress={action('clicked-text')}>DANGER</Button>    
    </View>
  ))
  .add('outline', () => (
    <View>
      <Button type='outline' color='default' onPress={action('clicked-text')}>DEFAULT</Button>
      <Button type='outline' color='primary' onPress={action('clicked-text')}>PRIMARY</Button>
      <Button type='outline' color='warning' onPress={action('clicked-text')}>WARNING</Button>
      <Button type='outline' color='success' onPress={action('clicked-text')}>SUCCESS</Button>
      <Button type='outline' color='danger' onPress={action('clicked-text')}>DANGER</Button>    
    </View>
  ))
  .add('flat', () => (
    <View>
      <Button type='flat' color='default' onPress={action('clicked-text')}>DEFAULT</Button>
      <Button type='flat' color='primary' onPress={action('clicked-text')}>PRIMARY</Button>
      <Button type='flat' color='warning' onPress={action('clicked-text')}>WARNING</Button>
      <Button type='flat' color='success' onPress={action('clicked-text')}>SUCCESS</Button>
      <Button type='flat' color='danger' onPress={action('clicked-text')}>DANGER</Button>    
    </View>
  ))
  .add('primary rounded', () => (
    <View>
      <Button type='primary' color='default' rounded onPress={action('clicked-text')}>DEFAULT</Button>
      <Button type='primary' color='primary' rounded onPress={action('clicked-text')}>PRIMARY</Button>
      <Button type='primary' color='warning' rounded onPress={action('clicked-text')}>WARNING</Button>
      <Button type='primary' color='success' rounded onPress={action('clicked-text')}>SUCCESS</Button>
      <Button type='primary' color='danger' rounded onPress={action('clicked-text')}>DANGER</Button>    
    </View>
  ))
  .add('outline rounded', () => (
    <View>
      <Button type='outline' color='default' rounded onPress={action('clicked-text')}>DEFAULT</Button>
      <Button type='outline' color='primary' rounded onPress={action('clicked-text')}>PRIMARY</Button>
      <Button type='outline' color='warning' rounded onPress={action('clicked-text')}>WARNING</Button>
      <Button type='outline' color='success' rounded onPress={action('clicked-text')}>SUCCESS</Button>
      <Button type='outline' color='danger' rounded onPress={action('clicked-text')}>DANGER</Button>    
    </View>
  ))
  .add('flat rounded', () => (
    <View>
      <Button type='flat' color='default' rounded onPress={action('clicked-text')}>DEFAULT</Button>
      <Button type='flat' color='primary' rounded onPress={action('clicked-text')}>PRIMARY</Button>
      <Button type='flat' color='warning' rounded onPress={action('clicked-text')}>WARNING</Button>
      <Button type='flat' color='success' rounded onPress={action('clicked-text')}>SUCCESS</Button>
      <Button type='flat' color='danger' rounded onPress={action('clicked-text')}>DANGER</Button>    
    </View>
  ))
