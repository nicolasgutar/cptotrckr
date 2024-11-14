// src/components/EthereumDetail.jsx

import React from 'react';
import { FormattedMessage } from 'react-intl';

const EthereumDetail = () => {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-blue-100">
            <div className="max-w-3xl mx-auto p-6 text-gray-800 space-y-8">

                {/* Title Section */}
                <section className="text-center">
                    <h1 className="text-4xl font-bold text-blue-600">
                        <FormattedMessage id="ethereum.title" defaultMessage="Ethereum" />
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">
                        <FormattedMessage
                            id="ethereum.subtitle"
                            defaultMessage="The decentralized platform for smart contracts and decentralized applications (dApps)"
                        />
                    </p>
                </section>

                {/* History Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-500">
                        <FormattedMessage id="ethereum.history.title" defaultMessage="History of Ethereum" />
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        <FormattedMessage
                            id="ethereum.history.text1"
                            defaultMessage="Ethereum was proposed in 2013 by programmer Vitalik Buterin as a blockchain platform with a wider scope than Bitcoin. While Bitcoin was created primarily as a digital currency, Ethereum was designed to serve as a decentralized platform that enables developers to build and deploy applications (smart contracts) on top of its blockchain."
                        />
                    </p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        <FormattedMessage
                            id="ethereum.history.text2"
                            defaultMessage="In 2015, Ethereum launched its main network, enabling the first smart contracts to be created and executed on the blockchain. Ethereum quickly gained traction and became the second-largest cryptocurrency by market capitalization, driving the development of the decentralized finance (DeFi) ecosystem and non-fungible tokens (NFTs)."
                        />
                    </p>
                </section>

                {/* How Ethereum Works */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-500">
                        <FormattedMessage id="ethereum.howItWorks.title" defaultMessage="How Ethereum Works" />
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        <FormattedMessage
                            id="ethereum.howItWorks.text1"
                            defaultMessage="Ethereum is powered by a decentralized network of computers running the Ethereum Virtual Machine (EVM), which executes smart contracts. These smart contracts are self-executing programs that automatically enforce the terms of an agreement, enabling applications without a central authority."
                        />
                    </p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        <FormattedMessage
                            id="ethereum.howItWorks.text2"
                            defaultMessage="Ethereum has also transitioned from a Proof of Work (PoW) consensus mechanism to Proof of Stake (PoS) with the Ethereum 2.0 upgrade. This switch aims to improve scalability, reduce energy consumption, and increase the network’s overall efficiency."
                        />
                    </p>
                </section>

                {/* Key Features of Ethereum */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-500">
                        <FormattedMessage id="ethereum.features.title" defaultMessage="Key Features of Ethereum" />
                    </h2>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                        <li>
                            <strong>
                                <FormattedMessage id="ethereum.features.smartContracts" defaultMessage="Smart Contracts:" />
                            </strong>
                            <FormattedMessage
                                id="ethereum.features.smartContractsText"
                                defaultMessage="Self-executing contracts coded to enforce rules without intermediaries."
                            />
                        </li>
                        <li>
                            <strong>
                                <FormattedMessage id="ethereum.features.dapps" defaultMessage="Decentralized Applications (dApps):" />
                            </strong>
                            <FormattedMessage
                                id="ethereum.features.dappsText"
                                defaultMessage="Ethereum supports the development of dApps, which run on its blockchain without a central authority."
                            />
                        </li>
                        <li>
                            <strong>
                                <FormattedMessage id="ethereum.features.tokens" defaultMessage="ERC-20 and ERC-721 Tokens:" />
                            </strong>
                            <FormattedMessage
                                id="ethereum.features.tokensText"
                                defaultMessage="Ethereum provides standards like ERC-20 for fungible tokens and ERC-721 for non-fungible tokens (NFTs), forming the backbone of DeFi and NFT ecosystems."
                            />
                        </li>
                        <li>
                            <strong>
                                <FormattedMessage id="ethereum.features.proofOfStake" defaultMessage="Proof of Stake:" />
                            </strong>
                            <FormattedMessage
                                id="ethereum.features.proofOfStakeText"
                                defaultMessage="Ethereum's transition to PoS reduces energy consumption and enables staking, which makes the network more sustainable."
                            />
                        </li>
                    </ul>
                </section>

                {/* Advantages and Disadvantages */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-500">
                        <FormattedMessage id="ethereum.advantagesDisadvantages.title" defaultMessage="Advantages and Disadvantages of Ethereum" />
                    </h2>
                    <div className="mt-4 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-blue-600">
                                <FormattedMessage id="ethereum.advantages.title" defaultMessage="Advantages" />
                            </h3>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                                <li>
                                    <FormattedMessage
                                        id="ethereum.advantages.advantage1"
                                        defaultMessage="Supports smart contracts and dApps, enabling decentralized services."
                                    />
                                </li>
                                <li>
                                    <FormattedMessage
                                        id="ethereum.advantages.advantage2"
                                        defaultMessage="Large and active developer community, continuously innovating the ecosystem."
                                    />
                                </li>
                                <li>
                                    <FormattedMessage
                                        id="ethereum.advantages.advantage3"
                                        defaultMessage="Transition to Proof of Stake enhances scalability and reduces environmental impact."
                                    />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-blue-600">
                                <FormattedMessage id="ethereum.disadvantages.title" defaultMessage="Disadvantages" />
                            </h3>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                                <li>
                                    <FormattedMessage
                                        id="ethereum.disadvantages.disadvantage1"
                                        defaultMessage="High transaction fees ('gas fees') during network congestion."
                                    />
                                </li>
                                <li>
                                    <FormattedMessage
                                        id="ethereum.disadvantages.disadvantage2"
                                        defaultMessage="Scalability issues, though these are being addressed with upgrades."
                                    />
                                </li>
                                <li>
                                    <FormattedMessage
                                        id="ethereum.disadvantages.disadvantage3"
                                        defaultMessage="Smart contract bugs can lead to financial losses without recourse."
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Closing Thoughts */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-500">
                        <FormattedMessage id="ethereum.closingThoughts.title" defaultMessage="Closing Thoughts" />
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        <FormattedMessage
                            id="ethereum.closingThoughts.text"
                            defaultMessage="Ethereum has transformed the blockchain landscape by enabling a wide range of decentralized applications and smart contract functionality. While there are challenges such as scalability and transaction costs, ongoing upgrades like Ethereum 2.0 aim to address these issues. Ethereum's innovative approach continues to drive the development of DeFi, NFTs, and more, making it one of the most versatile and widely-used blockchain platforms."
                        />
                    </p>
                </section>
            </div>
        </div>
    );
};

export default EthereumDetail;
