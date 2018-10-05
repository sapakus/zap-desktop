import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button as BaseButton, Flex, Text } from 'rebass'
import Spinner from './Spinner'

const Wrapper = styled(BaseButton)`
  transition: all 0.25s;
  outline: none;
  border-radius: 5;
  font-weight: normal;
  line-height: '18px';
  &:focus {
    box-shadow: 0 0 3px ${props => props.theme.lightningOrange};
  }
  &:disabled {
    opacity: 0.5;
  }
  &:hover:enabled {
    cursor: pointer;
  }
`

/**
 * @render react
 * @name Button
 * @example
 * <Button><Basic button</Button>
 */
const Button = props => {
  const { children, processing, size } = props
  const sizes = {
    small: {
      x: 3,
      y: 2
    },
    large: {
      x: 5,
      y: 3
    }
  }
  return (
    <Wrapper {...props} px={sizes[size]['x']} py={sizes[size]['y']}>
      <Flex>
        {processing && <Spinner size="2em" mr="0.5em" />}
        <Text>{children}</Text>
      </Flex>
    </Wrapper>
  )
}

Button.displayName = 'Button'
Button.defaultProps = {
  processing: false,
  size: 'small',
  variant: 'normal'
}
Button.propTypes = {
  processing: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string
}

export default Button
