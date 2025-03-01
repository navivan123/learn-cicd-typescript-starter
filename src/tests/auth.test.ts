import { getAPIKey } from "src/api/auth";
import { describe, expect, test } from "vitest";

describe("getApiKey", () => {
  test("getApiKey header with empty dict", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("getApiKey header with dict and no auth-header key", () => {
    const headers = { tk: "bruh" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("getApiKey header with auth-header key and malformed ApiKey lead.", () => {
    const headers = { authorization: "ApiKeyeye bongos awo." };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("getApiKey header with auth-header key and correct ApiKey but empty key.", () => {
    const headers = { authorization: "ApiKey" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("getApiKey header with auth-header key AND the correct key :).", () => {
    const headers = { authorization: "ApiKey abcd" };
    expect(getAPIKey(headers)).toBe("abcd");
  });
});
