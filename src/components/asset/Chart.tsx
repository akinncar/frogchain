import React from 'react';
import { LineGraph } from 'react-native-graph';
import type { GraphPoint } from 'react-native-graph/lib/typescript/LineGraphProps';

import { tw } from '../ui/tailwind';

export function Chart({ graphData }: { graphData: GraphPoint[] }) {
  return (
    <LineGraph
      points={graphData}
      color="#A657E4"
      animated={false}
      style={tw`h-40 w-full`}
    />
  );
}
