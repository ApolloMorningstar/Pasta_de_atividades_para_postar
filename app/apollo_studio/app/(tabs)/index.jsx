import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, TextInputComponent, View } from 'react-native';

const App = () => {
    const [number, setNumber] = useState('');
    const [resultado, setResultado] = useState('')
  
    const soma = function () {
      setResultado(Number(number) + 5) // converter stirng para número
      return number
    }
    const subtração = function () {
      setResultado(Number(number) - 5) // converter stirng para número
      return number
    }
    const divisão = function () {
      setResultado(Number(number) / 5) // converter stirng para número
      return number
    }
    const multiplicação = function () {
      setResultado(Number(number) * 5) // converter stirng para número
      return number
    }
  
    return (
      <View style={styles.container}>
        <Text>CALCULADORA</Text>
        
        <TextInput   
          onChangeText={setNumber} 
          value={number}
          placeholder='Insira o número'
          keyboardType='numeric'
        />
        <View style={styles.buttonContainer}>
        <Button title= '+'  onPress= {() => soma()} />
        <Button title= '-'  onPress= {() => subtração()} />
        <Button title= '/'  onPress= {() => divisão()} />
        <Button title= 'x'  onPress= {() => multiplicação()}/>
        </View>
       
  
        <Text> O valor é {resultado}</Text>
  
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
    
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100px',
    margin: 15,
  },
});
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// const App = () => {
//   const [display, setDisplay] = useState('');
//   const [result, setResult] = useState('');

//   const handlePress = (value) => {
//     if (value === '=') {
//       try {
//         setResult(eval(display).toString());
//       } catch (error) {
//         setResult('Error');
//       }
//     } else if (value === 'C') {
//       setDisplay('');
//       setResult('');
//     } else {
//       setDisplay(display + value);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.resultContainer}>
//         <Text style={styles.resultText}>{result}</Text>
//       </View>
//       <View style={styles.displayContainer}>
//         <Text style={styles.displayText}>{display}</Text>
//       </View>
//       <View style={styles.buttonsContainer}>
//         {['7', '8', '9', '/'].map((value) => (
//           <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
//             <Text style={styles.buttonText}>{value}</Text>
//           </TouchableOpacity>
//         ))}
//         {['4', '5', '6', '*'].map((value) => (
//           <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
//             <Text style={styles.buttonText}>{value}</Text>
//           </TouchableOpacity>
//         ))}
//         {['1', '2', '3', '-'].map((value) => (
//           <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
//             <Text style={styles.buttonText}>{value}</Text>
//           </TouchableOpacity>
//         ))}
//         {['0', '.', '=', '+'].map((value) => (
//           <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
//             <Text style={styles.buttonText}>{value}</Text>
//           </TouchableOpacity>
//         ))}
//         <TouchableOpacity style={styles.clearButton} onPress={() => handlePress('C')}>
//           <Text style={styles.buttonText}>C</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   resultContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//     backgroundColor: '#d4d4d2',
//     padding: 10,
//   },
//   resultText: {
//     fontSize: 40,
//     color: '#000',
//   },
//   displayContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//     backgroundColor: '#d4d4d2',
//     padding: 10,
//   },
//   displayText: {
//     fontSize: 30,
//     color: '#000',
//   },
//   buttonsContainer: {
//     flex: 7,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     backgroundColor: '#d4d4d2',
//   },
//   button: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     minWidth: '25%',
//     minHeight: '20%',
//     borderWidth: 1,
//     borderColor: '#fff',
//     backgroundColor: '#1e90ff',
//   },
//   clearButton: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     minWidth: '100%',
//     minHeight: '20%',
//     borderWidth: 1,
//     borderColor: '#fff',
//     backgroundColor: '#ff6347',
//   },
//   buttonText: {
//     fontSize: 30,
//     color: '#fff',
//   },
// });

export default App;
