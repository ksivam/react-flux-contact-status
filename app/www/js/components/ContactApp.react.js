/**
 * Created by Aarthi on 9/7/15.
 */

var React = require('react'),
    ReactPropTypes = React.PropTypes,
    Dom = React.DOM,
    ContactActions = require('../actions/ContactActions'),
    ContactTextBox = require('./ContactTextBox.react'),
    ListBox = require('./ListBox.react'),
    ContactApp = React.createClass({
        displayName: 'ContactApp',
        componentDidMount: function(){
            ContactActions.connect('creds');
        },
        componentWillUnmount: function() {
            ContactActions.disconnect();
        },
        render: function() {
            var contactTextBox = contactTextBox = React.createElement(ContactTextBox, {
                    className:'contactTextBox',
                    key:'contactTextBoxKey',
                    value:'',
                    placeholder:'enter contact name here!'
                }),
                listBox = React.createElement(ListBox, {
                    key:'listBoxKey'
                });
                return Dom.div(null, [contactTextBox, listBox]);
        }
    });

module.exports = ContactApp;
