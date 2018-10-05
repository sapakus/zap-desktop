import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from 'components/UI/Button'
import Icon from 'components/UI/Icon'

storiesOf('Buttons', module)
  .add('Basic', () => <Button onClick={action('clicked')}>Basic button</Button>)
  .add('With Icon', () => (
    <section>
      <Button onClick={action('clicked')}>
        <Icon variant="previous" size="1.5em" />
        Previous
      </Button>{' '}
      <Button onClick={action('clicked')}>
        Next
        <Icon variant="next" size="1.5em" />
      </Button>
    </section>
  ))
  .add('Processing', () => (
    <Button processing onClick={action('clicked')}>
      Processing
    </Button>
  ))
  .add('Disabled', () => (
    <Button disabled onClick={action('clicked')}>
      Disabled button
    </Button>
  ))
  .add('Primary', () => (
    <Button onClick={action('clicked')} variant="primary">
      Primary button
    </Button>
  ))
  .add('small', () => (
    <Button onClick={action('clicked')} size="small">
      small button
    </Button>
  ))
  .add('large', () => (
    <Button onClick={action('clicked')} size="large">
      large button
    </Button>
  ))
