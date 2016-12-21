var expect = chai.expect;

document.getElementById("testelems").style.display = "none";

describe("Textup", function() {
  describe("creation of global variable", function() {
    it("should exist", function() {
      expect(textUp).to.be.ok;
    });
  });

  describe("adding elements to the list", function() {
    it("should add an element", function() {
      textUp.addElem('one');
      var result = {id: "one", sticky: false};
      expect(textUp.getElems()[0]).deep.equal(result);
    });
    it("should add another element", function() {
      textUp.addElem('two');
      var result = {id: "two", sticky: false};
      expect(textUp.getElems()[1]).deep.equal(result);
    });
  });

  describe("test sticky elements", function() {
    it("should stick an element", function() {
      textUp.stick('one');
      var result = {id: "one", sticky: true};
      expect(textUp.getElems()[0]).deep.equal(result);
    });

    it("should stick another element", function() {
      textUp.stick('two');
      var result = {id: "two", sticky: true};
      expect(textUp.getElems()[1]).deep.equal(result);
    });

    it("should unstick an element", function() {
      textUp.unStick('one');
      var result = {id: "one", sticky: false};
      expect(textUp.getElems()[0]).deep.equal(result);
    });
  });

});
