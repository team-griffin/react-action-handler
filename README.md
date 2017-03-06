# react-action-handler

`npm install @team-griffin/react-action-handler --save`

`yarn add @team-griffin/react-action-handler`

We got kind of fed up of rewriting a component or container which needed an event handler from a pure react function to an es6 component. So we decided to make it an HOC!

## Usage

```
// MyComponent
import actionHandler from '@team-griffin/react-action-handler';

const MyComponent = (props) => {
  return (
    <button type="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default actionHandler({
  handleClick: function(e) {
    this.props.onClick(this.props.id);
  }
})(MyComponent);

// MyParent

const MyParent = (props) => {
  return (
    <MyComponent id="foo" onClick={props.onClick}>
      Foobar
    </MyComponent>
  );
};

```

Action handler automatically maps the handler names to event names. This is to ensure best practices.

Example:
```
handleClick -> onClick
handleMouseUp -> onMouseUp
```

## Important

The callback functions defined are bound to the action handler component. If an arrow function is used this context is lost and you will be unable to access props.
