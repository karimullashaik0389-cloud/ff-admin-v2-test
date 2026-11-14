// Frost & Flame admin v2 (STAGING) – API config.
// On this computer (localhost) the app talks to the local mock backend at /api.
// Anywhere else it uses TEST_API_URL. Leave it empty until a TEST Apps Script deployment exists.
// NEVER put the live /exec URL here while this is a test build.
(function () {
  var TEST_API_URL = 'https://script.google.com/macros/s/AKfycbwPAQQFf4vk_RgpUQfBvV9ttgddjMUocF3HNEij-q2SRmk29KOazzMi2gIWsNo_Rvw2Jg/exec';
  var local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  window.FF_API_URL = local ? '/api' : TEST_API_URL;
  window.FF_STAGING = true;
})();
