import React from 'react'
import PropTypes from 'prop-types'
import { Card, Flex, Text } from 'rebass'
import MdClose from 'react-icons/lib/md/close'
import Icon from './Icon'
import Spinner from './Spinner'

/**
 * @render react
 * @name Notification
 * @example
 * <Notification variant="success">Success message</Success/>
 */
class Notification extends React.PureComponent {
  render() {
    const { children, processing, variant } = this.props
    return (
      <Card px={3} py={3} borderRadius="5px" {...this.props}>
        <Flex justifyContent="space-between">
          <Flex>
            {processing ? <Spinner size="2em" mr="0.5em" /> : <Icon variant={variant} />}
            <Text ml={2}>{children}</Text>
          </Flex>
          <MdClose />
        </Flex>
      </Card>
    )
  }
}

Notification.displayName = 'Notification'
Notification.defaultProps = {
  processing: false,
  variant: 'success'
}

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  processing: PropTypes.bool,
  variant: PropTypes.string
}

export default Notification
