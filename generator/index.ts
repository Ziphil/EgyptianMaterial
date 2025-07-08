//

import "source-map-support/register";
import "@zenml/xmldom";
import templateManagers from "../template";
import {CustomGenerator} from "./generator";


const generator = new CustomGenerator({
  pluginManagers: [],
  templateManagers,
  documentDirPath: "document",
  outputDirPath: "out",
  errorLogPath: "log/error.txt",
  filterDocumentPath: (documentPath) => documentPath.endsWith(".zml") || documentPath === "document/style/style.scss"
});
generator.execute();