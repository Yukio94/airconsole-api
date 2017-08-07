describe("AirConsole 1.7.0", function() {
  var overwrites = {};

  // Overwrite functions
  AirConsole.postMessage_ = function(data) {};

  function initAirConsole() {
    //
    airconsole = new AirConsole({
      setup_document: false
    });
    airconsole.device_id = AirConsole.SCREEN;

    airconsole.devices[0] = {};
    airconsole.devices[1] = undefined;

    var device_data = {
      uid: 1237,
      nickname: "Sergio",
      location: LOCATION,
      custom: {}
    };
    airconsole.devices[DEVICE_ID] = device_data;
  }

  function tearDown() {
    if (airconsole) {
      window.removeEventListener('message', airconsole.onPostMessage_);
      airconsole = null;
    }
  }

  afterEach(function() {
    tearDown();
  });

  /**
    ======================================================================================
    COMMON FUNCTIONALITY
  */

  describe("Setup functionality", function() {

    beforeEach(function() {
    });

    afterEach(function() {
      tearDown();
    });

    testSetup("1.7.0");

  });

  /**
    ======================================================================================
    TEST CONNECTIVTY
  */

  describe("Connectivity", function() {

    beforeEach(function() {
      initAirConsole();
    });

    afterEach(function() {
      tearDown();
    });

    overwrites["Should return the correct master device id"] = function() {
      var expected_id = 5;
      airconsole.devices = [];
      airconsole.devices[AirConsole.SCREEN] = {"device": "screen"};
      airconsole.devices[3] = { "device": "unicorn", location: LOCATION };
      airconsole.devices[expected_id] = {
        "device": "hero",
        location: LOCATION,
        premium: true
      };
      airconsole.devices[6] = { "device": "other hero", location: LOCATION, premium: true };
      //
      var actual_id = airconsole.getMasterControllerDeviceId();
      expect(actual_id).toEqual(expected_id);
    };

    testConnectivity(overwrites);

  });

/**
  ======================================================================================
  COMMON FUNCTIONALITY
*/

  describe("Messaging", function() {

    beforeEach(function() {
      initAirConsole();
    });

    afterEach(function() {
      tearDown();
    });

    testMessaging();

  });

  /**
    ======================================================================================
    TEST DEVICE STATES
  */

  describe("Device States", function() {

    beforeEach(function() {
      initAirConsole();
    });

    afterEach(function() {
      tearDown();
    });

    testDeviceStates();

  });

  /**
    ======================================================================================
    COMMON PROFILE FUNCTIONALITY
  */

  describe("Profile", function() {

    beforeEach(function() {
      initAirConsole();
    });

    afterEach(function() {
      tearDown();
    });

    testProfile();

  });

  /**
    ======================================================================================
    COMMON PROFILE FUNCTIONALITY
  */

  describe("Active Players", function() {

    beforeEach(function() {
      initAirConsole();
    });

    afterEach(function() {
      tearDown();
    });

    testActivePlayers();

  });

  /**
    ======================================================================================
    TEST CTRL INPUTS
  */

  describe("Controller Inputs", function() {

    beforeEach(function() {
      initAirConsole();
    });

    afterEach(function() {
      tearDown();
    });

    testCtrlInputs();

  });

  /**
    ======================================================================================
    TEST ADS
  */

  describe("Ads", function() {

    beforeEach(function() {
      initAirConsole();
    });

    afterEach(function() {
      tearDown();
    });

    testAds();

  });

  /**
    ======================================================================================
    PREMIUM FUNCTIONALITY
  */

  describe("Premium", function() {

    beforeEach(function() {
      initAirConsole();
    });

    afterEach(function() {
      tearDown();
    });

    testPremium();

  });

  /**
    ======================================================================================
    TEST NAVIGATION
  */

  describe("Navigation", function() {

    beforeEach(function() {
      initAirConsole();
    });

    afterEach(function() {
      tearDown();
    });

    testNavigation();

  });

  /**
    ======================================================================================
    TEST UI
  */

  describe("User Interface", function() {

    beforeEach(function() {
      initAirConsole();
    });

    afterEach(function() {
      tearDown();
    });

    testUI();
  });

  /**
    ======================================================================================
    TEST DEVICE STATES
  */

  describe("Persistent Data", function() {

    beforeEach(function() {
      initAirConsole();
    });

    afterEach(function() {
      tearDown();
    });

    testPersistentData();

  });

  /**
    ======================================================================================
    TEST DEVICE STATES
  */

  describe("High Scores", function() {

    beforeEach(function() {
      initAirConsole();
    });

    afterEach(function() {
      tearDown();
    });

  });

});