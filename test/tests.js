var expect = chai.expect;

document.getElementById("testelems").style.display = "none";

describe("Textup", function() {
  describe("creation of global variable", function() {
    it("should exist", function() {
      expect(textUp).to.be.ok;
    });

    it("should be empty", function() {
      expect(textUp.getElems()).to.be.empty;
    })
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

    it("should contain the correct # of elements", function() {
      expect(textUp.getElems().length).be.equal(2);
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

    it("should unstick another element", function() {
      textUp.unStick('two');
      var result = {id: "two", sticky: false};
      expect(textUp.getElems()[1]).deep.equal(result);
    });
  });

  describe("adding text", function() {
    it("test prependOne when empty", function() {
      textUp.prependOne("test");
      expect(document.getElementById('one').innerHTML).be.equal("test");
    });

    it("test prepend", function() {
      textUp.prepend("hello");
      expect(document.getElementById('one').innerHTML).be.equal("hello");
    });

    it("test prependOne when full", function() {
      textUp.prependOne("test");
      expect(document.getElementById('one').innerHTML).be.equal("testhello");
    });
  });

  describe("testing sticky responses with content", function() {
    it("test adding text with stuck element", function() {
      textUp.stick("two");
      textUp.addElem("three");
      textUp.prepend("stick!");
      textUp.prepend("stick!");
      expect(document.getElementById('one').innerHTML).be.equal("stick!");
      expect(document.getElementById('two').innerHTML).be.equal("test");
      expect(document.getElementById('three').innerHTML).be.equal("stick!");
    });

    it("test adding text after unsticking element", function() {
      textUp.unStick("two");
      textUp.prepend("stick!");
      expect(document.getElementById('one').innerHTML).be.equal("stick!");
      expect(document.getElementById('two').innerHTML).be.equal("stick!");
      expect(document.getElementById('three').innerHTML).be.equal("test");
    });
  });

});
