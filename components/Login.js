'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import AvatarImage from '../assets/avatar.png';

class Login extends Component {
  render() {
    return (
    	<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
	      <View style={styles.container}>
	      	<View style={styles.up}>
	      		<Image
	      		  source={AvatarImage}
	      		  style={{width: 180, height: 180,}}
	      		/>      		
	      	</View>
	      	<View style={styles.mid}>
	      		<View style={styles.textInputContainer}>
	      			<TextInput style={styles.textInput}
	      				textContentType='emailAddress'
	      				keyboardType='email-address'
	      				placeholder="Email Address"
	      				placeholderTextColor={'white'}
	      			> 
	      			</TextInput>
	      		</View>
	      		<View style={styles.textInputContainer}>
	      			<TextInput style={styles.textInput}
	      				placeholder="Password"
	      				placeholderTextColor={'white'}
	      				secureTextEntry={true}
	      			>      			  
	      			</TextInput>
	      		</View>
	      		<View>
	      			<TouchableOpacity style={styles.loginButton}>
	      				<Text style={styles.loginButtonTitle}>
	      				 	LOGIN
	      				</Text>
	      			</TouchableOpacity>
	      		</View>
	      	</View>
	      	<View style={styles.down}>
	      		<Text style={styles.textDown}>
	      		 	Don't have an account?<Text style={{fontWeight: 'bold'}}>
	      		 	{SignUp}
	      		 	</Text>
	      		</Text>
	      	</View>
	      </View>
	    </TouchableWithoutFeedback>
    );
  }
}
const SignUp = ` Sign up`
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: 'rgb(17, 88, 207)',
	},
	up:{
		flex: 50,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	mid: {
		flex: 40,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	down: {
		flex: 10,
		flexDirection: 'column',
		alignItems: 'center',
	},
	textInputContainer: {
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		paddingHorizontal: 10,
		marginBottom: 20,
		borderRadius: 6,
	},
	textInput: {
		width: 300,
		height: 55,
		color: 'black',
		fontWeight: 'bold'
	},
	textDown: {
		color: 'white',
	},
	loginButton: {
		width: 320,
		height: 50,
		backgroundColor: 'rgb(94, 197, 98)',
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 15,
	},
	loginButtonTitle: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18,
	},
});


export default Login;