import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const ContactUs = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Log in</Text>
      <View>
        <View>
          <ImageBackground
            source={require('./images/bgImg.png')}
            style={styles.mainImg}>
            <ImageBackground
              source={require('./images/lock.png')}
              style={styles.lockImg}>
              <Image
                source={require('./images/plant.png')}
                style={styles.plantImg}
              />

              <ImageBackground
                source={require('./images/phone.png')}
                style={styles.phoneImg}>
                <ImageBackground
                  source={require('./images/phn.png')}
                  style={styles.phnImg}>
                  <Image
                    source={require('./images/thumb.png')}
                    style={styles.thumbImg}
                  />
                  <Image
                    style={styles.image1Design}
                    source={require('./images/character.png')}></Image>
                </ImageBackground>
              </ImageBackground>
            </ImageBackground>
          </ImageBackground>
          <Image
            style={styles.image2Design}
            source={require('./images/floor.png')}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Mobile No.</Text>
        <TextInput style={styles.inputStyle}>+91 </TextInput>
        <Text style={styles.labels}>Enter your Password</Text>
        <TextInput style={styles.inputStyle} secureTextEntry={true}></TextInput>
        <View style={styles.chkbox}>
          <CheckBox
            checkBoxColor="#479500"
            style={styles.checkBox}
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
          />
          <Text style={styles.remember}>Remember Me</Text>
          <Text style={styles.password}>Forgot Password ? </Text>
        </View>

        <View style={styles.loginOption}>
          <TouchableOpacity
            style={[
              styles.login,
              {
                backgroundColor: isChecked ? '#479500' : ' ',
              },
            ]}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.or}>Or</Text>

          <TouchableOpacity
            style={[
              styles.otp,
              {
                backgroundColor: isChecked ? '#479500' : ' ',
              },
            ]}>
            <Text style={styles.otp}>Login With OTP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.user}>
          <Text style={styles.newUser}>New User? </Text>
          <Text style={styles.register}> Register Here</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  mainHeader: {
    paddingTop: 50,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#479500',
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
  },
  mainImg: {
    height: 190,
    width: 260,
    marginTop: 10,
    left: 40,
    right: 90,
    marginBottom: 30,
  },
  phoneImg: {
    height: 190,
    width: 120,
    right: 100,
    marginTop: -165,
  },
  phnImg: {
    marginTop: 7,
    left: 7,
    height: 175,
    width: 105,
  },
  plantImg: {
    height: 100,
    width: 75,
    marginTop: 90,
  },
  lockImg: {
    height: 60,
    width: 65,
    left: 210,
  },
  thumbImg: {
    marginTop: -20,
    height: 50,
    width: 50,
    left: -80,
  },
  image1Design: {
    marginTop: 5,
    right: 65,
    height: 155,
    width: 100,
  },

  image2Design: {
    width: 270,
    marginLeft: 50,
    marginBottom: 10,
  },

  inputContainer: {
    paddingTop: 10,
    height: 350,
    width: 300,
    left: 40,
    borderRadius: 20,
    borderWidth: 1,
    shadowColor: '#171717',
    shadowRadius: 3,
    shadowOpacity: 0.2,
    borderColor: '#black',
    shadowOffset: {x: -2, y: 4},
    paddingEnd: 20,
  },
  labels: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
    left: 20,
  },
  inputStyle: {
    marginTop: 10,
    left: 20,
    height: 35,
    width: 260,
    color: 'black',
    borderRadius: 5,
    borderWidth: 1,
  },
  chkbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  checkBox: {
    paddingTop: 25,
    left: 10,
  },
  remember: {
    paddingTop: 27,
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
  },
  password: {
    paddingTop: 27,
    right: 10,
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
  },
  loginOption: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 22,
    marginRight: 22,
    paddingTop: 25,
    fontWeight: 'bold',
    fontSize: 20,
  },
  login: {
    fontWeight: 'bold',
    height: 37,
    width: 80,
    borderRadius: 10,
    paddingTop: 6,
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#479500',
  },
  or: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingTop: 10,
  },
  otp: {
    fontWeight: 'bold',
    height: 37,
    width: 120,
    borderRadius: 10,
    paddingTop: 6,
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#479500',
  },
  user: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  newUser: {
    color: 'black',
    fontSize: 17,
  },
  register: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ContactUs;
