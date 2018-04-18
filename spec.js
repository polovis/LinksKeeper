describe('Check new URL adding app', function() {
    var newURL = element(by.model('enter'));
    var addBtn = element(by.id('add'));
    
    var allURL = element.all(by.repeater('all url'));

    
    it('check out what url address was inserted in input field', function() {

      newURL.sendKeys('http://www.ibuki.com.pl');
      addBtn.click();

      expect(newURLr.getAttribute('value')).toBe('http://www.ibuki.com.pl');     
    });  

    it('adding two url adresses and check out if both were listed', function() {
      newURL.sendKeys('http://www.ibuki.com.pl');        
      addBtn.click();
      newURL.sendKeys('http://www.ilovebonsai.pl');
      addBtn.click();
  
      expect(allURL.last().getText()).toContain('http://www.ilovebonsai.pl');
      expect(allURL.count()).toEqual(2);
    });  
  });