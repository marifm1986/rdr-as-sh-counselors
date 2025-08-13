import React from 'react'
import { motion } from 'framer-motion'
import { Users, Ban, Wallet, Timer, LineChart, UserCog } from 'lucide-react'
interface AdvantagesProps {
    'data-id'?: string
}
export const Advantages: React.FC<AdvantagesProps> = ({
    'data-id': dataId,
}) => {
    const advantages = [
        {
            title: 'Client Care',
            icon: <Users className="w-8 h-8 text-amber-500" />,
            description:
                'We offer the highest level of customer satisfaction and a personal level of service. Our experienced professionals will make sure you have a clear understanding of the debt relief program selected to suit your needs. Our debt relief experts will reach out at every step to mitigate harassing creditor calls and guide you through the process of debt relief.',
        },
        {
            title: 'Total Transparency',
            icon: <LineChart className="w-8 h-8 text-amber-500" />,
            description:
                'You will not be pressurized and can take your time to decide on the program best suited to your needs. We are here to make sure that you reach your goal with the help of our qualified staff.',
        },
        {
            title: 'No Upfront Fees',
            icon: <Ban className="w-8 h-8 text-amber-500" />,
            description:
                'You can contact us for free debt consultation and evaluation and also customized debt relief programs without paying any fees. No upfront fees will be charged and you do not pay a thing until we can successfully lower your debt.',
        },
        {
            title: 'Account Management',
            icon: <UserCog className="w-8 h-8 text-amber-500" />,
            description:
                'When you are enrolled in Royal Relief Debt program you will be assigned a Special Dedicated Account Manager who will guide you through the entire negotiation process, keep you updated and get your authorization to proceed with finalizing your debt settlement. In this way, you stay in control over the whole process and have a final say in the settlements.',
        },
        {
            title: 'Flexible Programs To Fit Your Budget',
            icon: <Wallet className="w-8 h-8 text-amber-500" />,
            description:
                'Our debt relief program is the most flexible of most of the other programs in terms of monthly budgeting. You decide on what amount you can afford to pay each month in your special dedicated account. If you miss paying your monthly installment you do not need to pay any penalty charges; the only penalty is that your program may take longer to complete. You can also fund your account over and above your basic level so that you can make up for any missed monthly payment.',
        },
        {
            title: 'Fast Debt Relief That Works',
            icon: <Timer className="w-8 h-8 text-amber-500" />,
            description:
                'When you select a debt relief plan our debt negotiators will negotiate with your creditors to make sure that your debts are reduced by a significant margin. We will work hard not only to lower your monthly payments but also get you out of debt in the shortest time frame possible i.e. 12-48 months depending on your financial situation.',
        },
    ]
    return (
        <section data-id={dataId} className="w-full bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
                >
                    Royal Debt Relief Major Advantages
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: index * 0.1,
                            }}
                            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                {advantage.icon}
                                <h3 className="text-xl font-semibold ml-3 text-gray-800">
                                    {advantage.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                {advantage.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
