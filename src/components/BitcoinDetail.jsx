// src/components/BitcoinDetail.jsx

import React from 'react';
import { FormattedMessage } from 'react-intl';

const BitcoinDetail = () => {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-blue-100">
            <div className="max-w-3xl mx-auto p-6 text-gray-800 space-y-8">

                {/* Title Section */}
                <section className="text-center">
                    <h1 className="text-4xl font-bold text-yellow-600">
                        <FormattedMessage id="bitcoin.title" defaultMessage="Bitcoin" />
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">
                        <FormattedMessage
                            id="bitcoin.subtitle"
                            defaultMessage="A decentralized digital currency transforming global finance"
                        />
                    </p>
                </section>

                {/* History Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-yellow-500">
                        <FormattedMessage id="bitcoin.history.title" defaultMessage="History of Bitcoin" />
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        <FormattedMessage
                            id="bitcoin.history.text1"
                            defaultMessage="Bitcoin was introduced in 2008 by an anonymous individual or group known as Satoshi Nakamoto. Nakamoto published the Bitcoin white paper, which described a 'peer-to-peer electronic cash system' that would allow people to send and receive payments without relying on a central authority like a bank."
                        />
                    </p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        <FormattedMessage
                            id="bitcoin.history.text2"
                            defaultMessage="In 2009, Nakamoto released the first Bitcoin software, and the Bitcoin network came to life. The first 'block,' or record, was mined by Nakamoto, known as the Genesis Block. Since then, Bitcoin has gained popularity and is now widely recognized as the first successful cryptocurrency, inspiring thousands of other cryptocurrencies."
                        />
                    </p>
                </section>

                {/* How Bitcoin Works */}
                <section>
                    <h2 className="text-2xl font-semibold text-yellow-500">
                        <FormattedMessage id="bitcoin.howItWorks.title" defaultMessage="How Bitcoin Works" />
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        <FormattedMessage
                            id="bitcoin.howItWorks.text1"
                            defaultMessage="Bitcoin is powered by blockchain technology, a distributed ledger that records all transactions across a network of computers. Bitcoin transactions are verified by 'miners' through a process called mining, which involves solving complex mathematical problems to validate and secure transactions. This system prevents double-spending and ensures trust without needing a central authority."
                        />
                    </p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        <FormattedMessage
                            id="bitcoin.howItWorks.text2"
                            defaultMessage="Bitcoin is also capped at 21 million coins, meaning no more bitcoins can be created beyond that limit. This fixed supply is part of what gives Bitcoin its value, as it contrasts with fiat currencies, which governments can print at will."
                        />
                    </p>
                </section>

                {/* Key Features of Bitcoin */}
                <section>
                    <h2 className="text-2xl font-semibold text-yellow-500">
                        <FormattedMessage id="bitcoin.features.title" defaultMessage="Key Features of Bitcoin" />
                    </h2>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                        <li>
                            <strong>
                                <FormattedMessage id="bitcoin.features.decentralization" defaultMessage="Decentralization:" />
                            </strong>
                            <FormattedMessage
                                id="bitcoin.features.decentralizationText"
                                defaultMessage="Bitcoin operates without a central authority, making it censorship-resistant."
                            />
                        </li>
                        <li>
                            <strong>
                                <FormattedMessage id="bitcoin.features.transparency" defaultMessage="Transparency:" />
                            </strong>
                            <FormattedMessage
                                id="bitcoin.features.transparencyText"
                                defaultMessage="All Bitcoin transactions are recorded on a public ledger, ensuring transparency."
                            />
                        </li>
                        <li>
                            <strong>
                                <FormattedMessage id="bitcoin.features.security" defaultMessage="Security:" />
                            </strong>
                            <FormattedMessage
                                id="bitcoin.features.securityText"
                                defaultMessage="Transactions are secured through cryptography, making it extremely difficult to tamper with."
                            />
                        </li>
                        <li>
                            <strong>
                                <FormattedMessage id="bitcoin.features.limitedSupply" defaultMessage="Limited Supply:" />
                            </strong>
                            <FormattedMessage
                                id="bitcoin.features.limitedSupplyText"
                                defaultMessage="With a cap of 21 million coins, Bitcoin is deflationary, increasing its scarcity."
                            />
                        </li>
                    </ul>
                </section>

                {/* Advantages and Disadvantages */}
                <section>
                    <h2 className="text-2xl font-semibold text-yellow-500">
                        <FormattedMessage id="bitcoin.advantagesDisadvantages.title" defaultMessage="Advantages and Disadvantages of Bitcoin" />
                    </h2>
                    <div className="mt-4 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-yellow-600">
                                <FormattedMessage id="bitcoin.advantages.title" defaultMessage="Advantages" />
                            </h3>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                                <li>
                                    <FormattedMessage
                                        id="bitcoin.advantages.advantage1"
                                        defaultMessage="Decentralized and resistant to censorship."
                                    />
                                </li>
                                <li>
                                    <FormattedMessage
                                        id="bitcoin.advantages.advantage2"
                                        defaultMessage="Enables fast and secure cross-border transactions."
                                    />
                                </li>
                                <li>
                                    <FormattedMessage
                                        id="bitcoin.advantages.advantage3"
                                        defaultMessage="Fixed supply creates scarcity, potentially increasing value over time."
                                    />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-yellow-600">
                                <FormattedMessage id="bitcoin.disadvantages.title" defaultMessage="Disadvantages" />
                            </h3>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                                <li>
                                    <FormattedMessage
                                        id="bitcoin.disadvantages.disadvantage1"
                                        defaultMessage="High price volatility, making it risky as an investment."
                                    />
                                </li>
                                <li>
                                    <FormattedMessage
                                        id="bitcoin.disadvantages.disadvantage2"
                                        defaultMessage="Limited adoption in mainstream commerce."
                                    />
                                </li>
                                <li>
                                    <FormattedMessage
                                        id="bitcoin.disadvantages.disadvantage3"
                                        defaultMessage="Concerns over energy consumption due to mining."
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Closing Thoughts */}
                <section>
                    <h2 className="text-2xl font-semibold text-yellow-500">
                        <FormattedMessage id="bitcoin.closingThoughts.title" defaultMessage="Closing Thoughts" />
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        <FormattedMessage
                            id="bitcoin.closingThoughts.text"
                            defaultMessage="Bitcoin has revolutionized the concept of money by introducing a decentralized digital asset that anyone can use globally. While it has its challenges and risks, Bitcoin has grown to become a viable alternative to traditional financial systems. Its limited supply and robust network security continue to attract supporters, making it a prominent player in the digital asset space."
                        />
                    </p>
                </section>
            </div>
        </div>
    );
};

export default BitcoinDetail;
