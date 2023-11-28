import React, { useState, useEffect } from 'react';
//import OrientationMonitor from './OrientationMonitor';
import { accelerometer } from 'react-native-sensors';
import Svg, { Circle, Line } from 'react-native-svg';
import { View, Text } from 'react-native';


const App = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  useEffect(() => {
    const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
  setAcceleration({ x, y, z })

);
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  const radius = 50;
  const centerX = 100;
  const centerY = 100;

  return (
    <View>
    <Text>X: {acceleration.x.toFixed(2)}</Text>
    <Text>Y: {acceleration.y.toFixed(2)}</Text>
    <Text>Z: {acceleration.z.toFixed(2)}</Text>
    <Svg height="200" width="200">
      <Circle cx={centerX} cy={centerY} r={radius} fill="lightgray" />
      <Line
        x1={centerX}
        y1={centerY}
        x2={centerX + acceleration.x * radius}
        y2={centerY - acceleration.y * radius}
        stroke="red"
        strokeWidth="2"
      />
    </Svg>
  </View>
  );
};

export default App;
