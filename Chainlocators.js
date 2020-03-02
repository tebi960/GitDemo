describe("Protractor Element demo",function()   {   
	
	it("Chain Locators",function(){

        browser.get("http://juliemr.github.io/protractor-demo/");

        //repeater, chain locators, and CSS for identical tags

        var first = element(by.model('first'));
first.sendKeys('3');

element(by.model("operator")).element(by.css("option:nth-child(3)")).click();

var second = element(by.model('second'));
second.sendKeys('5');
var button = element(by.id('gobutton'));
button.click();

element(by.repeater("result in memory")).element(by.css("td:nth-child(2)")).getText().then(function(text)

{


    console.log(text);
});



    }
 )



	
})   