import axios from 'axios';

class service {

  static getOtp(mobile, otp) {
    const urll = "https://login4.spearuc.com/MOBILE_APPS_API/sms_api.php?type=smsquicksend&user=qtnextotp&pass=987654&sender=QTTINF%20&t_id=1707170494921610008&to_mobileno=";
    const url1 = urll + mobile + "&sms_text=Dear%20customer,%20use%20this%20OTP%20";
    const url2 = url1 + otp + "%20to%20signup%20in%20to%20your%20Quality%20Thought%20Next%20account.%20This%20OTP%20will%20be%20valid%20for%20the%20next%2015%20mins";
    return axios.get(url2);
  }

  
  static loginpassword(passwordlogin) {
    const url1 = "http://localhost:5050/votes/login"
    return axios.post(url1, passwordlogin);
  }


  static updatedataofvoter(updatedData, mobileNumber) {
    const url1 = "http://localhost:5050/votes/update/";
    const url2 = url1 + mobileNumber;
    return axios.put(url2, updatedData)
  }


  static getCustomer() {
    const url1 = "http://183.82.106.55:9092/api/v1/getCustomer"
    return axios.get(url1);
  }


  static postVotedata(datapost) {
    const url1 = "http://localhost:5050/votes/post";
    return axios.post(url1, datapost)
  }


  static getbymobilenumber(mobile) {
    const url1 = "http://localhost:5050/votes/mobile/";
    const url2 = url1 + mobile;
    return axios.get(url2, mobile)
  }


  static deletedataofvoter(mobile) {
    const url1 = "http://localhost:5050/votes/delete/";
    const url2 = url1 + mobile;
    return axios.delete(url2, mobile)
  }





} export default service;