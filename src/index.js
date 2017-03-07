import React, { Component } from 'react';
import reduce from 'lodash.reduce';
import mapValues from 'lodash.mapvalues';

const actionHandler = (config) => (WrappedComponent) => {
  const handlers = config;
  const eventMap = reduce(handlers, (result, handler, handlerName) => {
    const eventName = `on${handlerName.substr(6)}`;

    return {
      ...result,
      [eventName]: handler,
    };
  }, {
  });

  class ActionHandler extends Component {
    constructor(props) {
      super(props);

      this.boundHandlers = mapValues(eventMap, (handler) => {
        return handler.bind(this);
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.boundHandlers}
        />
      );
    }
  }

  return ActionHandler;
};

export default actionHandler;

// actionHandler({
//   handleX: () => {}
// })