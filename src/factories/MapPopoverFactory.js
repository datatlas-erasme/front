import React, { useState } from 'react';
import styled from 'styled-components';
import { LayerHoverInfoFactory, CoordinateInfoFactory } from 'erasme-kepler.gl/components';

import { injectIntl } from 'react-intl';

import Tippy from '@tippyjs/react/headless';




MapPopoverFactory.deps = [LayerHoverInfoFactory, CoordinateInfoFactory];


export default function MapPopoverFactory(LayerHoverInfo, CoordinateInfo) {


  return injectIntl(MapPopover);
}
