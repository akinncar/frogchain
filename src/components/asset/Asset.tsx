import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useMMKVString } from 'react-native-mmkv';
import { BigNumber } from 'ethers';

import { tw } from '../ui/tailwind';
import { assets } from '../../constants/assets';
import { getWalletBalance } from '../../core/wallet/getWalletBalance';
import type { RootStackParamList } from '../../routes';
import { RoundedButton } from '../ui/roundedButton/RoundedButton';
import { getTransactionHistory } from '../../core/wallet/getTransactionHistory';
import { formatToCryptoValue } from '../../core/numberUtils/formatToCryptoValue';

import { Chart } from './Chart';
import { Transaction } from './Transaction';
import { ChartSwitcher } from './ChartSwitcher';

const GRAPH_INTERVAL_8H_PARAM = '&interval=1m&limit=480';
const GRAPH_INTERVAL_1D_PARAM = '&interval=3m&limit=480';
const GRAPH_INTERVAL_7D_PARAM = '&interval=30m&limit=336';

type GraphIntervalType =
  | typeof GRAPH_INTERVAL_8H_PARAM
  | typeof GRAPH_INTERVAL_1D_PARAM
  | typeof GRAPH_INTERVAL_7D_PARAM;

export function Asset(): JSX.Element {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'Asset'>>();
  const { assetName } = route.params;

  const [privateKey] = useMMKVString('wallet.private-key');

  const [graphData, setGraphData] = useState([]);
  const [graphInterval, setGraphInterval] = useState<GraphIntervalType>(
    GRAPH_INTERVAL_1D_PARAM
  );
  const [balance, setBalance] = React.useState<BigNumber | undefined>(
    undefined
  );
  const [transactionHistory, setTransactionHistory] = React.useState<any>([]);

  const asset = assets[assetName];

  async function loadWalletBalance() {
    const walletBalance = await getWalletBalance({
      privateKey,
      assetName,
    });
    setBalance(walletBalance);
  }

  async function loadWalletTransactions() {
    const walletTransactions = await getTransactionHistory({
      privateKey,
      assetName,
    });
    setTransactionHistory(walletTransactions.reverse());
  }

  useEffect(() => {
    loadPriceHistory(graphInterval);
    loadWalletBalance();
    loadWalletTransactions();
  }, []);

  useEffect(() => {
    loadPriceHistory(graphInterval);
  }, [graphInterval]);

  async function loadPriceHistory(interval: GraphIntervalType) {
    const response = await fetch(
      `https://api.binance.com/api/v3/klines?symbol=${asset.ticker}USDT${interval}`
    );

    // [
    //   [
    //     1499040000000,      // Open time
    //     "0.01634790",       // Open
    //     "0.80000000",       // High
    //     "0.01575800",       // Low
    //     "0.01577100",       // Close
    //     "148976.11427815",  // Volume
    //     1499644799999,      // Close time
    //     "2434.19055334",    // Quote asset volume
    //     308,                // Number of trades
    //     "1756.87402397",    // Taker buy base asset volume
    //     "28.46694368",      // Taker buy quote asset volume
    //     "17928899.62484339" // Ignore.
    //   ]
    // ]

    const data = await response.json();
    setGraphData(
      data.map(d => ({
        date: d[6],
        value: d[4],
      }))
    );
  }

  return (
    <View style={tw`flex-1 items-center justify-center px-4`}>
      <FlatList
        style={tw`w-full`}
        bounces={false}
        ListHeaderComponent={
          <SafeAreaView style={tw`w-full items-center justify-center`}>
            <Text style={tw`text-white text-right font-bold p-4`}>
              {asset.label} ({asset.ticker})
            </Text>
            <View style={tw`flex-row justify-between w-full py-4`}>
              <RoundedButton icon="Buy" label="Buy" onPress={() => {}} />
              <RoundedButton
                icon="Send"
                label="Send"
                onPress={() => navigation.navigate('Send', { assetName })}
              />
              <RoundedButton
                icon="Receive"
                label="Receive"
                onPress={() => navigation.navigate('Receive', { assetName })}
              />
              <RoundedButton
                icon="Convert"
                label="Convert"
                onPress={() => {}}
              />
            </View>
            <View style={tw`w-full rounded-lg border-2 border-background py-4`}>
              <Text style={tw`text-white text-right px-4 pb-2`}>
                {balance &&
                  ` ${formatToCryptoValue({
                    value: balance,
                    assetName,
                  })}`}
              </Text>
              <Chart graphData={graphData} />
              <View
                style={tw`flex-row justify-between w-full border-t-2 border-background p-4`}
              >
                <ChartSwitcher
                  label="8H"
                  enabled={graphInterval === GRAPH_INTERVAL_8H_PARAM}
                  onPress={() => setGraphInterval(GRAPH_INTERVAL_8H_PARAM)}
                />
                <ChartSwitcher
                  label="1D"
                  enabled={graphInterval === GRAPH_INTERVAL_1D_PARAM}
                  onPress={() => setGraphInterval(GRAPH_INTERVAL_1D_PARAM)}
                />
                <ChartSwitcher
                  label="7D"
                  enabled={graphInterval === GRAPH_INTERVAL_7D_PARAM}
                  onPress={() => setGraphInterval(GRAPH_INTERVAL_7D_PARAM)}
                />
              </View>
            </View>
          </SafeAreaView>
        }
        ItemSeparatorComponent={() => <View style={tw`h-4`} />}
        data={transactionHistory}
        renderItem={({ item: transaction }) => (
          <Transaction transaction={transaction} assetName={assetName} />
        )}
      />
    </View>
  );
}
