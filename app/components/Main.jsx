var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <p>This is the Main.jsx</p>
      {props.children}
    </div>
  );
}

module.exports = Main;
