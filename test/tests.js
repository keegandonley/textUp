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

    it("jQuery should be defined", function() {
      // If jQuery ($) is not defined, styling and (in the future,
      // animations) will not work, and as such related tests
      // will fail.
      expect(jQuery).to.be.ok;
      expect($).to.be.ok;
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

  describe("testing styling of elements", function() {
    it("no styles should be enabled", function() {
      expect($('#one').hasClass()).be.equal(false);
      expect($('#two').hasClass()).be.equal(false);
      expect($('#three').hasClass()).be.equal(false);
    });

    it("should add an element (for later style)", function() {
      textUp.addElem("four");
      expect(textUp.getElems()[3]).to.be.ok;
      expect(textUp.getElems().length).be.equal(4);
    });

    it("prepend text with style", function() {
      textUp.prepend("final!", true);
      // Here, all we care about is whether the text was added successfully
      expect(document.getElementById('one').innerHTML).be.equal("final!");
      expect(document.getElementById('two').innerHTML).be.equal("stick!");
      expect(document.getElementById('three').innerHTML).be.equal("stick!");
      expect(document.getElementById('four').innerHTML).be.equal("test");
    });

    it("all text fields should have style", function() {
      /*These are the classes that are added and used to style the elements,
      so if they exist it means the style has been applied.
      */


      expect($('#one').hasClass('textUp_top_format')).be.equal(true);
      expect($('#two').hasClass('textUp_second_format')).be.equal(true);
      expect($('#three').hasClass('textUp_basic_format')).be.equal(true);
      expect($('#four').hasClass('textUp_basic_format')).be.equal(true);
    })
  });

});
