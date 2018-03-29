describe('Check new URL adding app', function() {
    var newURL = element(by.model('enter'));
    var addBtn = element(by.id('add'));
    
    var allURL = element.all(by.repeater('all url'));

    
    it('sprawdzenie jaki url został wpisany w inpucie', function() {

      newURL.sendKeys('http://www.ibuki.com.pl');
      addBtn.click();

      expect(newURLr.getAttribute('value')).toBe('http://www.ibuki.com.pl');     
    });  

    it('dodanie dwóch adresów url i sprawdzenie czy oba zostały wylistowane', function() {
      newURL.sendKeys('http://www.ibuki.com.pl');        
      addBtn.click();
      newURL.sendKeys('http://www.ilovebonsai.pl');
      addBtn.click();
  
      expect(allURL.last().getText()).toContain('http://www.ilovebonsai.pl');
      expect(allURL.count()).toEqual(2);
    });  
  });