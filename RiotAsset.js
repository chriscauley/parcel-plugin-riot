const { compile } = require('riot-compiler');
const JSAsset = require('parcel-bundler/src/assets/JSAsset');
const preamble = "const riot = require('riot');\n";

class RiotAsset extends JSAsset {
  async load() {
    const content = await super.load();
    const riotOpts = {};

    let compiled = compile(content, riotOpts, this.name);
    return `${ preamble }${ compiled }`;
  }
}

module.exports = RiotAsset;