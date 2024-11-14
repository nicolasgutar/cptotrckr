// src/components/ShibaInuDetail.jsx

import React from 'react';
import { useIntl } from 'react-intl';

const ShibaInuDetail = () => {
    const intl = useIntl();

    return (
        <div className="bg-gradient-to-b from-blue-50 to-blue-100">
            <div className="max-w-3xl mx-auto p-6 text-gray-800 space-y-8">

                {/* Title Section */}
                <section className="text-center">
                    <h1 className="text-4xl font-bold text-red-600">
                        {intl.formatMessage({ id: "shibaInu.title", defaultMessage: "Shiba Inu (SHIB)" })}
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">
                        {intl.formatMessage({
                            id: "shibaInu.subtitle",
                            defaultMessage: "The meme-inspired cryptocurrency known as the 'Dogecoin Killer'"
                        })}
                    </p>
                </section>

                {/* History Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-red-500">
                        {intl.formatMessage({ id: "shibaInu.history.title", defaultMessage: "History of Shiba Inu" })}
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        {intl.formatMessage({
                            id: "shibaInu.history.text1",
                            defaultMessage: "Shiba Inu (SHIB) was created in August 2020 by an anonymous developer known as 'Ryoshi.' Inspired by Dogecoin, another meme cryptocurrency, Shiba Inu aimed to become a community-driven project with a decentralized vision. It quickly gained popularity due to its 'meme' appeal and its low price, which attracted a large number of investors hoping for high returns."
                        })}
                    </p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        {intl.formatMessage({
                            id: "shibaInu.history.text2",
                            defaultMessage: "Unlike other cryptocurrencies, Shiba Inu adopted a unique approach by branding itself as the 'Dogecoin Killer.' Its ecosystem also introduced additional tokens like LEASH and BONE, each serving different roles within the Shiba Inu ecosystem."
                        })}
                    </p>
                </section>

                {/* How Shiba Inu Works */}
                <section>
                    <h2 className="text-2xl font-semibold text-red-500">
                        {intl.formatMessage({ id: "shibaInu.howItWorks.title", defaultMessage: "How Shiba Inu Works" })}
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        {intl.formatMessage({
                            id: "shibaInu.howItWorks.text1",
                            defaultMessage: "Shiba Inu is an ERC-20 token, which means it operates on the Ethereum blockchain. This gives it access to Ethereum’s robust infrastructure and enables the use of smart contracts. The Shiba Inu ecosystem comprises three main tokens: SHIB, LEASH, and BONE. SHIB is the primary token used for transactions, LEASH acts as a store of value, and BONE is used for governance, allowing holders to vote on future proposals."
                        })}
                    </p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                        {intl.formatMessage({
                            id: "shibaInu.howItWorks.text2",
                            defaultMessage: "Shiba Inu also launched its own decentralized exchange (DEX) called ShibaSwap, where users can trade tokens, provide liquidity, and stake tokens to earn rewards. This ecosystem aims to offer utility beyond the typical 'meme coin' status."
                        })}
                    </p>
                </section>

                {/* Key Features of Shiba Inu */}
                <section>
                    <h2 className="text-2xl font-semibold text-red-500">
                        {intl.formatMessage({ id: "shibaInu.features.title", defaultMessage: "Key Features of Shiba Inu" })}
                    </h2>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                        <li>
                            <strong>{intl.formatMessage({ id: "shibaInu.features.communityDriven", defaultMessage: "Community-Driven:" })}</strong>
                            {intl.formatMessage({
                                id: "shibaInu.features.communityDrivenText",
                                defaultMessage: " Shiba Inu is known for its active community, which has contributed to its viral popularity and adoption."
                            })}
                        </li>
                        <li>
                            <strong>{intl.formatMessage({ id: "shibaInu.features.multiToken", defaultMessage: "Multi-Token Ecosystem:" })}</strong>
                            {intl.formatMessage({
                                id: "shibaInu.features.multiTokenText",
                                defaultMessage: " Shiba Inu uses three tokens (SHIB, LEASH, and BONE) to create a dynamic ecosystem with various utilities."
                            })}
                        </li>
                        <li>
                            <strong>{intl.formatMessage({ id: "shibaInu.features.shibaSwap", defaultMessage: "ShibaSwap:" })}</strong>
                            {intl.formatMessage({
                                id: "shibaInu.features.shibaSwapText",
                                defaultMessage: " The Shiba Inu DEX, where users can trade, stake, and earn rewards, aiming to add real utility to the token."
                            })}
                        </li>
                        <li>
                            <strong>{intl.formatMessage({ id: "shibaInu.features.ethereumBased", defaultMessage: "Ethereum-Based:" })}</strong>
                            {intl.formatMessage({
                                id: "shibaInu.features.ethereumBasedText",
                                defaultMessage: " Operating as an ERC-20 token, Shiba Inu benefits from Ethereum’s infrastructure and security."
                            })}
                        </li>
                    </ul>
                </section>

                {/* Advantages and Disadvantages */}
                <section>
                    <h2 className="text-2xl font-semibold text-red-500">
                        {intl.formatMessage({ id: "shibaInu.advantagesDisadvantages.title", defaultMessage: "Advantages and Disadvantages of Shiba Inu" })}
                    </h2>
                    <div className="mt-4 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-red-600">
                                {intl.formatMessage({ id: "shibaInu.advantages.title", defaultMessage: "Advantages" })}
                            </h3>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                                <li>{intl.formatMessage({ id: "shibaInu.advantages.advantage1", defaultMessage: "Strong community backing, driving viral marketing and widespread attention." })}</li>
                                <li>{intl.formatMessage({ id: "shibaInu.advantages.advantage2", defaultMessage: "ShibaSwap offers decentralized trading, staking, and rewards." })}</li>
                                <li>{intl.formatMessage({ id: "shibaInu.advantages.advantage3", defaultMessage: "Low entry price, which appeals to many new investors looking for potential growth." })}</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-red-600">
                                {intl.formatMessage({ id: "shibaInu.disadvantages.title", defaultMessage: "Disadvantages" })}
                            </h3>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                                <li>{intl.formatMessage({ id: "shibaInu.disadvantages.disadvantage1", defaultMessage: "Highly volatile and speculative, often influenced by market trends and social media." })}</li>
                                <li>{intl.formatMessage({ id: "shibaInu.disadvantages.disadvantage2", defaultMessage: "Limited real-world utility outside of the Shiba Inu ecosystem." })}</li>
                                <li>{intl.formatMessage({ id: "shibaInu.disadvantages.disadvantage3", defaultMessage: "Concerns about sustainability and longevity as a meme-based token." })}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Closing Thoughts */}
                <section>
                    <h2 className="text-2xl font-semibold text-red-500">
                        {intl.formatMessage({ id: "shibaInu.closingThoughts.title", defaultMessage: "Closing Thoughts" })}
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        {intl.formatMessage({
                            id: "shibaInu.closingThoughts.text",
                            defaultMessage: "Shiba Inu has made a significant impact in the cryptocurrency world, leveraging community enthusiasm and the appeal of 'meme culture.' Although it is highly speculative, the Shiba Inu ecosystem’s growth and the addition of features like ShibaSwap show potential for increased utility. Investors should consider both the opportunities and risks associated with this popular but volatile cryptocurrency."
                        })}
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ShibaInuDetail;
