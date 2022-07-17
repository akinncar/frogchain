import React from 'react';
import { LineGraph } from '../../../_local_modules/react-native-graph/src';

import type { GraphPoint } from 'react-native-graph/lib/typescript/LineGraphProps';

import { tw } from '../ui/tailwind';

export function Chart({ graphData, ...props }: { graphData: GraphPoint[] }) {
  return (
    <LineGraph
      points={graphData}
      color="#A657E4"
      animated={true}
      style={tw`h-40 w-full`}
      {...props}
    />
  );
}
