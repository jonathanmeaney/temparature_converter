import React from 'react';

export default class App extends React.Component {

  constructor(){
    super();

    // Initial State of the component.
    // celsius and fahrenheit will store the values of the conversions.
    this.state = {
      celsius: 0.0,
      fahrenheit: 0.0
    }

    // Binding the conversion functions so events with be handled correctly
    this.convertToCelisus = this.convertToCelisus.bind(this);
    this.convertToFahrenheit = this.convertToFahrenheit.bind(this);
  }

  // Conversion functions fire on input change.
  convertToCelisus(e){
    // Current value entered in the input.
    const value = e.target.value;

    // Converting the input to a float and doing the calculation, limiting to 2 decimals.
    const conversion = ((parseFloat(value) - 32) / 1.8).toFixed(2);

    // Updating the state to set celsius to the converted value.
    this.setState({celsius: conversion});
  }

  convertToFahrenheit(e){
    const value = e.target.value;
    const conversion = ((parseFloat(value) * 1.8) + 32).toFixed(2);
    this.setState({fahrenheit: conversion});
  }

  render() {
    return (
      <div id="content">
        <h1>Temperature Converter</h1>

        <h2>Celsius to Fahrenheit</h2>

        {/*
          Setting onChange={this.convertToFahrenheit} will fire the
          convertToFahrenheit function when the input changes (text is entered)
        */}
        <input
          type='number'
          placeholder='Enter Celsius temperature'
          onChange={this.convertToFahrenheit}
        />
        {/*
          Displating the value of fahrenheit from the component state.
        */}
        <p>
          Fahrenheit: {this.state.fahrenheit}
        </p>

        <h2>Fahrenheit to Celsius</h2>
        <input
          type='number'
          placeholder='Enter Fahrenheit temperature'
          onChange={this.convertToCelisus}
        />
        <p>
          Celsius: {this.state.celsius}
        </p>
      </div>
    );
  }
}
