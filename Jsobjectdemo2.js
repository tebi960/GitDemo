var obj=  require("./Jsobjectdemo.js");
var d = require("./data.js");
var using = require('jasmine-data-provider');

describe("First", function(){

  //Data stores actual data
  //description stores sub object name
  //for every iteration one data set is picked.

using(d.datadriven, function(data, description)
{


  it("Test case"+ description, function(){

    //  browser.get('http://juliemr.github.io/protractor-demo/');
    obj.getURL();
     obj.firstinput.sendKeys(data.firstinput);
     obj.secondinput.sendKeys(data.secondinput);
      obj.goButton.click();
  
      expect(obj.result.getText()).toBe(data.result);
  
     // obj.getModel();
     // console.log(obj.search);
  
  });

});


});
