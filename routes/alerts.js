var express = require('express');
var axios = require('axios');
var router = express.Router();

var data, token ;

var config = {
  method: 'post',
  url: 'https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.e060c1ac7e808a86007752a0dbb315be.81f0248134f7d1bf49fff89c47ba8898&client_id=1000.RIPFRME3W3JP21G5QT3OS2BTPY1PWO&client_secret=bc7f233a0cc067da8c38715c431623e012b14e119e&grant_type=refresh_token',
  headers: { 
    'Cookie': 'JSESSIONID=22990DC30517EAAEA18951A21FD758F5; _zcsr_tmp=7fe20c96-0e48-4d9a-8fae-20942cbd4162; b266a5bf57=dcb92d0f99dd7421201f8dc746d54606; iamcsr=7fe20c96-0e48-4d9a-8fae-20942cbd4162'
  }
};

axios(config)
.then( (response) => {
  token = response.data.access_token;
  var config = {
    method: 'get',
    url: 'https://creatorapp.zoho.com/api/v2/100rails/goscaffold/report/SysAdmin_Company_Alerts?from=1&limit=100',
    headers: { 
      'Authorization': `Zoho-oauthtoken ${token}`, 
      'Cookie': '442b5845d7=55cca134caca85650525fe1564fe26d7; _zcsr_tmp=0636db3c-d8d9-4980-911e-4e4bee9a0e8e; zccpn=0636db3c-d8d9-4980-911e-4e4bee9a0e8e'
    }
  };
 ;
  axios(config)
  .then( (res) => {
    
   
       data = res.data ;
       
  })
  .catch( (error) => {
    console.log(error);
  });
})
.catch(function (error) {
  console.log(error);
});

router.get('/', function(req, res, next) {
    res.send(data);
});

module.exports = router;