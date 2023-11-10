import { CheckIcon } from "lucide-react";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

const tiers = [
  {
    name: "Starter",
    id: null,
    href: "#",
    priceMonthly: null,
    description: "Get chatting right away with anyone",
    features: [
      "20 Message Chat Limit in Chats",
      "2 Participants limit in Chat",
      "Supports 2 languages",
      "24Hr response time",
    ],
  },
  {
    name: "Pro",
    id: "pro",
    href: "#",
    priceMonthly: "$5.99",
    description: "Unlock the full potential with Pro",
    features: [
      "Unlimited messages in Chats",
      "Unlimited Participants in Chat",
      "Unlimited Chat Rooms",
      "Supports up to 10 languages",
      "Multimedia supports in Chats (coming soon)",
      "1-hour, dedicated support response time",
      "Early access to new features",
    ],
  },
];

const PricingCards = ({ redirect }: { redirect: boolean }) => {
  return (
    <div>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="flex flex-col justify-between rounded-3xl dark:bg-gray-900 bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
            <div>
              <h3
                id={tier.id + tier.name}
                className="text-base font-semibold leading-7 text-indigo-600">
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                {tier.priceMonthly ? (
                  <>
                    <span className="text-5xl font-bold tracing-tight dark:text-white">
                      {tier.priceMonthly}
                    </span>
                    <span className="text-base font-semibold leading-7 text-gray-600">
                      /month
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-bold tracking-tight dark:text-white">
                    Free
                  </span>
                )}
              </div>
              <p className="mt-6 font-semibold text-base leading-7 text-gray-600">
                {tier.description}
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-gray-600">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-non text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {redirect ? (
              <Link
                href="/register"
                className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focust-visible:outline-indigo-600 cursor-pointer">
                Get Started today
              </Link>
            ) : (
              tier.id && <CheckoutButton />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
