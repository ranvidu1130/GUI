export default {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!axios)/"
  ],
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".jsx", ".js", ".mjs"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  }
}
