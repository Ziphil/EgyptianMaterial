//

import blockFigureContainerManager from "./block/figure-container";
import blockHeadingManager from "./block/heading";
import blockNormalTableManager from "./block/normal-table";
import blockParagraphManager from "./block/paragraph";
import blockSectionManager from "./block/section";
import fallbackManager from "./fallback";
import inlineCommonManager from "./inline/common";
import inlineForeignManager from "./inline/foreign";
import rootManager from "./root";


const managers = [
  blockSectionManager,
  blockHeadingManager,
  blockParagraphManager,
  blockFigureContainerManager,
  blockNormalTableManager,
  inlineCommonManager,
  inlineForeignManager,
  rootManager,
  fallbackManager
];

export default managers;