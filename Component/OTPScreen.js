import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation


const OTPScreen = () => {
  
   const navigation = useNavigation(); // Hook for navigation
  
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [receiveWhatsAppNotifications, setReceiveWhatsAppNotifications] =
    useState(false);
  const [isVerifyButtonDisabled, setIsVerifyButtonDisabled] = useState(true);

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  useEffect(() => {
    // Check if both checkboxes are checked to enable the Verify button
    setIsVerifyButtonDisabled(!(acceptTerms && receiveWhatsAppNotifications));
  }, [acceptTerms, receiveWhatsAppNotifications]);

  const handleContainerPress = () => {
    // Dismiss the keyboard when the container is pressed
    Keyboard.dismiss();
  };

  const handleVerify = () => {
    // Implement your logic for OTP verification here
    // For simplicity, let's assume the correct OTP is '1234'
    const enteredOTP = otp1 + otp2 + otp3 + otp4;
    const correctOTP = '1234';

    if (enteredOTP === correctOTP) {
      // OTP is correct, you can navigate to the next screen or perform any action
      console.log('Success: OTP Verified Successfully');
      navigation.navigate('ImageSlider');
    } else {
      // Incorrect OTP, you can display an error message or perform any action
      console.log('Error: Invalid OTP. Please try again.');
    }
  };

  const handleResendSMS = () => {
    // Implement your logic to resend OTP via SMS
    console.log('Resend via SMS');
  };

  const handleResendCall = () => {
    // Implement your logic to resend OTP via Call
    console.log('Resend via Call');
  };

  // Update the Verify button's disabled state
  const updateVerifyButtonState = () => {
    setIsVerifyButtonDisabled(!(acceptTerms && receiveWhatsAppNotifications));
  };
    const handleBackspace = (text, setter, prevInputRef) => {
      if (text === '') {
        setter('');
        prevInputRef.current.focus();
      }
    };
  

  return (
    <TouchableWithoutFeedback onPress={handleContainerPress}>
      <ScrollView contentContainerStyle={styles.container}>



        {/* Header Text */}
        <Text style={styles.headerText}>OTP sent to 7377886469</Text>

        {/* OTP Input */}
        <View style={styles.otpInputContainer}>
          <TextInput
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={otp1}
            onChangeText={text => {
              setOtp1(text);
              if (text !== '') input2Ref.current.focus();
            }}
            ref={input1Ref}
          />
          <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
          value={otp2}
          onChangeText={text => {
            setOtp2(text);
            if (text === '') {
              handleBackspace(text, setOtp2, input1Ref);
              return;
            }
            input3Ref.current.focus();
          }}
          ref={input2Ref}
        />
          <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
          value={otp3}
          onChangeText={text => {
            setOtp3(text);
            if (text === '') {
              handleBackspace(text, setOtp3, input2Ref);
              return;
            }
            input4Ref.current.focus();
          }}
          ref={input3Ref}
        />
          <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
          value={otp4}
          onChangeText={text => {
            setOtp4(text);
            if (text === '') {
              handleBackspace(text, setOtp4, input3Ref);
              return;
            }
          }}
          ref={input4Ref}
        />
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          style={[
            styles.verifyButton,
            isVerifyButtonDisabled && styles.disabledVerifyButton,
          ]}
          onPress={handleVerify}
          disabled={isVerifyButtonDisabled}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>

        {/* Resend Options */}
        <View style={styles.resendOptionsContainer}>
  <View style={styles.resendOptionsRow}>
    <Text style={styles.resendText}>Didn't receive the OTP?</Text>
  </View>
  {/* <Text style={styles.receiveOtpText}>Receive the OTP</Text> */}
  <View style={styles.resendOptionsRow}>
    <TouchableOpacity onPress={handleResendSMS}>
      <Text style={styles.resendLink}>Resend via SMS</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleResendCall}>
      <Text style={styles.resendLink}>Resend via Call</Text>
    </TouchableOpacity>
  </View>
</View>
        {/* Terms and Notifications Checkboxes */}
        <View style={styles.checkboxContainer}>
          <CheckBox
            title="I accept the terms of use and privacy policy"
            checked={acceptTerms}
            onPress={() => setAcceptTerms(!acceptTerms)}
          />
          <CheckBox
            title="I wish to receive notifications on WhatsApp"
            checked={receiveWhatsAppNotifications}
            onPress={() => {
              setReceiveWhatsAppNotifications(!receiveWhatsAppNotifications);
              updateVerifyButtonState();
            }}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 100, // Add paddingBottom to create space for the Verify button
    marginBottom:30,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:10,
  
  },
  otpInputContainer: {
   flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Adjust the width as needed
    marginBottom: 30
    
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#5B0888',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    fontSize: 20,
    textAlign: 'center',
    width: '20%',
  },
  verifyButton: {
    backgroundColor: '#5B0888',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Change the width to fill the screen
    bottom: 0,
    position: 'absolute',
  },
  disabledVerifyButton: {
    backgroundColor: '#9E9E9E', // Use a different color for the disabled state
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendOptionsContainer: {
    marginBottom:10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  
  resendOptionsRow:{
  flexDirection: 'row',
  justifyContent: 'center', // Adjust this to align the row as needed
  alignItems: 'center',
  marginBottom:10,

},
  resendText: {
    fontSize: 16,
    marginBottom: 10,
  },
  resendLink: {
    color: '#5B0888',
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom:10,
    

  },
  checkboxContainer: {
    width: '100%', // Ensure the container takes up the full width
    justifyContent: 'flex-end',
    flexDirection: 'column',
    bottom: 60,
    position: 'absolute',
  },
});

export default OTPScreen;