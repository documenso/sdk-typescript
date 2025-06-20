/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Documents } from "./documents.js";
import { Embedding } from "./embedding.js";
import { Templates } from "./templates.js";

export class Documenso extends ClientSDK {
  private _documents?: Documents;
  get documents(): Documents {
    return (this._documents ??= new Documents(this._options));
  }

  private _templates?: Templates;
  get templates(): Templates {
    return (this._templates ??= new Templates(this._options));
  }

  private _embedding?: Embedding;
  get embedding(): Embedding {
    return (this._embedding ??= new Embedding(this._options));
  }
}
