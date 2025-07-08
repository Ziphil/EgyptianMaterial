//

import blockNormalTableManager from "./block/normal-table";
import fallbackManager from "./fallback";
import inlineCommonManager from "./inline/common";
import inlineForeignManager from "./inline/foreign";
import rootManager from "./root";


const managers = [
  blockNormalTableManager,
  inlineCommonManager,
  inlineForeignManager,
  rootManager,
  fallbackManager
];

export default managers;